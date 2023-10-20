$(document).ready(function () {
    let table = $('#notice_table').DataTable({

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
        ajax: {
            "type" : "GET",
            "url" : '/admin/notice/noticeList',
            "dataType": "JSON",
            "dataSrc":function (res){
                const data = res;
                return data;
            }
        },
        columns: [
            { data: ''},
            { data: "id" },
            { data: "policy" },
            { data: "title" },
            { data: "createdDate" },
            { data: "deleteYn" }
        ],
        columnDefs: [{
            targets: [0],
            className: 'select-checkbox',
            width:"5%",
            data: null,
            defaultContent:'',
        },
        {
            targets: [3],
            render: function (data, type, full, meta) {
                return `<a href="#" class="link-primary" onclick="handleDetailForm(${full.id})">${sliceText(data)}</a>`
            }
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
            targets: [4],
            render: function (data, type, full, meta) {
                return data.substring(0,10);
            }
        },
        {
            targets: [2],
            render: function (data, type, full, meta) {
                if(data === '1')
                {
                    return "정책자금";
                }
                else if(data === '2')
                {
                    return "소상공인 창업지원";
                }
                else if(data === '3')
                {
                    return  "소상공인 성장지원"
                }
                else if(data === '4')
                {
                    return  "소상공인 대출지원"
                }
                else if(data === '5')
                {
                    return "소상공인 재기지원"
                }
                else
                {
                    return "소상공인 특화지원"
                }
            }
        },

        ],
        select: {
            style: "multi",
            selector: "td:first-child"
        }
    })
    $("#checkall").click(function(){
        if($(this).prop("checked")){
            table.rows().select();
            $(".select-checkbox").addClass('selected');
        }else{
            table.rows().deselect();
            $(".select-checkbox").removeClass('selected');
        }
    })

    //등록 모달 에디터
    summerNote("summernote", "notice");
    summerNote("summernoteEdit",'notice');

})

//신규 등록 클릭
const handleInsertNotice = () => {
    $("#noticeModal").modal("show");
}

//닫기 버튼
const handleCloseModal = () => {
    $("#titleInput").val("");
    $('#summernote').summernote('code','');
    $("#policyInput").val(1);

    $("#noticeModal").modal("hide");
    $("#editModal").modal("hide");
}

//수정 닫기
const updateCloseModal = () => {
    $("#editModal").modal("hide");
}


//데이터 상세보기 함수
const handleDetailForm = (id) => {
    $("#editModal").modal("show");

    $.ajax({
        url:`/admin/notice/noticeSelctOne?id=${id}`,
        type:"get",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
        success: function (res){
            $("#edit_deleteYn").val(res.deleteYn).prop("selected",true);
            const id            = $("#edit_id").val(res.id);
            const userId        = $("#update_userId").val(res.userId);
            const createdBy     = $("#update_createdBy").val(res.createdBy);
            const createdDate   = $("#update_createdDate").val(res.createdDate);
            const updatedBy     = $("#update_updatedBy").val(res.updatedBy);
            const updatedDate   = $("#update_updatedDate").val(res.updatedDate);
            const title         = $("#titleUpdateInput").val(res.title);
            const policy        = $("#policyEditInput").val(res.policy);

            const content       = $("#summernoteEdit").summernote('code', res.content);

        }
    })
}

//신규등록
const handleSave = () => {
    const title       = $("#titleInput").val();   //제목
    const policy      = $("#policyInput").val();  //정책
    const content     = $("#summernote").val();   //내용

    if(content.trim().length == 0)
    {
        alert("정책 내용이 없습니다.");
    }
    else if(title.trim().length < 0)
    {
        alert("제목을 입력해주세요.")
    }
    else{
        $.ajax({
            url: "/admin/notice/noticeSave",
            data: JSON.stringify({"content":content , "title":title, "policy":policy}),
            type: "post",
            contentType:"application/json",
            success:function (res){
                alert("등록되었습니다.");
                handleCloseModal();
                $('#notice_table').DataTable().ajax.reload(null, false);
            }
        })
    }
}

//eidt수정 버튼
const handleEdit = () => {
    const id        = $("#edit_id").val();
    const policy    = $("#policyEditInput").val();
    const deleteYn  = $("#edit_deleteYn").val();
    const title     = $("#titleUpdateInput").val();
    const content   = $("#summernoteEdit").summernote('code');

    console.log(content)

    const data = {
        policy : policy,
        deleteYn : deleteYn,
        title : title,
        content : content
    };
    $.ajax({
        url:`/admin/notice/noticeUpdate?id=${id}`,
        type: "put",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (res){
            alert("수정되었습니다.");
            handleCloseModal();
            $('#notice_table').DataTable().ajax.reload(null, false);
        }

    });

}