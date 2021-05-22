package kr.co.youply.domain.posts;

import kr.co.youply.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;

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

    @Column
    private String username;

    @ColumnDefault("0")
    private int count;

    private String selectedPL;

    private ArrayList<String> tags;

    private String thumbnail;

    @ColumnDefault("false")
    private boolean deleteFlag;

    @Builder
    public Posts(String title, String body, String username, String selectedPL, ArrayList<String> tags, String thumbnail)
    {
        this.title = title;
        this.body = body;
        this.username = username;
        this.selectedPL = selectedPL;
        this.tags = tags;
        this.thumbnail = thumbnail;
    }

    public void update(String title, String body, String selectedPL, ArrayList<String> tags)
    {
        this.title = title;
        this.body = body;
        this.selectedPL= selectedPL;
        this.tags = tags;
    }
}
