package kr.co.youply.service.posts;

import kr.co.youply.domain.posts.Posts;
import kr.co.youply.domain.posts.PostsRepository;
import kr.co.youply.domain.tag.TagRepository;
import kr.co.youply.web.dto.PostsDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-10
 * Time: 오전 1:16
 */

@RequiredArgsConstructor // Autowired 대신 생성자로 자동 주입을 한다.
@Service
public class PostsService
{
    private final PostsRepository postsRepository;
    private final TagRepository tagRepository;

    @Transactional
    public Long save(PostsDTO.PostsSaveRequestDTO requestDto)
    {
        return postsRepository.save(requestDto.toEntity())
                .getId();
    }

    @Transactional
    public Long update(Long id, PostsDTO.PostsUpdateRequestDTO requestDTO)
    {
        Posts posts = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        posts.update(requestDTO.getTitle(), requestDTO.getBody(), requestDTO.getSelectedPL(), requestDTO.getThumbnail());

        return id;
    }

    public PostsDTO.PostsResponseDTO findById(Long id)
    {
        Posts entity = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        return new PostsDTO.PostsResponseDTO(entity);
    }

    @Transactional(readOnly = true)
    public List<PostsDTO.PostsListResponseDTO> findAllDesc()
    {
        return postsRepository.findAllDesc().stream()
                .map(PostsDTO.PostsListResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public void delete(Long id)
    {
        Posts posts = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        postsRepository.delete(posts);
    }
}
