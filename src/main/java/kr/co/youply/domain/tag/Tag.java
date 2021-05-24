package kr.co.youply.domain.tag;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-21
 * Time: 오후 11:00
 */

@Getter
@NoArgsConstructor
@Entity
public class Tag
{
    @Id
    private String name;

    public Tag(String name)
    {
        this.name = name;
    }
}
