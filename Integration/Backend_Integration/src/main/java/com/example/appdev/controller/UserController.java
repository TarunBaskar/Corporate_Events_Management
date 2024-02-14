// // package com.example.appdev.controller;

// // import com.example.appdev.modal.User;
// // import com.example.appdev.service.UserService;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.web.bind.annotation.*;

// // import java.util.List;

// // @RestController
// // @RequestMapping("/api/users")
// // public class UserController {

// //     private final UserService userService;

// //     @Autowired
// //     public UserController(UserService userService) {
// //         this.userService = userService;
// //     }

// //     @GetMapping("/{useremail}")
// //     public User getUserDetails(@PathVariable String useremail) {
// //         return userService.getUserByEmail(useremail);
// //     }

// //     @GetMapping("/all")
// //     public List<User> getAllUsers() {
// //         return userService.getAllUsers();
// //     }

// //     @PostMapping("/add")
// //     public User addUserDetails(@RequestBody User user) {
// //         return userService.saveUser(user);
// //     }

// //     @PutMapping("/{useremail}")
// //     public User updateUserDetails(@PathVariable String useremail, @RequestBody User updatedUser) {
// //         return userService.updateUser(useremail, updatedUser);
// //     }
// // }


// package com.example.appdev.controller;

// import com.example.appdev.modal.User1;
// import com.example.appdev.service.User1Service;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// @CrossOrigin
// @RestController
// @RequestMapping("/auth/users")
// public class UserController {

//     private final User1Service userService;

//     @Autowired
//     public UserController(User1Service userService) {
//         this.userService = userService;
//     }

//     @GetMapping("/{userId}")
//     public User1 getUserDetails(@PathVariable Long userId) {
//         return userService.getUserById(userId);
//     }

//     @GetMapping("/all")
//     public List<User1> getAllUsers() {
//         return userService.getAllUsers();
//     }

//     @PostMapping("/add")
//     public User1 addUserDetails(@RequestBody User1 user) {
//         return userService.createUser(user);
//     }

//     @PutMapping("/{userId}")
//     public User1 updateUserDetails(@PathVariable Long userId, @RequestBody User1 updatedUser) {
//         return userService.updateUser(userId, updatedUser);
//     }

//     @DeleteMapping("/{userId}")
//     public void deleteUser(@PathVariable Long userId) {
//         userService.deleteUser(userId);
//     }
// }

package com.example.appdev.controller;

import com.example.appdev.modal.User1;
import com.example.appdev.service.User1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/auth/users")
public class UserController {

    private final User1Service userService;

    @Autowired
    public UserController(User1Service userService) {
        this.userService = userService;
    }

    @GetMapping("/email/{useremail}")
    public User1 getUserDetails(@PathVariable String useremail) {
        return userService.getUserByEmail(useremail);
    }

    @GetMapping("/all")
    public List<User1> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/add")
    public User1 addUserDetails(@RequestBody User1 user) {
        return userService.createUser(user);
    }

    @PutMapping("/email/{useremail}")
    public User1 updateUserDetails(@PathVariable String useremail, @RequestBody User1 updatedUser) {
        return userService.updateUser(useremail, updatedUser);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }
}
