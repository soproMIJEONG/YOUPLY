package kr.co.youply.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-09
 * Time: 오후 11:40
 */

@Configuration
public class WebConfig implements WebMvcConfigurer
{
    // 다른 오리진으로부터 리소스를 받을 수 있게 한다.(리액트의 3000번 포트로부터 오는 자원 허용)
    @Override
    public void addCorsMappings(CorsRegistry registry)
    {
        registry.addMapping("/**")
                .allowedOrigins("https://youply-311905.web.app/");
    }
}
