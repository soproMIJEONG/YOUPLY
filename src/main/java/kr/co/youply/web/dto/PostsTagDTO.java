package kr.co.youply.web.dto;

import kr.co.youply.domain.PostsTag.PostsTag;
import kr.co.youply.domain.posts.Posts;
import kr.co.youply.domain.tag.Tag;
import lombok.Getter;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-24
 * Time: 오전 12:19
 */

public class PostsTagDTO
{
    @Getter
    public static class PostsTagListResponseDTO
    {
        private String tag;

        public PostsTagListResponseDTO(PostsTag entity)
        {
            this.tag = entity.getTag().getName();
        }
    }
}
