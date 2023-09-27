package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.ecxeption_handling.NoSuchUserException;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;


@RestController
@RequestMapping("/api/user")
public class UserRestController {

    private final UserService userService;

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable("id") long id) {

        User user = userService.getUser(id);
        if (user == null) {
            throw new NoSuchUserException("There is no user with id = " + id
                    + " in database");
        }
        return user;
    }

    @GetMapping("/users/currentUser")
    public User getCurrentUser(@AuthenticationPrincipal User user) {
        return user;
    }
}