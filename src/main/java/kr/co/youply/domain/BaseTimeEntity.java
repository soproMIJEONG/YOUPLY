package kr.co.youply.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-09
 * Time: 오후 10:38
 */

// JPA Auditing 어노테이션들을 활성화할 수 있도록 JpaConfig 클래스에 @EnabledJpaAuditing 추가
@Getter
@MappedSuperclass // JPA 엔티티들이 이 클래스를 상속할 경우 필드들을 컬럼으로 인식하게 한다.
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTimeEntity
{
    @CreatedDate // 엔티티가 생성되어 저장될 때 시간이 자동 저장된다.
    private LocalDateTime createdDate;

    @LastModifiedDate // 조회한 엔티티를 변경할 때 시간이 자동 저장된다.
    private LocalDateTime modifiedDate;
}
