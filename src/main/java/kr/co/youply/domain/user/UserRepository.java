package kr.co.youply.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-10
 * Time: 오전 12:09
 */

public interface UserRepository extends JpaRepository<User, Long>
{
    Optional<User> findByEmail(String email);
}
