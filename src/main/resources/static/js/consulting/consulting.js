$(document).ready(function () {
    let consultingTable =  $('#consulting_table').DataTable({
        serverSide: true,
        processing: false,
        searching: true,
        destroy:true,
        ordering:false,
        autoWidth:false,
        paginate: true,
        pageLength: 10,
        ajax:{
            type:"POST",
            url: "/admin/consulting/selectList",
        },
        columns:[
            {data:null},
            {data:"id"},
            {data:"name"},
            {data:"phoneRole"},
            {data:"business"},
            {data:"consultingYn"},
            {data:"deleteYn"},
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
                targets: [6],
                render: function (data, type, full, meta) {
                    if(data === 'N'){
                        return "활성";
                    }else{
                        return "비활성";
                    }
                }
            },
            {
                // targets: [2],
                // render: function (data, type, full, meta) {
                //     return `<a href="#" class="link-primary" onclick="handleDetailForm(${full.id})">${sliceText(data)}</a>`
                // }
            },
            // {
            //     targets: [4],
            //     render: function (data, type, full, meta) {
            //         return data.substring(0,10);
            //     }
            // },
        ],
        select:{
            style: "multi",
            selector: "td:first-child",
            rows: {
                _: "Selected %d rows",
                1: "Selected 1 row"
            }
        },
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
            "select" : {
                "rows": {
                    _: "%d개 선택됨",
                    0: "",
                }
            },
            "paginate": {
                "next": "다음",
                "previous": "이전",
                // first : "<<",
                // last: ">>"
            }
        },
    })


    //검색기능을 켜고 기본 제공 검색 input은 숨김
    $('#consulting_table_filter').remove();


    //체크박스 셀 선택시 체크 되는 함수
    $('#community_table tbody').on('click', 'tr td:first-child', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });


    //전체선택 동작 함수
    $("#checkall").click(function(){
        if($(this).prop("checked")){
            consultingTable.rows().select();
            $(".select-checkbox").addClass('selected');
        }else{
            consultingTable.rows().deselect();
            $(".select-checkbox").removeClass('selected');
        }
    })



    // //검색버튼 동작 함수
    // $("#searchBtn").click(function (){
    //     const numCols = consultingTable.columns().nodes().length;
    //
    //     //검색 시 기존의 검색된 데이터들을 초기화 시킴
    //     for(let i=0; i<numCols; i++) {
    //         consultingTable.columns(i).search('');
    //     }
    //
    //     const searchType = $("#searchType").val();
    //     const searchValue = $("#searchInput").val();
    //
    //     consultingTable.column(searchType).search(searchValue).draw();
    // })


    //등록 모달 에디터
    summerNote("summernote_insert", "community");
    summerNote("summernote_detail",'community');

})

//검색버튼 동작 함수
const searchBtn = () => {

    const table = $('#consulting_table').DataTable();

    const numCols = table.columns().nodes().length;

    //검색 시 기존의 검색된 데이터들을 초기화 시킴
    for(let i=0; i<numCols; i++) {
        table.columns(i).search('');
    }

    const searchType = $("#searchType").val();
    const searchValue = $("#searchInput").val();

    table.column(searchType).search(searchValue).draw();
}


const handleDelete = () => {
    //체크 된 로우의 id값을 가져옴
    let row_data = $.map($('#consulting_table').DataTable().rows('.selected').data(), function(item){
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
        url:"/admin/consulting/multiDelete",
        type:"put",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
        data: data,
        success: function(res){
            $('#consulting_table').DataTable().ajax.reload(null, false);
            $("#checkall").prop("checked",false);
        }
    })

}

const handleInsertForm = () => {
    $("#consultingModal").modal("show");
}

const handleCloseModal = () => {
    $("#titleInput").val("");
    $("#contentInput").val("");

    $("#consultingModal").modal("hide");
    $("#editModal").modal("hide");
}

//데이터 신규등록 함수
const handleSave = () => {
    const category = $("#stateInput option:selected").text();
    const code = $("#stateInput").val();
    const title = $("#titleInput").val();
    const content = $("#summernote_insert").val();


    if(title.trim().length == 0){
        alert("제목을 입력해주세요");

    }else if(content.trim().length == 0){
        alert("내용을 입력해주세요");
    }else{
        $.ajax({
            url: "/admin/community/communitySave",
            data: JSON.stringify({"category":category, "code": code, "title":title, "content":content}),
            type: "post",
            contentType:"application/json",
            success:function (res){
                alert("등록되었습니다.");
                handleCloseModal();
                $('#community_table').DataTable().ajax.reload(null, false);
            }
        })
    }
}

//데이터 수정 함수
const handleEdit = () => {
    const id = $("#edit_id").val();
    const category = $("#edit_stateInput option:selected").text();
    const code = $("#edit_stateInput").val();
    const deleteYn = $("#edit_deleteYn").val();
    const title = $("#edit_titleInput").val();
    const content = $("#summernote_detail").val();

    const data = {
        category : category,
        code : code,
        deleteYn : deleteYn,
        title : title,
        content : content
    };

    $.ajax({
        url:`/admin/community/communityUpdate?id=${id}`,
        type: "put",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (res){
            alert("수정되었습니다.");
            handleCloseModal();
            $('#community_table').DataTable().ajax.reload(null, false);
        }

    });

}

//데이터 상세보기 함수
const handleDetailForm = (id) => {
    $("#editModal").modal("show");

    $.ajax({
        url:`/admin/community/selectOne?id=${id}`,
        type:"get",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
        success: function (res){
            $("#edit_stateInput").val(res.code).prop("selected",true);
            $("#edit_deleteYn").val(res.deleteYn).prop("selected",true);
            const id = $("#edit_id").val(res.id);
            const createdBy = $("#edit_createdBy").val(res.createdBy);
            const createdDate = $("#edit_createdDate").val(res.createdDate);
            const updatedBy = $("#edit_updatedBy").val(res.updatedBy);
            const updatedDate = $("#edit_updatedDate").val(res.updatedDate);
            const title = $("#edit_titleInput").val(res.title);

            //수정 모달 에디터
            $("#summernote_detail").summernote("code", res.content);
        }
    })
}






