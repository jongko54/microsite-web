package com.insrb.micro.api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import kong.unirest.json.JSONArray;
import kong.unirest.json.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.http.HttpResponse;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Slf4j
@RestController
@RequestMapping("/ocr")
public class OcrController {

    private static final String TMAX_KEY = "key";
    private static final String OCR_SECRET_KEY = "VGZHTWZWSGdqUWFRdlhDQ0JzY01qbFF1dm54a09oVlA=";
    private static final String OCR_ID_CARD_SECRET_KEY = "QlBWTEFpd1dhVkFGQ1BMVFJUa3F6aXlBS0tqVlpQeWs=";

    private static final String OCR_URL = "https://cpj7jj5q70.apigw.ntruss.com/custom/v1/20803/f310f315f4065fcc56b76079a4cc31ab3eeef5008698a17a75982bee12298129/document/biz-license";
    private static final String OCR_ID_CARD_URL = "https://cpj7jj5q70.apigw.ntruss.com/custom/v1/25933/5c1192e5b97a1fc3b5c73a3f3ea6d13e92969a0a339ac7c85aae7f7298e799e8/document/id-card";



//    @PostMapping(path = "/dirstore")
//    @ResponseBody
//    public Boolean saveImageToInsuroboDir( // Directory Store
//                                           @RequestParam("file") MultipartFile file) {
//        try {
//            boolean check;
//            String filename = file.getOriginalFilename();
//
//            storageService.store(file); // 파일 저장
//            Resource resource = storageService.loadAsResource(filename); // 리소스 체크
//
//            if (resource.exists()) {
//                check = true;
//            } else {
//                check = false;
//            }
//
//            return check;
//        } catch (Exception e) {
//            log.debug(e.getMessage());
//        }
//        return false;
//    }

    public File convertFile(MultipartFile mfile)  {
        String originalFileName = mfile.getOriginalFilename();
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));


        if(originalFileName == null){
            throw new CustomException(ErrorCode.BAD_REQUEST);
        }

        if(extension.equals("doc") || extension.equals("pdf") || extension.equals("hwp") ||
                extension.equals("xls")){
            throw new CustomException(ErrorCode.BAD_REQUEST);
        }

        File file = new File(originalFileName);

        FileOutputStream fos = null;
        try {
            file.createNewFile();



            fos = new FileOutputStream(file);
            fos.write(mfile.getBytes());
            fos.close();
        } catch (IOException e) {
            System.out.println("IOException OCR 파일 예외발생");
        }finally {
            try{
                fos.close();
            }catch (IOException e){
                System.out.println("IOException 파일 예외발생");
            }
        }

        return file;
    }

    /**
     * clova ocr api 호출
     *
     * @param multipartFile
     * @return
     */
//    @PostMapping(path = "getBizLicenseOcrApplcationJson")
//    @ResponseBody
//    public Map<String, Object> getBizLicenseOcrApplcationJson(@RequestBody(required = true) Map<String, Object> params) {
//
//        Map<String, Object> rtnMap = new HashMap<String, Object>();
//        try {
//            URL url = new URL(OCR_URL);
//            HttpURLConnection con = (HttpURLConnection)url.openConnection();
//            con.setUseCaches(false);
//            con.setDoInput(true);
//            con.setDoOutput(true);
//            con.setRequestMethod("POST");
//            con.setRequestProperty("Content-Type", "application/json; charset=utf-8");
//            con.setRequestProperty("X-OCR-SECRET",  OCR_SECRET_KEY);
//
//            JSONObject json = new JSONObject();
//            json.put("version", "V2");
//            json.put("requestId", UUID.randomUUID().toString());
//            json.put("timestamp", System.currentTimeMillis());
//            JSONObject image = new JSONObject();
//            image.put("format", "jpg");
//            //image should be public, otherwise, should use data
////			FileInputStream inputStream = new FileInputStream("YOUR_IMAGE_FILE");
//
//            image.put("data", params.get("file"));
//            image.put("name", params.get("name"));
//            JSONArray images = new JSONArray();
//            images.put(image);
//            json.put("images", images);
//            String postParams = json.toString();
//
//            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
//            wr.writeBytes(postParams);
//            wr.flush();
//            wr.close();
//
//            int responseCode = con.getResponseCode();
//            BufferedReader br;
//            if (responseCode == 200) {
//                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
//            } else {
//                br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
//            }
//            String inputLine;
//            StringBuffer response = new StringBuffer();
//            while ((inputLine = br.readLine()) != null) {
//                response.append(inputLine);
//            }
//            br.close();
//
////			System.out.println("response =====> " + response);
//            System.out.println("rtnMap =====> " + rtnMap);
//        } catch (Exception e) {
//            System.out.println(e);
//        }
//        return rtnMap;
//    }


    /**
     * clova ocr api 호출
     *
     * @param multipartFile
     * @return
     */
//    @PostMapping(path = "/getBizLicenseOcr")
//    @ResponseBody
//    public Map<String, Object> getBizLicenseOcr(@RequestParam("file") MultipartFile multipartFile) {
//        Map<String, Object> rtnMap = new HashMap<String, Object>();
//        try {
//            File file = convertFile(multipartFile);
//            String fileName = file.getName();
//            String ext = fileName.substring(fileName.lastIndexOf(".") + 1);
//
//            URL url = new URL(OCR_URL);
//            HttpURLConnection con = (HttpURLConnection) url.openConnection();
//            con.setUseCaches(false);
//            con.setDoInput(true);
//            con.setDoOutput(true);
//            con.setReadTimeout(30000);
//            con.setRequestMethod("POST");
//            String boundary = "----" + UUID.randomUUID().toString().replaceAll("-", "");
//            con.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);
//            con.setRequestProperty("X-OCR-SECRET", OCR_SECRET_KEY);
//
//            JSONObject json = new JSONObject();
//            json.put("version", "V2");
//            json.put("requestId", UUID.randomUUID().toString());
//            json.put("timestamp", System.currentTimeMillis());
//            JSONObject image = new JSONObject();
//            image.put("format", ext);
//            image.put("name", fileName);
//            JSONArray images = new JSONArray();
//            images.put(image);
//            json.put("images", images);
//
//            String postParams = json.toString();
//
//            con.connect();
//            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
//
//            writeMultiPart(wr, postParams, file, boundary);
//            wr.close();
//
//            int responseCode = con.getResponseCode();
//            BufferedReader br;
//            if (responseCode == 200) {
//                br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
//            } else {
//                br = new BufferedReader(new InputStreamReader(con.getErrorStream(), "UTF-8"));
//            }
//
//            String inputLine;
//
//            StringBuffer response = new StringBuffer();
//            while ((inputLine = br.readLine()) != null) {
//                response.append(inputLine);
//            }
//            br.close();
//            System.out.println("response =====> " + response);
//            rtnMap = getOcrResult(response.toString(), true, null);
//            if( file.exists() ){
//                if(file.delete()){
//                    System.out.println("파일삭제 성공");
//                }else{
//                    System.out.println("파일삭제 실패");
//                }
//            }
//        } catch (Exception e) {
//            System.out.println(e);
//        }
//
//        return rtnMap;
//    }

    /**
     * clova ocr id_card api 호출
     *
     * @param multipartFile
     * @return
     */
    @PostMapping(path = "/getIdCardOcr")
    @ResponseBody
    public Map<String, Object> getIdCardOcr(@RequestParam("file") MultipartFile multipartFile,@RequestParam("type") String type){
        Map<String, Object> rtnMap = new HashMap<String, Object>();
        DataOutputStream wr = null;
        BufferedReader br = null;
        try {
            File file = convertFile(multipartFile);
            String fileName = file.getName();

            String ext = fileName.substring(fileName.lastIndexOf(".") + 1);

            URL url = new URL(OCR_ID_CARD_URL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setUseCaches(false);
            con.setDoInput(true);
            con.setDoOutput(true);
            con.setReadTimeout(30000);
            con.setRequestMethod("POST");
            String boundary = "----" + UUID.randomUUID().toString().replaceAll("-", "");
            con.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);
            con.setRequestProperty("X-OCR-SECRET", OCR_ID_CARD_SECRET_KEY);

            JSONObject json = new JSONObject();
            json.put("version", "V2");
            json.put("requestId", UUID.randomUUID().toString());
            json.put("timestamp", System.currentTimeMillis());
            JSONObject image = new JSONObject();
            image.put("format", ext);
            image.put("name", fileName);
            JSONArray images = new JSONArray();
            images.put(image);
            json.put("images", images);

            String postParams = json.toString();

            con.connect();
            wr = new DataOutputStream(con.getOutputStream());

            writeMultiPart(wr, postParams, file, boundary);
            wr.close();

            int responseCode = con.getResponseCode();
            
            if (responseCode == 200) {
                br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
            } else {
                br = new BufferedReader(new InputStreamReader(con.getErrorStream(), "UTF-8"));
            }

            String inputLine;

            StringBuffer response = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            br.close();
            log.debug("response =====> " + response);
            rtnMap = getOcrResult(response.toString(), false, type);

            System.out.println("test -------->" + rtnMap.toString());
            if (file.exists()) {
                if (file.delete()) {
                    System.out.println("파일삭제 성공");
                } else {
                    System.out.println("파일삭제 실패");
                }
            }
        } catch (ProtocolException e) {
            System.out.println("ProtocolException OCR 프로토콜 예외발생");
        } catch (MalformedURLException e) {
            System.out.println("MalformedURLException OCR 프로토콜 예외발생");
        } catch (UnsupportedEncodingException e) {
            System.out.println("UnsupportedEncodingException OCR 인코딩 예외발생");
        } catch (IOException e) {
            System.out.println("ProtocolException OCR 파일 예외발생");
        }finally {
            try{
                wr.close();
                br.close();
            }catch (IOException e){
                System.out.println("IOException OCR 파일 예외발생");
            }
        }

        return rtnMap;
    }

    private static void writeMultiPart(OutputStream out, String jsonMessage, File file, String boundary)
            throws IOException {
        StringBuilder sb = new StringBuilder();
        sb.append("--").append(boundary).append("\r\n");
        sb.append("Content-Disposition:form-data; name=\"message\"\r\n\r\n");
        sb.append(jsonMessage);
        sb.append("\r\n");

        out.write(sb.toString().getBytes("UTF-8"));
        out.flush();

        if (file != null && file.isFile()) {
            out.write(("--" + boundary + "\r\n").getBytes("UTF-8"));
            StringBuilder fileString = new StringBuilder();
            fileString.append("Content-Disposition:form-data; name=\"file\"; filename=");
            fileString.append("\"" + file.getName() + "\"\r\n");
            fileString.append("Content-Type: application/octet-stream\r\n\r\n");
            out.write(fileString.toString().getBytes("UTF-8"));
            out.flush();

            try (FileInputStream fis = new FileInputStream(file)) {
                byte[] buffer = new byte[8192];
                int count;
                while ((count = fis.read(buffer)) != -1) {
                    out.write(buffer, 0, count);
                }
                out.write("\r\n".getBytes());
            }

            out.write(("--" + boundary + "--\r\n").getBytes("UTF-8"));
        }
        out.flush();
    }

    /**
     * OCR return data 파싱
     *
     * @param response
     * @return
     */
    public Map<String, Object> getOcrResult(String response, boolean biz, String type) {
        Map<String, Object> rtnMap = new HashMap<>();
        Map<String, Object> bizResult = new HashMap<>();
        Map<String, Object> idParam = new HashMap<>();

        try {
            ObjectMapper mapper = new ObjectMapper();
            Map<String, Object> ocrData = mapper.readValue(response.toString(), new TypeReference<HashMap<String, Object>>() {});
            ArrayList<Map<String, Object>> imagesArr = (ArrayList<Map<String, Object>>) ocrData.get("images");
//			Map<String, Object> bizResult = new  new HashMap<>();
            if(biz) {
                Map<String, Object> bizLicenseMap = (Map<String, Object>) imagesArr.get(0).get("bizLicense");
                bizResult = (Map<String, Object>) bizLicenseMap.get("result");
                for(Map.Entry<String, Object> entry : bizResult.entrySet()) {
                    String key = entry.getKey();
                    ArrayList<Map<String, Object>> value = (ArrayList<Map<String, Object>>) entry.getValue();

                    ArrayList<String> textArr = new ArrayList<String>();

                    for (int i = 0; i < value.size(); i++) {
                        // 날짜일 경우 별도로 파싱
                        if (key.contains("Date") || key.contains("birth")) {
                            String dateStr = value.get(i).get("text").toString().replaceAll(" ", "");

                            SimpleDateFormat originalFormat = new SimpleDateFormat("yyyy년M월d일");
                            SimpleDateFormat newFormat = new SimpleDateFormat("yyyy/MM/dd");

                            try {
                                Date originalDate = originalFormat.parse(dateStr);
                                String newDate = newFormat.format(originalDate);
                                textArr = new ArrayList<>(Arrays.asList(newDate.split("/")));
                            } catch (ParseException e) {
                                System.out.println("Exception OCR 파싱 예외발생");
                            }
                        } else {
                            textArr.add(value.get(i).get("text").toString());
                        }
                    }

                    rtnMap.put(key, textArr);
                }
            }
            else {


                Map<String, Object> idCardMap = (Map<String, Object>) imagesArr.get(0).get("idCard");
                bizResult = (Map<String, Object>) idCardMap.get("result");

                if(type.equals("ID")) {
                    idParam = (Map<String, Object>) bizResult.get("ic");
                }else {
                    idParam = (Map<String, Object>) bizResult.get("dl");
                }
                for (Map.Entry<String, Object> entry : idParam.entrySet()) {
                    String key = entry.getKey();
                    ArrayList<Map<String, Object>> value = (ArrayList<Map<String, Object>>) entry.getValue();
                    ArrayList<String> textArr = new ArrayList<String>();
                    for (int i = 0; i < value.size(); i++) {
                        // 날짜일 경우 별도로 파싱
                        if (key.contains("issueDate") ) {
                            String dateStr = value.get(i).get("text").toString().replaceAll("\\.", "");
                            dateStr = dateStr.replaceAll(" ","");
                            SimpleDateFormat originalFormat = new SimpleDateFormat("yyyyMMdd");
                            SimpleDateFormat newFormat = new SimpleDateFormat("yyyy/MM/dd");

                            try {
                                Date originalDate = originalFormat.parse(dateStr);
                                String newDate = newFormat.format(originalDate);
                                textArr = new ArrayList<>(Arrays.asList(newDate.split("/")));
                            } catch (ParseException e) {
                                System.out.println("Exception OCR 파싱 예외발생");
                            }
                        }
                        else {
                            textArr.add(value.get(i).get("text").toString());
                        }
                    }

                    rtnMap.put(key, textArr);
                }
            }

        } catch (JsonMappingException e) {
            System.out.println("JsonMappingException OCR JSON 매핑 예외발생");
        } catch (JsonProcessingException e) {
            System.out.println("JsonMappingException OCR JSON 프로세싱 예외발생");
        }

        return rtnMap;
    }

//    /**
//     * 사업자등록증 정보 저장
//     * @param params
//     */
//    @PostMapping(path = "/postBizLicense")
//    @ResponseBody
//    public void postBizLicense(@RequestBody(required = true) Map<String, Object> params) {
//        System.out.println("================= 사업자등록증 입력 정보 전달 =================");
//        HashMap<String, Object> paramsMap = (HashMap<String, Object>)params.get("params");
//
//        for (Map.Entry<String, Object> entry : paramsMap.entrySet()) {
//            String key = entry.getKey();
//            ArrayList<String> valueArr = (ArrayList<String>) entry.getValue();
//            String valueStr = valueArr.toString();
//
//            if(key.contains("Date") || key.contains("birth")) {
//                valueStr = String.join("/", valueArr);
//            }
//
//            valueStr = valueStr.replaceAll("\\[","").replaceAll("\\]","");
//
//            paramsMap.put(key, valueStr);
//        }
//
//        tbBizRegMapper.insert(
//                chkParams(paramsMap, "registerNumber"),
//                chkParams(paramsMap, "taxType").equals("법인사업자") ? "0" : "1", // 사업자구분 (0: 법인사업자(공동대표), 1: 간이/일반사업자(공동사업자))
//                chkParams(paramsMap, "companyName"), // 사업자구분에 따라 상호명이 담기는 위치가 다름
//                chkParams(paramsMap, "repName"),
//                chkParams(paramsMap, "openDate"),
//                chkParams(paramsMap, "corpRegisterNum"),
//                chkParams(paramsMap, "bisAddress"),
//                chkParams(paramsMap, "headAddress"),
//                chkParams(paramsMap, "bisType"),
//                chkParams(paramsMap, "bisItem"),
//                chkParams(paramsMap, "coRepName"),
//                chkParams(paramsMap, "taxOffice")
//        );
//
//        System.out.println("================= 사업자등록증 입력 정보 전달 fin =================");
//    }

//    /**
//     * 주민등록증/운전면허증 정보 저장
//     * @param params
//     */
//    @PostMapping(path = "/postIdentification")
//    @ResponseBody
//    public void postIdentification(@RequestBody(required = true) Map<String, Object> params) {
//        log.info("================= 주민등록증/운전면허증 입력 정보 전달 =================");
//        HashMap<String, Object> paramsMap = (HashMap<String, Object>)params.get("params");
//
//        for (Map.Entry<String, Object> entry : paramsMap.entrySet()) {
//            String key = entry.getKey();
//            String valueStr = String.valueOf(entry.getValue());
//            valueStr = valueStr.replaceAll("\\[","").replaceAll("\\]","");
//            paramsMap.put(key, valueStr);
//        }
//
//        String personalNum = String.valueOf(paramsMap.get("personalNum"));
//        String jumin1 = personalNum.substring(0,6);
//        String jumin2 = personalNum.substring(personalNum.length()-7, personalNum.length());
//
//        String gubun = String.valueOf(paramsMap.get("gubun"));
//        String issueDate = String.valueOf(paramsMap.get("issueDate"));
//        String authority = String.valueOf(paramsMap.get("authority"));
//        String DayData = issueDate+" "+authority;
//        String rdJuminDay = "";
//        String rdDriverDay = "";
//
//        if (gubun.equals("I")) {
//            rdJuminDay = DayData;
//        }
//        else if	(gubun.equals("D")){
//            rdDriverDay = DayData;
//        }
//
//        tbLicensesMapper.insert(
//                chkParams(paramsMap, "name"),
//                jumin1,
//                jumin2,
//                chkParams(paramsMap, "num"),
//                chkParams(paramsMap, "address"),
//                chkParams(paramsMap, "rdAddr2"),
//                rdJuminDay,
//                rdDriverDay
//        );
//
//        log.info("================= 주민등록증/운전면허증 입력 정보 전달 fin =================");
//    }

    /**
     * key가 존재하는지 체크하는 함수
     * (사업자구분에 따라 키가 바뀌는 경우 존재)
     * @param paramsMap
     * @param key
     * @return
     */
    public String chkParams(HashMap<String, Object> paramsMap, String key) {
        String rtnStr = "";

        if(paramsMap.containsKey(key)) {
            if(!paramsMap.get(key).toString().isEmpty()) {
                rtnStr = paramsMap.get(key).toString();
            }
        } else {
            // companyName가 없는 경우 corpName로 재검색
            if(key.equalsIgnoreCase("companyName")){
                rtnStr = chkParams(paramsMap, "corpName");
            }
        }

        return rtnStr;
    }


//    //사업자 등록증 확인/저장/주소검색/주소불러오기
//    @PostMapping(path = "/postBizLicenseAndWW")
//    @ResponseBody
//    public Map<String, Object> postBizLicenseAndWW(@RequestBody(required = true) Map<String, Object> params) throws SearchException {
//        System.out.println("================= 사업자등록증 입력 정보 전달 =================");
//        HashMap<String, Object> paramsMap = (HashMap<String, Object>)params.get("params");
//        Map<String, Object> result = new HashMap<>();
//        for (Map.Entry<String, Object> entry : paramsMap.entrySet()) {
//            String key = entry.getKey();
//            ArrayList<String> valueArr = (ArrayList<String>) entry.getValue();
//            String valueStr = valueArr.toString();
//
//            if(key.contains("Date") || key.contains("birth")) {
//                valueStr = String.join("/", valueArr);
//            }
//
//            valueStr = valueStr.replaceAll("\\[","").replaceAll("\\]","");
//
//            paramsMap.put(key, valueStr);
//        }
//
//        String search;
//        try {
//            if(paramsMap.get("bisAddress").toString().split("[.]") != null)
//            {
//                //상세 주소 있다면 빼고 주소 검색
//                search = paramsMap.get("bisAddress").toString().split("[.]")[0];
//                System.out.print(search);
//            }
//            else {
//                search = paramsMap.get("bisAddress").toString();
//            }
//        }
//        catch(NullPointerException e){
//            result.put("error", e);
//            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, e.getMessage());
//        }
//
//        Map<String, Object> jusoList ;
//        try {
//            jusoList =  addressSearch.getJusoList(search);
//        } catch (SearchException e) {
//            result.put("error", e);
//            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, e.getMessage());
//        }
//        JSONObject results = new JSONObject(jusoList);
//        JSONArray juso =  results.getJSONObject("results").getJSONArray("juso");
//        String totalCount = results.getJSONObject("results").getJSONObject("common").getString("totalCount");
//
//        if(InsuStringUtil.Equals(totalCount, "0")){
//            throw new SearchException("조회된 데이터가 없습니다. 주소를 다시 입력해주세요");
//        }
//
//
//		/*String sigungucd = item.admCd?.slice(0, 5);
//		String bjdongcd = item.admCd?.slice(5);
//		int bun = Number(item?.lnbrMnnm);
//		int ji = Number(item?.lnbrSlno);
//		String zip = item?.zipNo;*/
//
//        try {
//            JSONObject element= new JSONObject(juso.get(0));
//            String sigungucd = element.getJSONObject("element").getString("admCd").substring(0,5);
//            String bjdongcd = element.getJSONObject("element").getString("admCd").substring(5);
//            int bun = Integer.parseInt(element.getJSONObject("element").getString("lnbrMnnm"));
//            int ji = Integer.parseInt(element.getJSONObject("element").getString("lnbrSlno"));
//            String zip = element.getJSONObject("element").getString("zipNo");
//            Map<String, Object> search2 = addressSearch.getHouseCoverInfo(sigungucd, bjdongcd, bun, ji);
//            List<Map<String, Object>> items = QuoteUtil.GetItemFromHouseInfo(search2);
//
//            Map<String, Object> data = new HashMap<String, Object>();
//            Map<String, Object> cover = QuoteUtil.GetCoverSummary(items);
//            String quote_no = QuoteUtil.GetNewQuoteNo("W");
//
//            in010tMapper.ww_insert(
//                    quote_no,
//                    "ETC", //building_type, //풍수해는 building_type이 의미 없다.
//                    String.valueOf(cover.get("newPlatPlc")),
//                    "S", // 풍수해는 기본적으로 세대 가입이다.
//                    String.valueOf(cover.get("bldNm")),
//                    String.valueOf(cover.get("dong_info")),
//                    String.valueOf(cover.get("mainPurpsCdNm")),
//                    String.valueOf(cover.get("newPlatPlc")),
//                    String.valueOf(cover.get("etcPurps")),
//                    String.valueOf(cover.get("useAprDay")),
//                    String.valueOf(cover.get("etcRoof")),
//                    String.valueOf(cover.get("dongNm")),
//                    String.valueOf(cover.get("total_area")),
//                    String.valueOf(cover.get("cnt_sedae")),
//                    String.valueOf(cover.get("max_grnd_flr_cnt")),
//                    String.valueOf(cover.get("ugrndFlrCnt")),
//                    String.valueOf(cover.get("etcStrct")),
//                    cover.toString(),
//                    "" //풍수해는 전유부가 없다.
//            );
//
//            data = in001tMapper.selectById(quote_no);
//            data.put("premiums", in102cMapper.selectAll());
//            data.put("lobz_cds", in103cMapper.selectAll());
//            Map<String, Object> product = in006cMapper.selectByPcode("h007");
//            data.put("product", product);
//
//            // WindWaterInsurance.aspx.cs::BuildingInfoText
//            Map<String, Object> tmpl = ResourceUtil.asMap(tmpl_preminum_req_body_json);
//            Map<String, Object> oagi6002vo = (Map<String, Object>) tmpl.get("oagi6002vo");
//            oagi6002vo.put("bldTotLyrNum", cover.get("max_grnd_flr_cnt")); // 총층수
//            oagi6002vo.put("lsgcCd", data.get("lsgc_cd"));
//            oagi6002vo.put("poleStrc", data.get("pole_strc"));
//            oagi6002vo.put("roofStrc", data.get("roof_strc"));
//            oagi6002vo.put("otwlStrc", data.get("otwl_strc"));
//
//            // WindWaterInsurance.aspx.cs::btn_next_Click
//            oagi6002vo.put("objZip1", zip.substring(0, 3));
//            oagi6002vo.put("objZip2", zip.substring(3));
//            oagi6002vo.put("objAddr1", cover.get("newPlatPlc"));
//            oagi6002vo.put("objAddr2", InsuNumberUtil.ToIntChar(cover.get("naMainBun")) + ", " + cover.get("bldNm"));
//            oagi6002vo.put("objRoadNmCd", String.valueOf(cover.get("naRoadCd")));
//            oagi6002vo.put("objTrbdCd", sigungucd + bjdongcd);
//            oagi6002vo.put("objTrbdAddr", String.valueOf(cover.get("platPlc")) + " " + String.valueOf(cover.get("bldNm")));
//
//            data.put("ww_info", tmpl);
//            result.put("coverData", data);
//        } catch (SearchException e) {
//            result.put("error", e);
//            log.error("/ww/cover(Search): {}", e.getMessage());
//            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, e.getMessage());
//        } catch (DataAccessException e) {
//            result.put("error", e);
//            log.error("ww/cover(DataAccess): {}", e.getMessage());
//            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "공공데이터 수신오류입니다.\n관리자에게 연락해주세요.");
//        }
//
//        try {
//            tbBizRegMapper.insert(
//                    chkParams(paramsMap, "registerNumber"),
//                    chkParams(paramsMap, "taxType").equals("법인사업자") ? "0" : "1", // 사업자구분 (0: 법인사업자(공동대표), 1: 간이/일반사업자(공동사업자))
//                    chkParams(paramsMap, "companyName"), // 사업자구분에 따라 상호명이 담기는 위치가 다름
//                    chkParams(paramsMap, "repName"),
//                    chkParams(paramsMap, "openDate"),
//                    chkParams(paramsMap, "corpRegisterNum"),
//                    chkParams(paramsMap, "bisAddress"),
//                    chkParams(paramsMap, "headAddress"),
//                    chkParams(paramsMap, "bisType"),
//                    chkParams(paramsMap, "bisItem"),
//                    chkParams(paramsMap, "coRepName"),
//                    chkParams(paramsMap, "taxOffice")
//            );
//        }catch(DataAccessException e) {
//            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "사업자등록정보를 다시 입력해주세요.");
//        }
//
//        System.out.println("================= 사업자등록증 입력 정보 전달 fin =================");
//
//        result.put("data", jusoList);
//
//        return result;
//    }


}