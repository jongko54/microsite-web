$(document).ready(function () {
  let table = $('#simple_calc_table').DataTable({
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
      url : '/admin/domesticTour/domesticTourList',
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
      { data: "email" },
      { data: "period" },
      { data: "createdDate" },
      { data: "createdBy"},
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
        targets: [3],
        render: function (data, type, full, meta) {
          return `<a href="#" class="link-primary" onclick="handleDetailForm(${full.id})">${sliceText(data)}</a>`
        }
      },
      {
        targets: [5],
        render: function (data, type, full, meta) {
          return data.substring(0,10);
        }
      },
    ],
    select: {
      style: "multi",
      selector: "td:first-child"
    },
  })
  //allcheck
  $('#simple_calc_table tbody').on('click', 'tr td:first-child', function() {
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
  //기본 검색 삭제
  //$('#manager_table1_filter').remove();
})

//수정화면 닫기 버튼
const updateCloseModal = () => {
  $("#editModal ").modal("hide");
}

//삭제 비활성화
const handleDelete = () => {
  //체크 된 로우의 id값을 가져옴
  let row_data = $.map($('#simple_calc_table').DataTable().rows('.selected').data(), function(item){
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
    url:"/admin/domesticTour/domesticTourDelete",
    type:"put",
    contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
    data: data,
    success: function(res){
      $('#simple_calc_table').DataTable().ajax.reload(null, false);
      $("#checkall").prop("checked",false);
    }
  })
}

//데이터 상세보기 함수
const handleDetailForm = (id) => {
  $("#editModal").modal("show");

  $.ajax({
    url:`/admin/domesticTour/domesticTourSelctOne?id=${id}`,
    type:"get",
    contentType: "application/x-www-form-urlencoded; charset=UTF-8;",
    success: function (res){
      console.log(res)
      $("#edit_deleteYn").val(res.deleteYn).prop("selected",true);
      const id = $("#edit_id").text(res.id);
      const uesrId = $("#edit_userId").text(res.uesrId);
      const uesrName = $("#edit_userName").text(res.uesrName);
      const email = $("#edit_email").text(res.email);
      const phoneNum = $("#edit_phoneNum").text(res.phoneNum);
      const startDate = $("#edit_phoneRole").text(res.startDate);
      const juminFront = $("#edit_juminFront").text(res.juminFront);
      const juminBack = $("#edit_juminBack").text(res.juminBack);
      const age = $("#edit_age").text(res.age);
      const period = $("#edit_period").text(res.period);
      const gubun = $("#edit_gubun").text(res.gubun);
      const diseasesThreeYearsAgreement = $("#edit_diseasesThreeYearsAgreement").text(res.diseasesThreeYearsAgreement);
      const dangerLeisureSportsAgreement = $("#edit_dangerLeisureSportsAgreement").text(res.dangerLeisureSportsAgreement);
      const foreignerYn = $("#edit_foreignerYn").text(res.foreignerYn);
      const travelPurpose = $("#edit_travelPurpose").text(res.travelPurpose);
      const privacyInfoAgreement = $("#edit_privacyInfoAgreement").text(res.privacyInfoAgreement);
      const beforePayment = $("#edit_beforePayment").text(res.beforePayment);
      const fee = $("#edit_fee").text(res.fee);

      const createdBy = $("#update_createdBy").val(res.createdBy);
      const createdDate = $("#update_createdDate").val(res.createdDate);
      const updatedBy = $("#update_updatedBy").val(res.updatedBy);
      const updatedDate = $("#update_updatedDate").val(res.updatedDate);
    }
  })
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
    url:`/admin/simpleCalc/simpleCalcUpdate?id=${id}`,
    type: "put",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function (res){
      console.log(res)//여기 문제
      alert("수정되었습니다.");
      updateCloseModal();
      $('#simple_calc_table').DataTable().ajax.reload(null, false);
    }
  });
}
