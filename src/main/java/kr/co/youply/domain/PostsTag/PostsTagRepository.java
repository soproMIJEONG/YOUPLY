package kr.co.youply.domain.PostsTag;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

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

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM PostsTag pt WHERE pt.posts.id = :id")
    void deleteAllByPosts(@Param("id")Long id);
}
