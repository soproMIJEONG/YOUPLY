package kr.co.youply.domain.PostsTag;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-23
 * Time: 오후 8:03
 */

@NoArgsConstructor
@Getter
public class PostsTagId implements Serializable
{
    private Long posts;
    private String tag;
}
