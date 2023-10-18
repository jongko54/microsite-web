$(document).ready(function () {
    let batchTable =  $('#batch_table').DataTable({
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
            url: "/admin/batch/selectList",
        },
        columns:[
            {data:null},
            {data:'stepExecutionId'},
            {data:'startTime'},
            {data:'endTime'},
            {data:'status'},
            {data:'readCount'},
            {data:'writeCount'},
            {data:'lastUpdated'},
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
                    return dateFormatYMH(data);
                }
            },
            {
                targets: [3],
                render: function (data, type, full, meta) {
                    return dateFormatYMH(data);
                }
            },
            {
                targets: [7],
                render: function (data, type, full, meta) {
                    return dateFormatYMH(data);
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
    $('#batch_table_filter').remove();


    //체크박스 셀 선택시 체크 되는 함수
    $('#batch_table tbody').on('click', 'tr td:first-child', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });


    //전체선택 동작 함수
    $("#checkall").click(function(){
        if($(this).prop("checked")){
            batchTable.rows().select();
            $(".select-checkbox").addClass('selected');
        }else{
            batchTable.rows().deselect();
            $(".select-checkbox").removeClass('selected');
        }
    })



})

//검색버튼 동작 함수
const searchBtn = () => {

    const table = $('#batch_table').DataTable();

    const numCols = table.columns().nodes().length;

    //검색 시 기존의 검색된 데이터들을 초기화 시킴
    for(let i=0; i<numCols; i++) {
        table.columns(i).search('');
    }

    const searchType = $("#searchType").val();
    const searchValue = $("#searchInput").val();

    table.column(searchType).search(searchValue).draw();
}






