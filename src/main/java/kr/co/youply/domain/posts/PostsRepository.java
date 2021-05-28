package kr.co.youply.domain.posts;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-10
 * Time: 오전 1:14
 */

public interface PostsRepository extends JpaRepository<Posts, Long>
{
    Optional<Posts> findByIdAndDeleteFlagFalse(Long id);

    @Query("SELECT p FROM Posts p WHERE p.deleteFlag = FALSE")
    Page<Posts> findAllAndDeleteFlagFalse(Pageable pageable);

    // 제목으로 검색
    Page<Posts> findAllByTitleContainingAndDeleteFlagFalse(String title, Pageable pageable);

    // 내용으로 검색
    Page<Posts> findAllByBodyContainingAndDeleteFlagFalse(String body, Pageable pageable);

    @Query("SELECT p FROM PostsTag pt inner join Posts p ON pt.posts.id = p.id WHERE pt.tag.name = :tag AND p.deleteFlag=false ORDER BY p.id DESC")
    Page<Posts> findAllByTagAndDeleteFlagFalse(String tag, Pageable pageable);
}
