package kr.co.youply.web;

import kr.co.youply.service.posts.PostsService;
import kr.co.youply.web.dto.PostsDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/api/posts/{id}")
    public PostsDTO.PostsResponseDTO findById(@PathVariable Long id)
    {
        return postsService.findById(id);
    }

    @PatchMapping("/api/posts/{id}")
    public Long update(@PathVariable Long id, @RequestBody PostsDTO.PostsUpdateRequestDTO requestDTO)
    {
        return postsService.update(id, requestDTO);
    }

    @DeleteMapping("/api/posts/{id}")
    public Long delete(@PathVariable Long id)
    {
        postsService.delete(id);

        return id;
    }

    @GetMapping("/api/posts")
    public List<PostsDTO.PostsListResponseDTO> findAllDesc()
    {
        return postsService.findAllDesc();
    }
}
