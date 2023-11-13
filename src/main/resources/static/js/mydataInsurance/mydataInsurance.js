$(document).ready(function () {
  let table = $('#mydata_insurance_table').DataTable({
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
      url : '/admin/mydataInsurance/mydataInsuranceList',
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
      { data: "userName" },
      { data: "mydataInsuranceProduct" },
      { data: "mydataInsuranceTitle" },
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
        targets: [3],
        render: function (data, type, full, meta) {

          if(data === '1')
          {
            return "보험 상품";
          }
          else if(data === '2')
          {
            return "교보생명";
          }
          else if(data === '3')
          {
            return  "한화생명"
          }
          else if(data === '4')
          {
            return  "신한라이프"
          }
          else if(data === '5')
          {
            return "현대해상"
          }
          else if(data === '6')
          {
            return "DB손해보험"
          }
          else if(data === '7')
          {
            return "롯데손해보험"
          }
          else if(data === '8')
          {
            return "카디프생명"
          }
          else if(data === '9')
          {
            return "KDB생명"
          }
          else (data === '10')
          {
            return "삼성화재"
          }
        }
      },
      {
        targets: [4],
        render: function (data, type, full, meta) {
          console.log(data)
          return `<a href="#" class="link-primary" onclick="handleDetailForm(${full.id})">${sliceText(data)}</a>`
        }
      },
      {
        targets: [7],
        render: function (data, type, full, meta) {
          if(data === 'N'){
            return "활성";
          }else{
            return "비활성";
          }
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
    select: {
      style: "multi",
      selector: "td:first-child"
    },
  })
  //allcheck
  $('#mydata_insurance_table tbody').on('click', 'tr td:first-child', function() {
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
  $('#mydata_insurance_table_filter').remove();
  // $('#contentHidden').attr('style',"display:none;");

  //등록 모달 에디터
  summerNote("summernote", "mydataInsurance");
  summerNote("summernoteEdit",'mydataInsurance');

})

//신규 등록 클릭
const handleInsertMydataInsurance = () => {
  $("#mydataInsuranceModal").modal("show");
}

//닫기 버튼
const handleCloseModal = () => {
  clickEsc();
  $("#titleInput").val("");
  $('#summernote').summernote('code','');
  $("#insuranceInput").val(1);

  $("#mydataInsuranceModal").modal("hide");
  $("#editModal").modal("hide");
}
//ESC로 닫을 때
const clickEsc = () =>{
  $(document).keydown(function(event) {
    if ( event.keyCode == 27 || event.which == 27 ) {
      $("#titleInput").val("");
      $('#summernote').summernote('code','');
      $("#insuranceInput").val(1);
    }
  });
}

$(document).keydown(function(event) {
  if ( event.keyCode == 27 || event.which == 27 ) {
    $("#titleInput").val("");
    $('#summernote').summernote('code','');
    $("#insuranceInput").val(1);
  }
});

//수정화면 닫기 버튼
const updateCloseModal = () => {
  $("#editModal").modal("hide");
}

//신규등록
const handleSave = () => {
  const mydataInsuranceTitle      = $("#titleInput").val();
  const mydataInsuranceContent    = $("#summernote").val();
  const mydataInsuranceProduct     = $("#insuranceInput").val();
  console.log(mydataInsuranceProduct)

  let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  let regexDate = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
  if(mydataInsuranceTitle=='')
  {
    alert("제목을 입력해주세요");
  }
  else if(mydataInsuranceContent=='')
  {
    alert("내용을 입력해주세요");
  }
  else{
    $.ajax({
      url: "/admin/mydataInsurance/mydataInsuranceSave",
      data: JSON.stringify({"mydataInsuranceTitle":mydataInsuranceTitle , "mydataInsuranceContent":mydataInsuranceContent,"mydataInsuranceProduct":mydataInsuranceProduct}),
      type: "post",
      contentType:"application/json",
      success:function (res){
        alert("등록되었습니다.");
        handleCloseModal();
        $('#mydata_insurance_table').DataTable().ajax.reload(null, false);
      }
    })
  }
}

//삭제 비활성화
const handleDelete = () => {
  //체크 된 로우의 id값을 가져옴
  let row_data = $.map($('#mydata_insurance_table').DataTable().rows('.selected').data(), function(item){
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
    url:"/admin/mydataInsurance/mydataInsuranceDelete",
    type:"put",
    contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
    data: data,
    success: function(res){
      $('#mydata_insurance_table').DataTable().ajax.reload(null, false);
      $("#checkall").prop("checked",false);
    }
  })
}

//데이터 상세보기 함수
const handleDetailForm = (id) => {
  $("#editModal").modal("show");

  $.ajax({
    url:`/admin/mydataInsurance/mydataInsuranceSelctOne?id=${id}`,
    type:"get",
    contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
    success: function (res){
      console.log(res)
      $("#edit_deleteYn").val(res.deleteYn).prop("selected",true);
      const id                      = $("#edit_id").val(res.id);
      const mydataInsuranceTitle    = $("#titleUpdateInput").val(res.mydataInsuranceTitle);
      const mydataInsuranceContent  = $("#summernoteEdit").summernote('code', res.mydataInsuranceContent);
      const createdBy               = $("#update_createdBy").val(res.createdBy);
      const createdDate             = $("#update_createdDate").val(res.createdDate);
      const updatedBy               = $("#update_updatedBy").val(res.updatedBy);
      const updatedDate             = $("#update_updatedDate").val(res.updatedDate);
      const mydataInsuranceProduct  = $("#insuranceEditInput").val(res.mydataInsuranceProduct);
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
  const mydataInsuranceProduct = $("#insuranceEditInput").val();
  const mydataInsuranceTitle = $("#titleUpdateInput").val();
  const deleteYn = $("#edit_deleteYn").val();
  const mydataInsuranceContent = $("#summernoteEdit").summernote('code');

  const data = {
    mydataInsuranceProduct : mydataInsuranceProduct,
    mydataInsuranceTitle   : mydataInsuranceTitle,
    mydataInsuranceContent : mydataInsuranceContent,
    deleteYn : deleteYn
  };
  $.ajax({
    url:`/admin/mydataInsurance/mydataInsuranceUpdate?id=${id}`,
    type: "put",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function (res){
      alert("수정되었습니다.");
      updateCloseModal();
      $('#mydata_insurance_table').DataTable().ajax.reload(null, false);
    }
  });
}
