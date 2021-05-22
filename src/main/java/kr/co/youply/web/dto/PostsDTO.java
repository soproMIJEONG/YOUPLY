package kr.co.youply.web.dto;

import kr.co.youply.domain.posts.Posts;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.ArrayList;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-10
 * Time: 오전 1:20
 */

public class PostsDTO
{
    public static String removeTag(String body)
    {
        return body.replaceAll("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>", "");
    }

    // DB에 Posts insert 요청을 하기 위한 DTO
    @Getter
    public static class PostsSaveRequestDTO
    {
        private String title;
        private String body;
        private String username;
        private String selectedPL;
        private ArrayList<String> tags;
        private String thumbnail;

        @Builder
        public PostsSaveRequestDTO(String title, String body, String username, String selectedPL, ArrayList<String> tags, String thumbnail)
        {
            this.title = title;
            this.body = removeTag(body);
            this.username = username;
            this.selectedPL = selectedPL;
            this.tags = tags;
            this.thumbnail = thumbnail;
        }

        public Posts toEntity()
        {
            return Posts.builder()
                    .title(title)
                    .body(body)
                    .username(username)
                    .selectedPL(selectedPL)
                    .tags(tags)
                    .thumbnail(thumbnail)
                    .build();
        }
    }

    // DB에 Posts update 요청을 하기 위한 DTO
    @Getter
    public static class PostsUpdateRequestDTO
    {
        private String title;
        private String body;
        private String selectedPL;
        private ArrayList<String> tags;
        private String thumbnail;

        @Builder
        public PostsUpdateRequestDTO(String title, String body, String selectedPL, ArrayList<String> tags, String thumbnail)
        {
            this.title = title;
            this.body = removeTag(body);
            this.selectedPL = selectedPL;
            this.tags = tags;
            this.thumbnail = thumbnail;
        }
    }

    // DB에서 가져온 PostsDTO
    @Getter
    public static class PostsResponseDTO
    {
        private Long id;
        private String title;
        private String body;
        private String username;
        private int count;
        private String selectedPL;
        private String thumbnail;
        private LocalDateTime createdTime;
        private LocalDateTime modifiedTime;

        public PostsResponseDTO(Posts entity)
        {
            this.id = entity.getId();
            this.title = entity.getTitle();
            this.body = entity.getBody();
            this.username = entity.getUsername();
            this.count = entity.getCount();
            this.selectedPL = entity.getSelectedPL();
            this.thumbnail = entity.getThumbnail();
            this.createdTime = entity.getCreatedDate();
            this.modifiedTime = entity.getModifiedDate();
        }
    }

    // 목록에서 보여줄 내용을 담고 있는 DTO
    @Getter
    public static class PostsListResponseDTO
    {
        private Long id;
        private String title;
        private String username;
        private int count;
        private String thumbnail;
        private ArrayList<String> tags;
        private LocalDateTime createdDate;

        public PostsListResponseDTO(Posts entity)
        {
            this.id = entity.getId();
            this.title = entity.getTitle();
            this.username = entity.getUsername();
            this.count = entity.getCount();
            this.thumbnail = entity.getThumbnail();
            this.tags = tags;
            this.createdDate = entity.getCreatedDate();
        }
    }
}
