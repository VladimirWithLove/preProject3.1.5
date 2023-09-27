package ru.kata.spring.boot_security.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin")
public class AdminsController {

    @GetMapping()
    public String showAllUsers() {
        return "/forAdmin/all-users";
    }
}
