// package com.example.appdev.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.appdev.modal.User1;
// import com.example.appdev.repository.User1Repository;

// @Service
// public class User1Service {

//     private final User1Repository userRepository;

//     @Autowired
//     public User1Service(User1Repository userRepository) {
//         this.userRepository = userRepository;
//     }

//     public List<User1> getAllUsers() {
//         return userRepository.findAll();
//     }

//     public User1 getUserById(Long userid) {
//         return userRepository.findById(userid).orElse(null);
//     }

//     public User1 createUser(User1 user) {
//         return userRepository.save(user);
//     }

//     public User1 updateUser(Long userid, User1 user) {
//         User1 existingUser = userRepository.findById(userid).orElse(null);
//         if (existingUser != null) {
//             existingUser.setUseremail(user.getUseremail());
//             existingUser.setDateOfBirth(user.getDateOfBirth());
//             existingUser.setGender(user.getGender());
//             existingUser.setLocation(user.getLocation());

//             return userRepository.save(existingUser);
//         }
//         return null;
//     }

//     public void deleteUser(Long id) {
//         userRepository.deleteById(id);
//     }
// }


package com.example.appdev.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.appdev.modal.User1;
import com.example.appdev.repository.User1Repository;

@Service
public class User1Service {

    private final User1Repository userRepository;

    @Autowired
    public User1Service(User1Repository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User1> getAllUsers() {
        return userRepository.findAll();
    }

    public User1 getUserByEmail(String useremail) {
        return userRepository.findByUseremail(useremail).orElse(null);
    }

    public User1 createUser(User1 user) {
        return userRepository.save(user);
    }

    public User1 updateUser(String useremail, User1 user) {
        User1 existingUser = userRepository.findByUseremail(useremail).orElse(null);
        if (existingUser != null) {
            existingUser.setUseremail(user.getUseremail());
            existingUser.setDateOfBirth(user.getDateOfBirth());
            existingUser.setGender(user.getGender());
            existingUser.setLocation(user.getLocation());

            return userRepository.save(existingUser);
        }
        return null;
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
