$(document).ready(function () {
    let unjoinTable =  $('#unjoin_table').DataTable({
        serverSide: true,
        processing: false,
        searching: true,
        destroy:true,
        ordering:false,
        autoWidth:true,
        paginate: true,
        pageLength: 10,
        ajax:{
            type:"POST",
            url: "/admin/unjoin/unjoinList",
        },
        columns:[
            {data:null},
            {data:'flag'},
            {data:'polholder'},
            {data:'mobile'},
            {data:'business_number'},
            {data:'business_name'},
            {data:'address'},
            {data:'detail_addr'},
            {data:'regdate'},
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
                targets: [2],
                render: function (data, type, full, meta) {
                    return `<a href="#" class="link-primary" onclick="handleDetailForm(${full.id})">${sliceText(data)}</a>`
                }
            },
            {
                targets: [3],
                render: function (data, type, full, meta) {
                    return data;
                }
            },
            {
                targets: [8],
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
    $('#unjoin_table_filter').remove();


    //체크박스 셀 선택시 체크 되는 함수
    $('#unjoin_table tbody').on('click', 'tr td:first-child', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });


    //전체선택 동작 함수
    $("#checkall").click(function(){
        if($(this).prop("checked")){
            unjoinTable.rows().select();
            $(".select-checkbox").addClass('selected');
        }else{
            unjoinTable.rows().deselect();
            $(".select-checkbox").removeClass('selected');
        }
    })



})

//검색버튼 동작 함수
const searchBtn = () => {

    const table = $('#unjoin_table').DataTable();

    const numCols = table.columns().nodes().length;

    //검색 시 기존의 검색된 데이터들을 초기화 시킴
    for(let i=0; i<numCols; i++) {
        table.columns(i).search('');
    }

    const searchType = $("#searchType").val();
    const searchValue = $("#searchInput").val();

    table.column(searchType).search(searchValue).draw();
}


const handleCloseModal = () => {
    $("#titleInput").val("");
    $("#contentInput").val("");

    $("#communityModal").modal("hide");
    $("#editModal").modal("hide");
}


//엑셀 다운로드 함수
const handleExcelDownload = () => {

    const url = "/admin/unjoin/excelDownload";


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var filename = "미가입자 분류.xlsx";

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

    //요청을 보낼 방식, 주소, 비동기 여부 설정
    xhr.open("GET", url, true);
    xhr.responseType = 'blob';
    //요청 전송
    xhr.send(null);

}

//데이터 상세보기 함수
const handleDetailForm = (id) => {
    $("#editModal").modal("show");

    $.ajax({
        url:`/admin/unjoin/selectOne?id=${id}`,
        type:"get",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
        success: function (res){
            $("#edit_name").text(res.polholder);
            $("#edit_business_name").text(res.business_name);
            $("#edit_business_number").text(res.business_number);
            $("#edit_business_owner").text(res.business_owner);
            $("#edit_business_type").text(res.business_type);
            $("#edit_address").text(res.address);
            $("#edit_detail_address").text(res.detail_addr);
            $("#edit_flag").text(res.flag);
            $("#edit_mobile").text(res.mobile);
            $("#edit_regdate").text(res.regdate);
            $("#edit_front_jumin").text(res.regi_birth_front);
            $("#edit_back_jumin").text(res.regi_birth_back);
            $("#edit_area").text(res.area);
            $("#edit_floor_low").text(res.floor_low);
            $("#edit_floor_high").text(res.floor_high);
        }
    })
}






