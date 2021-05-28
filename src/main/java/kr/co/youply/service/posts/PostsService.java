package kr.co.youply.service.posts;

import kr.co.youply.domain.PostsTag.PostsTag;
import kr.co.youply.domain.PostsTag.PostsTagRepository;
import kr.co.youply.domain.posts.Posts;
import kr.co.youply.domain.posts.PostsRepository;
import kr.co.youply.domain.tag.Tag;
import kr.co.youply.domain.tag.TagRepository;
import kr.co.youply.web.dto.PostsDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    private final PostsTagRepository postsTagRepository;

    @Transactional
    public Long save(PostsDTO.PostsSaveRequestDTO requestDto)
    {
        // 게시글을 insert한다.
        Posts posts =  postsRepository.save(requestDto.toEntity());
        Long postsId = posts.getId();

        // 태그와 중간 테이블을 insert한다.
        for(String name : requestDto.getTags())
        {
            Tag tag = tagRepository.save(new Tag(name));
            postsTagRepository.save(new PostsTag(posts, tag));
        }

        return postsId;
    }

    @Transactional
    public Long update(Long id, PostsDTO.PostsUpdateRequestDTO requestDTO)
    {
        Posts posts = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        posts.update(requestDTO.getTitle(), requestDTO.getBody(), requestDTO.getSelectedPL(), requestDTO.getThumbnail());

        return id;
    }

    @Transactional(readOnly = true)
    public PostsDTO.PostsResponseDTO findById(Long id)
    {
        Posts entity = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        // List<PostsTagDTO.PostsTagListResponseDTO> tags = postsTagRepository.findByPosts(entity.getId()).stream().map(PostsTagDTO.PostsTagListResponseDTO::new).collect(Collectors.toList());
        List<String> tags = postsTagRepository.findByPosts(entity.getId()).stream().map(tag -> tag.getTag().getName()).collect(Collectors.toList());

        return new PostsDTO.PostsResponseDTO(entity, tags);
    }

    @Transactional(readOnly = true)
    public PostsDTO.PostsListResponsePageDTO findListDesc(Pageable pageable, String keyword, String type)
    {
        Page<Posts> pages = null;
        List<PostsDTO.PostsListResponseDTO> postsListResponseDTO = null;

        if(type.equals("tag"))
        {
            pages = postsRepository.findAllByTagAndDeleteFlagFalse(keyword, pageable);
            postsListResponseDTO = pages.getContent().stream()
                    .map(PostsDTO.PostsListResponseDTO::new).collect(Collectors.toList());
        }
        else if(type.equals("title"))
        {
            pages = postsRepository.findAllByTitleContainingAndDeleteFlagFalse(keyword, pageable);
            postsListResponseDTO = pages.stream()
                    .map(PostsDTO.PostsListResponseDTO::new).collect(Collectors.toList());
        }
        else
        {
            pages = postsRepository.findAll(pageable);
            postsListResponseDTO = pages.stream()
                    .map(PostsDTO.PostsListResponseDTO::new).collect(Collectors.toList());
        }

        for(PostsDTO.PostsListResponseDTO dto : postsListResponseDTO)
            dto.setTags(postsTagRepository.findByPosts(dto.getId()).stream().map(tag -> tag.getTag().getName()).collect(Collectors.toList()));

        return new PostsDTO.PostsListResponsePageDTO(postsListResponseDTO, pages.getTotalPages());
    }

    @Transactional
    public void softDelete(Long id)
    {
        Posts posts = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        posts.softDelete();
    }
}
