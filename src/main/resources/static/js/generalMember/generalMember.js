$(document).ready(function () {
    var table = $('#gm_table').DataTable({
        serverSide: true,
        processing: false,
        searching: true,
        destroy:true,
        ordering:false,
        autoWidth:false,
        paginate: true,
        pageLength: 10,
        ajax: {
            "type" : "POST",
            "url" : '/admin/generalMember/gmList'
        },
        //scrollY:500,
        "language": {
            "emptyTable": "데이터가 없어요.",
            "lengthMenu": "페이지당 _MENU_ 개씩 보기",
            "info": "현재 _START_ - _END_ / _TOTAL_건",
            "infoEmpty": "데이터 없음",
            "infoFiltered": "( _MAX_건의 데이터에서 필터링됨 )",
            "search": "검색: ",
            "zeroRecords": "일치하는 데이터가 없어요.",
            "loadingRecords": "로딩중...",
            "processing":     "잠시만 기다려 주세요...",
            "paginate": {
                "next": "다음",
                "previous": "이전",
            }
        },

        columns: [
            { data: ''},
            { data: "id" },
            { data: "userId" },
            { data: "userName" },
            { data: "phoneRole" },
            { data: "address" },
            { data: "loginType" },
            { data: "createdDate" },
            { data: "deleteYn" }
        ],
        columnDefs: [
            {
                targets: [0],
                className: 'select-checkbox',
                width:"5%",
                data: null,
                defaultContent:'',
            },
            {
                targets: [3],
                render: function (data, type, full, meta){
                    return `${asteriskName(data)}`
                }
            },
            {
                targets: [4],
                render: function (data, type, full, meta){
                    return `${sliceMobile(data)}`
                }
            },
            {
                targets: [5],
                render: function (data, type, full, meta){
                    //주소랑 상세주소 합쳐서 출력해주기 위함
                    const address = full.address === null ? "" : full.address;
                    const address_detail = full.address_detail === null ? "" : full.address_detail;

                    return address + " " + address_detail;
                }
            },
            {
                targets: [8],
                render: function (data, type, full, meta) {
                    if(data === 'N'){
                        return "활성";
                    }else{
                        return "비활성";
                    }
                }
            },
            // {
            //     targets: [2],
            //     render: function (data, type, full, meta) {
            //         return `<a href="#" class="link-primary" onclick="handleDetailForm(${full.id})">${sliceText(data)}</a>`
            //     }
            // },
            {
                targets: [7],
                render: function (data, type, full, meta) {
                    if(data !== null){
                        return data.substring(0,10);
                    }else{
                        return data;
                    }
                }
            },
        ],
        select: {
            style: "multi",
            selector: "td:first-child"
        },
    })
    //allcheck
    $('#gm_table tbody').on('click', 'tr td:first-child', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });

    //전체선택 동작 함수
    $("#checkall").click(function(){
        if($(this).prop("checked")){
            table.rows().select();
            $(".select-checkbox").addClass('selected');
        }else{
            table.rows().deselect();
            $(".select-checkbox").removeClass('selected');
        }
    })
    //검색기능을 켜고 기본 제공 검색 input은 숨김
    $('#gm_table_filter').remove();

})

//신규 등록 클릭
const handleInsertManager = () => {
    $("#gmModal").modal("show");
}

//닫기 버튼
const handleCloseModal = () => {
    $("#idInput").val("");
    $("#phoneNumInput").val("");
    $("#floatingInput").val("");//이메일
    $("#nameInput").val("");
    $("#dateInput").val("");

    $("#managerModal").modal("hide");
    $("#editModal").modal("hide");
}

//수정화면 닫기 버튼
const updateCloseModal = () => {
    $("#updateModal").modal("hide");
}



//신규등록
const handleSave = () => {
    const userId      = $("#idInput").val();
    const phoneNum    = $("#phoneNumInput").val();
    const name        = $("#nameInput").val();

    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let regexDate = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);

    if(userId.trim().length == 0)
    {
        alert("아이디를 입력해주세요");
    }
    else if(phoneNum.trim().length != 11)
    {
        alert("핸드폰번호를 정확히 입력해주세요");
    }
        // else if(!regexEmail.test($("input[id='floatingInput']").val()))
        // {
        //     console.log($("input[id='floatingInput']").val())
        //     alert("옳바른 이메일을 입력해주세요")
    // }
    else if(name.trim().length < 0)
    {
        alert("성함을 입력해주세요.")
    }
        // else if(!regexDate.test($("input[id='dateInput']").val()))
        // {
        //     alert("옳바른 형식의 날짜를 입력해주세요")
    // }
    else{
        $.ajax({
            url: "/admin/generalMember/gmSave",
            data: JSON.stringify({"userId":userId , "phoneRole":phoneNum, "name":name}),
            type: "post",
            contentType:"application/json",
            success:function (res){
                alert("등록되었습니다.");
                handleCloseModal();
                $('#manager_table1').DataTable().ajax.reload(null, false);
            }
        })
    }
}

//삭제 비활성화
const handleDelete = () => {
    //체크 된 로우의 id값을 가져옴
    let row_data = $.map($('#gm_table').DataTable().rows('.selected').data(), function(item){
        return item.id;
    });

    const data = {
        id : row_data
    }

    if(!row_data.length > 0){
        alert("비활성화 할 게시글을 선택해주세요");
        return;
    }

    if(!confirm(row_data.length + "개의 게시글을 비활성화 하시겠습니까?")){
        return;
    }

    $.ajax({
        url:"/admin/generalMember/gmDelete",
        type:"put",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
        data: data,
        success: function(res){
            $('#gm_table').DataTable().ajax.reload(null, false);
            $("#checkall").prop("checked",false);
        }
    })
}

//데이터 상세보기 함수
const handleDetailForm = (id) => {
    $("#updateModal").modal("show");

    $.ajax({
        url:`/admin/generalMember/gmSelctOne?id=${id}`,
        type:"get",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
        success: function (res){
            $("#edit_deleteYn").val(res.deleteYn).prop("selected",true);
            const id = $("#edit_id").val(res.id);
            const userId = $("#update_userId").val(res.userId);
            const createdBy = $("#update_createdBy").val(res.createdBy);
            const createdDate = $("#update_createdDate").val(res.createdDate);
            const updatedBy = $("#update_updatedBy").val(res.updatedBy);
            const updatedDate = $("#update_updatedDate").val(res.updatedDate);
            const phoneRole = $("#phoneUpdateInput").val(res.phoneRole);
        }
    })
}

//검색 버튼
const searchBtn = () => {

    const table = $('#gm_table').DataTable();

    const numCols = table.columns().nodes().length;

    //검색 시 기존의 검색된 데이터들을 초기화 시킴
    for(let i=0; i<numCols; i++) {
        table.columns(i).search('');
    }

    const searchType = $("#searchType").val();
    const searchValue = $("#searchInput").val();

    table.column(searchType).search(searchValue).draw();
}



//수정 버튼
const handleUpdate = () => {
    const id = $("#edit_id").val();
    const phoneRole = $("#phoneUpdateInput").val();
    const deleteYn = $("#update_deleteYn").val();
    const userId = $("#update_userId").val();

    const data = {
        phoneRole : phoneRole,
        deleteYn : deleteYn
    };
    $.ajax({
        url:`/admin/generalMember/gmUpdate?id=${id}`,
        type: "put",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (res){
            console.log(res)//여기 문제
            alert("수정되었습니다.");
            updateCloseModal();
            $('#gm_table').DataTable().ajax.reload(null, false);
        }
    });
}
