package kr.co.youply.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-04-04
 * Time: 오전 12:39
 */

@Controller
public class BoardController
{
    @GetMapping(path = "/")
    public String index()
    {
        return "test.html";
    }

    @GetMapping(path = "/home")
    public String home()
    {
        return LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }
}
