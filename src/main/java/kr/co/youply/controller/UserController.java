package kr.co.youply.controller;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import kr.co.youply.vo.GoogleOAuthRequest;
import kr.co.youply.vo.GoogleOAuthResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-04-05
 * Time: 오전 1:44
 */

@Controller
public class UserController
{
    @GetMapping("login/google/auth")
    public String googleAuth(Model model, @RequestParam(value = "code") String authCode) throws Exception
    {
        RestTemplate restTemplate = new RestTemplate();

        GoogleOAuthRequest googleOAuthRequest = new GoogleOAuthRequest();
        googleOAuthRequest.setClientId("935546399436-4u288v2ldqeqjvl48d9b2fhruajtskrb.apps.googleusercontent.com");
        googleOAuthRequest.setClientSecret("PwJ-pOyjp4MdxEgRchHVyILa");
        googleOAuthRequest.setCode(authCode);
        googleOAuthRequest.setRedirectUri("http://localhost:8080/login/google/auth");
        googleOAuthRequest.setGrantType("authorization_code");

        ObjectMapper mapper = new ObjectMapper();
        mapper.setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);

        //AccessToken 발급 요청
        ResponseEntity<String> resultEntity = restTemplate.postForEntity("https://oauth2.googleapis.com/token", googleOAuthRequest, String.class);

        //Token Request
        GoogleOAuthResponse result = mapper.readValue(resultEntity.getBody(), new TypeReference<GoogleOAuthResponse>() { });

        //ID Token만 추출 (사용자의 정보는 jwt로 인코딩 되어있다)
        String jwtToken = result.getIdToken();
        String requestUrl = UriComponentsBuilder.fromHttpUrl("https://oauth2.googleapis.com/tokeninfo").queryParam("id_token", jwtToken).toUriString();

        String resultJson = restTemplate.getForObject(requestUrl, String.class);

        Map<String,String> userInfo = mapper.readValue(resultJson, new TypeReference<Map<String, String>>(){});
        model.addAllAttributes(userInfo);
        model.addAttribute("token", result.getAccessToken());

        return "/loginSuccess.html";
    }
}
