$(document).ready(function () {
    let insuAgent_table =  $('#insuAgent_table').DataTable({
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
            url: "/admin/insurance/selectList",
        },
        columns:[
            {data:null},
            {data:"id"},
            {data:"companyName"},
            {data:"insuId"},
            {data:"insuName"},
            {data:"regdate"},
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
                targets: [2],
                render: function (data, type, full, meta) {
                    return `<a href="#" class="link-primary" onclick="handleDetailForm(${full.id})">${sliceText(data)}</a>`
                }
            },
            {
                targets: [5],
                render: function (data, type, full, meta) {
                    if(data !== null){
                        return data.substring(0,10);
                    }else{
                        return data;
                    }
                }
            },
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
    $('#insuAgent_table_filter').remove();


    //체크박스 셀 선택시 체크 되는 함수
    $('#insuAgent_table tbody').on('click', 'tr td:first-child', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });


    //전체선택 동작 함수
    $("#checkall").click(function(){
        if($(this).prop("checked")){
            insuAgent_table.rows().select();
            $(".select-checkbox").addClass('selected');
        }else{
            insuAgent_table.rows().deselect();
            $(".select-checkbox").removeClass('selected');
        }
    })


})

//검색버튼 동작 함수
const searchBtn = () => {

    const table = $('#insuAgent_table').DataTable();

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
    let row_data = $.map($('#insuAgent_table').DataTable().rows('.selected').data(), function(item){
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
        url:"/admin/insurance/insuDelete",
        type:"put",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
        data: data,
        success: function(res){
            $('#insuAgent_table').DataTable().ajax.reload(null, false);
            $("#checkall").prop("checked",false);
        }
    })

}

const handleInsertForm = () => {
    $("#insertFormModal").modal("show");
}

const handleExcelUploadForm = () => {
    $("#excelFormModal").modal("show");
}

const handleCloseModal = () => {
    $("#titleInput").val("");
    $("#contentInput").val("");
    $("#fileInput").val('');
    $("#companyInput").val('');
    $("#idInput").val('');
    $("#nameInput").val('');
    $("#excelData").html("");
    localStorage.removeItem("@excelData");

    $("#insertFormModal").modal("hide");
    $("#editFormModal").modal("hide");
    $("#excelFormModal").modal("hide");
}

//데이터 신규등록 함수
const handleSave = () => {
    const company = $("#companyInput").val();
    const bizId = $("#idInput").val();
    const name = $("#nameInput").val();

    if(company.trim().length == 0){
        alert("회사명을 입력해주세요");
    }else if(bizId.trim().length == 0){
        alert("비즈로보ID를 입력해주세요");
    }else if(name.trim().length == 0){
        alert("이름을 입력해주세요");
    }else{
        $.ajax({
            url: "/admin/insurance/insuSave",
            data: JSON.stringify({"companyName":company, "insuId": bizId, "insuName":name}),
            type: "post",
            contentType:"application/json",
            success:function (res){
                alert("등록되었습니다.");
                handleCloseModal();
                $('#insuAgent_table').DataTable().ajax.reload(null, false);
            }
        })
    }
}

//데이터 수정 함수
const handleEdit = () => {
    const id = $("#edit_id").val();
    const companyName = $("#edit_companyInput").val();
    const insuId = $("#edit_idInput").val();
    const insuName = $("#edit_nameInput").val();
    const deleteYn = $("#edit_deleteYn").val();

    const data = {
        companyName : companyName,
        insuId : insuId,
        insuName : insuName,
        deleteYn : deleteYn
    };

    $.ajax({
        url:`/admin/insurance/insuUpdate?id=${id}`,
        type: "put",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (res){
            alert("수정되었습니다.");
            handleCloseModal();
            $('#insuAgent_table').DataTable().ajax.reload(null, false);
        }

    });

}

//데이터 상세보기 함수
const handleDetailForm = (id) => {
    $("#editFormModal").modal("show");

    $.ajax({
        url:`/admin/insurance/selectOne?id=${id}`,
        type:"get",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
        success: function (res){
            $("#edit_id").val(res.id);
            $("#edit_companyInput").val(res.companyName);
            $("#edit_idInput").val(res.insuId);
            $("#edit_nameInput").val(res.insuName);
            $("#edit_regdate").val(res.regdate);
            $("#edit_deleteYn").val(res.deleteYn).prop("selected",true);
        }
    })
}

const handleFormDownload = () => {

    const url = "/admin/insurance/excelFormDownload";


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {

                var filename = "설계사 등록 양식.xlsx";
                if (this.response.size > 0) {

                    var a = document.createElement("a");
                    var url = URL.createObjectURL(this.response)
                    a.href = url;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                } else {
                    // noti_success("데이터가 없습니다.");
                }
            } else {
                // noti_error("fail");
            }
        }
    }

    $("#excelFormModal").modal("show");
    //요청을 보낼 방식, 주소, 비동기 여부 설정
    xhr.open("GET", url, true);
    xhr.responseType = 'blob';
    //요청 전송
    xhr.send(null);
}


const handleFileUpload = () => {

    let val = $("#fileInput").val();
    let fileName = val.split("\\").pop().toLowerCase();
    let fileVali = null;

    if(val !== null){
        fileVali = excelFileValidation(fileName);
    }

    if(!fileVali || val === ""){
        $("#fileInput").val('');
        $("#excelData").html("");
        localStorage.removeItem("@excelData");
        return;
    }


    const fileData = $("#fileInput")[0].files[0];
    const formData = new FormData();
    formData.append("files", fileData);

    $.ajax({
        enctype:"multipart/form-data",
        type:"POST",
        url:"/admin/insurance/excelUpload",
        processData : false,
        contentType : false,
        cache: false,
        data: formData,
        success: function (res){
              const jsonRes =  JSON.stringify(res);
              localStorage.removeItem("@excelData");
              $("#excelData").html("");
              if(res.length > 0){
                localStorage.setItem("@excelData",jsonRes);
            }
            res.forEach((item, idx)=>{
                let tableTd = `<tr>
                                    <td>${idx+1}</td>
                                    <td>${item.companyName}</td>
                                    <td>${item.insuId}</td>
                                    <td>${item.insuName}</td>
                                </tr>`
                $("#excelData").append(tableTd);
            })
        },
        error: function (err){
          console.log(err);
        }
    })


}

const handleExcelSave = () => {

    const excelData = JSON.parse(localStorage.getItem("@excelData"));


    if(!window.confirm(excelData.length + "건 등록 하시겠습니까?")){
        return;
    }


    $.ajax({
        url:"/admin/insurance/excelSave",
        type:"post",
        contentType: "application/json",
        data: JSON.stringify(excelData),
        success: function(res){
            console.log(res);
            // $('#insuAgent_table').DataTable().ajax.reload(null, false);
            // $("#checkall").prop("checked",false);
        }
    })
}



