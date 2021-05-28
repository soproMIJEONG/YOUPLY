package kr.co.youply.web;

import kr.co.youply.service.posts.PostsService;
import kr.co.youply.web.dto.PostsDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
    public PostsDTO.PostsListResponsePageDTO findListDesc(@RequestParam(required = false, defaultValue = "1") int page,
                                                            @RequestParam(required = false, defaultValue = "", value = "searchKeyword") String keyword,
                                                            @RequestParam(required = false, defaultValue = "", value = "searchType") String type)
    {
        return postsService.findListDesc(PageRequest.of(page-1, 6, Sort.Direction.DESC, "id"), keyword, type);
    }
}
