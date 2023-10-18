$(document).ready(function () {
    let table = $('#info_table').DataTable({
        serverSide: true,
        processing: false,
        searching: true,
        destroy:true,
        ordering:false,
        autoWidth:false,
        paginate: true,
        pageLength: 10,
        ajax: {
            type : "POST",
            url : '/admin/infoPlace/infoPlaceList',
            "dataType": "JSON",
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
            { data: null},
            { data: "id" },
            { data: "title" },
            { data: "createdDate" },
            { data: "createdBy" },
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
                targets: [5],
                render: function (data, type, full, meta) {
                    if(data === 'N'){
                        return "활성";
                    }else{
                        return "비활성";
                    }
                }
            },
            {
                targets: [2],
                render: function (data, type, full, meta) {
                    return `<a href="#" class="link-primary" onclick="handleDetailForm(${full.id})">${sliceText(data)}</a>`
                }
            },
            {
                targets: [3],
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
    $('#info_table tbody').on('click', 'tr td:first-child', function() {
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
    $('#info_table_filter').remove();
    // $('#contentHidden').attr('style',"display:none;");

    //등록 모달 에디터
    summerNote("summernote", "infoPlace");
    summerNote("summernoteEdit",'infoPlace');

})

//신규 등록 클릭
const handleInsertIp = () => {
    $("#ipModal").modal("show");
}

//닫기 버튼
const handleCloseModal = () => {
    clickEsc();
    $("#titleInput").val("");
    $('#summernote').summernote('code','');

    $("#ipModal").modal("hide");
    $("#editModal").modal("hide");
}
//ESC로 닫을 때
const clickEsc = () =>{
    $(document).keydown(function(event) {
        if ( event.keyCode == 27 || event.which == 27 ) {
            $("#titleInput").val("");
            $('#summernote').summernote('code','');
        }
    });
}

$(document).keydown(function(event) {
    if ( event.keyCode == 27 || event.which == 27 ) {
        $("#titleInput").val("");
        $('#summernote').summernote('code','');
    }
});

//수정화면 닫기 버튼
const updateCloseModal = () => {
    $("#editModal").modal("hide");
}

//신규등록
const handleSave = () => {
    const title      = $("#titleInput").val();
    const content    = $("#summernote").val();

    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let regexDate = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
    if(title=='')
    {
        alert("제목을 입력해주세요");
    }
    else if(content=='')
    {
        alert("내용을 입력해주세요");
    }
    else{
        $.ajax({
            url: "/admin/infoPlace/ipSave",
            data: JSON.stringify({"title":title , "content":content}),
            type: "post",
            contentType:"application/json",
            success:function (res){
                alert("등록되었습니다.");
                handleCloseModal();
                $('#info_table').DataTable().ajax.reload(null, false);
            }
        })
    }
}

//삭제 비활성화
const handleDelete = () => {
    //체크 된 로우의 id값을 가져옴
    let row_data = $.map($('#info_table').DataTable().rows('.selected').data(), function(item){
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
        url:"/admin/infoPlace/ipDelete",
        type:"put",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
        data: data,
        success: function(res){
            $('#info_table').DataTable().ajax.reload(null, false);
            $("#checkall").prop("checked",false);
        }
    })
}

//데이터 상세보기 함수
const handleDetailForm = (id) => {
    $("#editModal").modal("show");

    $.ajax({
        url:`/admin/infoPlace/ipSelctOne?id=${id}`,
        type:"get",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
        success: function (res){
            $("#edit_deleteYn").val(res.deleteYn).prop("selected",true);
            const id            = $("#edit_id").val(res.id);
            const title         = $("#titleUpdateInput").val(res.title);
            const content       = $("#summernoteEdit").summernote('code', res.content);
            const createdBy     = $("#update_createdBy").val(res.createdBy);
            const createdDate   = $("#update_createdDate").val(res.createdDate);
            const updatedBy     = $("#update_updatedBy").val(res.updatedBy);
            const updatedDate   = $("#update_updatedDate").val(res.updatedDate);
        }
    })
}

//검색 버튼
// const searchBtn = () => {
//
//     const table = $('#info_table').DataTable();
//
//     const numCols = table.columns().nodes().length;
//
//     //검색 시 기존의 검색된 데이터들을 초기화 시킴
//     for(let i=0; i<numCols; i++) {
//         table.columns(i).search('');
//     }
//
//     const searchType = $("#searchType").val();
//     const searchValue = $("#searchInput").val();
//
//     table.column(searchType).search(searchValue).draw();
// }



//수정 버튼
const handleUpdate = () => {
    const id = $("#edit_id").val();
    const title = $("#titleUpdateInput").val();
    const deleteYn = $("#edit_deleteYn").val();
    const content = $("#summernoteEdit").val();

    const data = {
        title : title,
        content : content,
        deleteYn : deleteYn
    };
    $.ajax({
        url:`/admin/infoPlace/ipUpdate?id=${id}`,
        type: "put",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (res){
            alert("수정되었습니다.");
            updateCloseModal();
            $('#info_table').DataTable().ajax.reload(null, false);
        }
    });
}
