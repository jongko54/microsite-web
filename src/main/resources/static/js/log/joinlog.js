$(document).ready(function () {

   let communityTable =  $('#community_table').DataTable({
        serverSide: false,
        processing: false,
        searching: true,
        destroy:true,
        ordering:false,
        autoWidth:false,
        paginate: true,
        pageLength: 10,
        ajax:{
            "type" : "GET",
            "url" : '/admin/joinLog/joinLogList',
                      "dataType": "JSON",
                       "dataSrc":function (res){
                           const data = res;
                           return data;
                       }
        },
        columns:[
            {data:"id"},
            {data:"userId"},
            {data:"joinDate"},
            {data:"logoutDate"},
            {data:"task"},
            {data:"joinIp"}
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


})

