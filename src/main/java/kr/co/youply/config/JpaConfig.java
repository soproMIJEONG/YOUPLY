package kr.co.youply.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-09
 * Time: 오후 10:49
 */

@Configuration
@EnableJpaAuditing // Jpa의 Auditing기능 활성화(시간에 대해서 자동으로 값을 넣어주는 기능)
public class JpaConfig
{
}
