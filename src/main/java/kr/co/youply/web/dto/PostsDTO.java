package kr.co.youply.web.dto;

import kr.co.youply.domain.posts.Posts;
import kr.co.youply.domain.user.User;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-10
 * Time: 오전 1:20
 */

public class PostsDTO
{
    // DB에 Posts insert 요청을 하기 위한 DTO
    @Getter
    public static class PostsSaveRequestDTO
    {
        private String title;
        private String content;
        private User author;

        @Builder
        public PostsSaveRequestDTO(String title, String content, User author)
        {
            this.title = title;
            this.content = content;
            this.author = author;
        }

        public Posts toEntity()
        {
            return Posts.builder()
                    .title(title)
                    .content(content)
                    .author(author)
                    .build();
        }
    }

    // DB에 Posts update 요청을 하기 위한 DTO
    @Getter
    public static class PostsUpdateRequestDTO
    {
        private String title;
        private String content;

        @Builder
        public PostsUpdateRequestDTO(String title, String content)
        {
            this.title = title;
            this.content = content;
        }
    }

    // DB에서 가져온 PostsDTO
    @Getter
    public static class PostsResponseDTO
    {
        private Long id;
        private String title;
        private String content;
        private User author;
        private int count;

        public PostsResponseDTO(Posts entity)
        {
            this.id = entity.getId();
            this.title = entity.getTitle();
            this.content = entity.getContent();
            this.author = entity.getAuthor();
            this.count = entity.getCount();
        }
    }

    // 목록에서 보여줄 내용을 담고 있는 DTO
    @Getter
    public static class PostsListResponseDTO
    {
        private Long id;
        private String title;
        private User author;
        private int count;
        private LocalDateTime modifiedDate;

        public PostsListResponseDTO(Posts entity)
        {
            this.id = entity.getId();
            this.title = entity.getTitle();
            this.author = entity.getAuthor();
            this.count = entity.getCount();
            this.modifiedDate = entity.getModifiedDate();
        }
    }
}
