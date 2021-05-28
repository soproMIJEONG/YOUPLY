package kr.co.youply.domain.posts;

import kr.co.youply.domain.BaseTimeEntity;
import kr.co.youply.domain.PostsTag.PostsTag;
import kr.co.youply.domain.tag.Tag;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-05-09
 * Time: 오후 10:36
 */

@Getter
@NoArgsConstructor
@Entity
public class Posts extends BaseTimeEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String body;

    private String userId;

    private String username;

    @ColumnDefault("0")
    private int count;

    private String selectedPL;

    private String thumbnail;

    @ColumnDefault("false")
    private boolean deleteFlag;

    @Builder
    public Posts(String title, String body, String userId, String username, String selectedPL, String thumbnail)
    {
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.username = username;
        this.selectedPL = selectedPL;
        this.thumbnail = thumbnail;
    }

    public void update(String title, String body, String selectedPL, String thumbnail)
    {
        this.title = title;
        this.body = body;
        this.selectedPL= selectedPL;
        this.thumbnail = thumbnail;
    }

    // DB에 남기는 삭제
    public void softDelete()
    {
        this.deleteFlag = true;
    }
}
