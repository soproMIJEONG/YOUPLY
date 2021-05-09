package kr.co.youply.domain.user;

import kr.co.youply.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-09
 * Time: 오후 11:58
 */

@Getter
@NoArgsConstructor
@Entity
public class User extends BaseTimeEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column
    private String picture;

    @Builder
    public User(String name, String email, String picture)
    {
        this.name = name;
        this.email = email;
        this.picture = picture;
    }

    public User update(String name, String picture)
    {
        this.name = name;
        this.picture = picture;

        return this;
    }
}
