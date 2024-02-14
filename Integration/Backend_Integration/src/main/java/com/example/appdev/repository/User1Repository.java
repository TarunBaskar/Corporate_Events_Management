// package com.example.appdev.repository;

// import com.example.appdev.modal.User1;
// import org.springframework.data.jpa.repository.JpaRepository;

// public interface User1Repository extends JpaRepository<User1, Long> {

// }


package com.example.appdev.repository;

import com.example.appdev.modal.User1;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface User1Repository extends JpaRepository<User1, Long> {

    Optional<User1> findByUseremail(String useremail);

}
