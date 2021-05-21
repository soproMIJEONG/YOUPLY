package kr.co.youply.web;

import kr.co.youply.domain.posts.Posts;
import kr.co.youply.service.posts.PostsService;
import kr.co.youply.web.dto.PostsDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-17
 * Time: 오후 1:41
 */

@RequiredArgsConstructor
@RestController
public class PostsApiController
{
    private final PostsService postsService;

    @PostMapping("/api/posts")
    public Long save(@RequestBody PostsDTO.PostsSaveRequestDTO requestDTO)
    {
        return postsService.save(requestDTO);
    }
}
