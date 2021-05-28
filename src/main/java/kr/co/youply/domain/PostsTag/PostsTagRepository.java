package kr.co.youply.domain.PostsTag;

import kr.co.youply.domain.posts.Posts;
import kr.co.youply.domain.tag.Tag;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-23
 * Time: 오후 8:09
 */

public interface PostsTagRepository extends JpaRepository<PostsTag, PostsTagId>
{
    @Query(value = "SELECT * FROM POSTS_TAG pt WHERE pt.posts_id = :id", nativeQuery = true)
    List<PostsTag> findByPosts(@Param("id")Long id);
}
