package kr.co.youply.web.dto;

import kr.co.youply.domain.posts.Posts;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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
        private String userId;
        private String username;
        private String selectedPL;
        private List<String> tags;
        private String thumbnail;

        @Builder
        public PostsSaveRequestDTO(String title, String body, String userId, String username, String[] tags, String selectedPL, String thumbnail)
        {
            this.title = title;
            this.body = removeTag(body);
            this.userId = userId;
            this.username = username;
            this.tags = new ArrayList(Arrays.asList(tags));
            this.selectedPL = selectedPL;
            this.thumbnail = thumbnail;
        }

        public Posts toEntity()
        {
            return Posts.builder()
                    .title(title)
                    .body(body)
                    .userId(userId)
                    .username(username)
                    .selectedPL(selectedPL)
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
        private List<String> tags;
        private String thumbnail;

        @Builder
        public PostsUpdateRequestDTO(String title, String body, String selectedPL, String[] tags, String thumbnail)
        {
            this.title = title;
            this.body = removeTag(body);
            this.selectedPL = selectedPL;
            this.tags = new ArrayList(Arrays.asList(tags));
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
        private String userId;
        private String username;
        private int count;
        private String selectedPL;
        private String thumbnail;
        // private List<PostsTagDTO.PostsTagListResponseDTO> tags;
        private List<String> tags;
        private LocalDateTime createdTime;
        private LocalDateTime modifiedTime;

        public PostsResponseDTO(Posts entity, List<String> tags)
        {
            this.id = entity.getId();
            this.title = entity.getTitle();
            this.body = entity.getBody();
            this.userId = entity.getUserId();
            this.username = entity.getUsername();
            this.count = entity.getCount();
            this.selectedPL = entity.getSelectedPL();
            this.thumbnail = entity.getThumbnail();
            this.tags = tags;
            this.createdTime = entity.getCreatedDate();
            this.modifiedTime = entity.getModifiedDate();
        }
    }

    // 목록에서 보여줄 내용을 담고 있는 DTO
    @Getter
    @Setter
    public static class PostsListResponseDTO
    {
        private Long id;
        private String title;
        private String username;
        private int count;
        private String thumbnail;
        private List<String> tags;
        private int lastPage;
        private LocalDateTime createdDate;

        public PostsListResponseDTO(Posts entity)
        {
            this.id = entity.getId();
            this.title = entity.getTitle();
            this.username = entity.getUsername();
            this.count = entity.getCount();
            this.thumbnail = entity.getThumbnail();
            this.createdDate = entity.getCreatedDate();
        }
    }

    @Getter
    public static class PostsListResponsePageDTO
    {
        List<PostsListResponseDTO> posts;
        int lastPage;

        public PostsListResponsePageDTO(List<PostsListResponseDTO> posts, int lastPage)
        {
            this.posts = posts;
            this.lastPage = lastPage;
        }
    }
}
