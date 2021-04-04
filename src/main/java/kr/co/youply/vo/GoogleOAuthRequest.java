package kr.co.youply.vo;

import lombok.Builder;
import lombok.Data;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-04-05
 * Time: 오전 1:42
 */

@Data
public class GoogleOAuthRequest
{
    private String redirectUri;
    private String clientId;
    private String clientSecret;
    private String code;
    private String responseType;
    private String scope;
    private String accessType;
    private String grantType;
    private String state;
    private String includeGrantedScopes;
    private String loginHint;
    private String prompt;
}
