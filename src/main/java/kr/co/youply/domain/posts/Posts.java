package kr.co.youply.domain.posts;

import kr.co.youply.domain.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-09
 * Time: 오후 10:36
 */

@Getter
@NoArgsConstructor
@Entity
public class Posts extends BaseTimeEntity
{
    @Id
    private Long id;
    private String title;
    private String content;
    private String author;

}
