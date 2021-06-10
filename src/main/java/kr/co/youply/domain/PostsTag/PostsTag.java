package kr.co.youply.domain.PostsTag;

import kr.co.youply.domain.posts.Posts;
import kr.co.youply.domain.tag.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-23
 * Time: 오후 7:19
 */

@Getter
@NoArgsConstructor
@Entity
@IdClass(PostsTagId.class)
public class PostsTag
{
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "posts_id")
    private Posts posts;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tag_name")
    private Tag tag;

    public PostsTag(Posts posts, Tag tag)
    {
        this.posts = posts;
        this.tag = tag;
    }

    public void update(Posts posts)
    {
    }
}
