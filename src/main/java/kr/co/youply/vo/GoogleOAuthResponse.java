package kr.co.youply.vo;

import lombok.Data;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-04-05
 * Time: 오전 1:43
 */

@Data
public class GoogleOAuthResponse
{
    private String accessToken;
    private String expiresIn;
    private String refreshToken;
    private String scope;
    private String tokenType;
    private String idToken;
}
