/**
 * 게시글 20글자 이상이면 ... 처리 함수
 * @param text (게시글)
 * @returns {*|string}
 */
const sliceText = (text) =>{
    let slice_text = '';
        if(text.length >= 20){
            slice_text = text.substring(0,20) + '...';
            return slice_text;
        }
    return text;
}

/**
 * 이름 가운데 *처리 함수
 * @param name (주민번호)
 * @returns {string}
 */
const asteriskName = (name) => {
    if (name.length <= 2) {
        return name.replace(name.substring(0, 1), "*");
    }
    return (
        name[0] +
        "*".repeat(name.substring(1, name.length - 1).length) +
        name[name.length - 1]
    );
}

/**
 * 휴대폰번호 마지막 4자리 *처리 함수
 * @param mobile (휴대폰번호)
 * @returns {string}
 */
const sliceMobile = (mobile) => {
    if(mobile.length <= 0){
        return mobile
    }
    return mobile.substring(0,mobile.length-4) + "****";
}

/**
 * 주민번호 뒷번호 한자리 빼고 *처리 함수
 * @param jumin (주민번호)
 * @returns {string}
 */
const sliceJumin = (jumin) => {
    return jumin.substring(0,1) + '******';
}

/**
 * 이미지 유효성 검사 함수
 * @param type
 * @returns {boolean}
 */
const imageValidation = (type) => {
    const imgs = ['gif', 'jpg', 'jpeg', 'png', 'bmp' ,'ico', 'apng'];
    const filedot = type.substring(type.lastIndexOf('/')+1).toLowerCase();

        if(filedot === 'gif' || filedot === 'jpg' || filedot === 'jpeg' || filedot === 'png' || filedot === 'bmp' || filedot === 'ico' || filedot === 'apng'){
            return true;
        }else{
            return false;
        }
}

/**
 * 엑셀 파일 유효성 검사 함수
 * @param fileName
 */
const excelFileValidation = (fileName) => {
    let ext = fileName.split(".").pop().toLowerCase();

    console.log(ext);

    if(ext !== "" && $.inArray(ext,["xls", "xlsx"]) == -1){
        alert(ext+ "파일은 업로드 불가능 합니다.")
        return false;
    }
    return true;
}

/**
 * 날짜 데이터를 YYYY-MM-dd HH:MM:SS 포맷으로 변경 함수
 * @param val 날짜 값
 */
const dateFormatYMH = (val) =>{
    const date = new Date(val).toISOString().replace('T',' ').slice(0,-5);


    return date;
}



/**
 * 썸머노트 공통 처리 함수
 * @param id
 * @param name
 * @returns {*|jQuery}
 */
const summerNote = (id, name) => {
   return $(`#${id}`).summernote({
        // 에디터 높이
        height: 400,
        // 에디터 한글 설정
        lang: "ko-KR",
        // 에디터 로딩후 포커스를 맞출지 여부
        focus: true,
       disableResizeEditor : true,
        toolbar: [
            // 글꼴 설정
            ['fontname', ['fontname']],
            // 글자 크기 설정
            ['fontsize', ['fontsize']],
            // 굵기, 기울임꼴, 밑줄,취소 선, 서식지우기
            ['style', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
            // 글자색
            ['color', ['forecolor', 'color']],
            // 표만들기
            ['table', ['table']],
            // 글머리 기호, 번호매기기, 문단정렬
            ['para', ['ul', 'ol', 'paragraph']],
            ['insert',['picture','link','video']],
            // 줄간격
            ['height', ['height']],
            // 코드보기, 확대해서보기, 도움말
            ['view', ['codeview', 'fullscreen', 'help']]
        ],
        // 추가한 글꼴
        fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', '맑은 고딕', '궁서', '굴림체', '굴림', '돋음체', '바탕체'],
        // 추가한 폰트사이즈
        fontSizes: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '28', '30', '36', '50', '72'],
        callbacks:{
            onImageUpload : function(files, editor, welEditable){
                // 파일 업로드(다중업로드를 위해 반복문 사용)
                for (let i = files.length - 1; i >= 0; i--) {
                    if(imageValidation(files[i].type)){
                        uploadSummernoteImageFile(files[i],
                            this, name);
                    }else{
                        alert("이미지 파일만 업로드 가능합니다.")
                    }
                }
            }
        }
    });
}

//이미지 업로드 함수
function uploadSummernoteImageFile(file, editor, name) {
    const data = new FormData();
    data.append("file", file);
    data.append("name", name);
    $.ajax({
        data : data,
        type : "POST",
        url : "/admin/uploadSummernoteImageFile",
        contentType : false,
        processData : false,
        success : function(data) {
            if(data.responseCode === 'success'){
                //항상 업로드된 파일의 url이 있어야 한다.
                console.log(data.url);
                $(editor).summernote('insertImage', data.url);
            }else{
                alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요")
            }
        }
    });
}

//Drag & Drop으로 업로드가 안될 경우
$("div.note-editable").on('drop',function(e){
    console.log("드롭 이미지");
    for(let i=0; i< e.originalEvent.dataTransfer.files.length; i++){
        uploadSummernoteImageFile(e.originalEvent.dataTransfer.files[i],$("#summernote")[0]);
    }
    e.preventDefault();
})

