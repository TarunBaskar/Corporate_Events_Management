// // package com.example.appdev.service;

// // import org.springframework.security.authentication.AuthenticationManager;
// // import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// // import org.springframework.security.crypto.password.PasswordEncoder;
// // import org.springframework.stereotype.Service;

// // import com.example.appdev.dto.request.AuthenticationRequest;
// // import com.example.appdev.dto.request.RegisterRequest;
// // import com.example.appdev.dto.response.AuthenticationResponse;
// // import com.example.appdev.modal.Register;
// // import com.example.appdev.modal.Role;
// // import com.example.appdev.repository.UserRepository;

// // import lombok.RequiredArgsConstructor;

// // @Service
// // @RequiredArgsConstructor
// // public class AuthenticationService {

// //     private final UserRepository userRepository;
// //     private final PasswordEncoder passwordEncoder;
// //     private final JwtService jwtService;
// //     private final AuthenticationManager authenticationManager;

// //     public AuthenticationResponse register(RegisterRequest request) {
// //         var user = Register
// //                 .builder()
// //                 .name(request.getName()) // Adjusted field name to follow Java naming conventions
// //                 .email(request.getEmail())
// //                 .password(passwordEncoder.encode(request.getPassword())) 
// //                 // .company(request.getCompany()) // Added company field
// //                 .role(Role.USER)
// //                 .build();
// //         userRepository.save(user);
// //         var jwtToken = jwtService.generateToken(user);
// //         return AuthenticationResponse.builder()
// //                 .token(jwtToken)
// //                 .build();
// //     }

// //     public AuthenticationResponse authenticate(AuthenticationRequest request) {
// //         authenticationManager.authenticate(
// //                 new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
// //         var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
// //         var jwtToken = jwtService.generateToken(user);
// //         return AuthenticationResponse.builder()
// //                 .token(jwtToken)
// //                 .build();
// //     }
// // }

// // package com.example.appdev.service;

// // import org.springframework.security.authentication.AuthenticationManager;
// // import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// // import org.springframework.security.crypto.password.PasswordEncoder;
// // import org.springframework.stereotype.Service;

// // import com.example.appdev.dto.request.AuthenticationRequest;
// // import com.example.appdev.dto.request.RegisterRequest;
// // import com.example.appdev.dto.response.AuthenticationResponse;
// // import com.example.appdev.modal.Register;
// // import com.example.appdev.modal.Role;
// // import com.example.appdev.repository.UserRepository;

// // import lombok.RequiredArgsConstructor;

// // @Service
// // @RequiredArgsConstructor
// // public class AuthenticationService {

// //     private final UserRepository userRepository;
// //     private final PasswordEncoder passwordEncoder;
// //     private final JwtService jwtService;
// //     private final AuthenticationManager authenticationManager;

// //     public AuthenticationResponse register(RegisterRequest request) {
// //         var user = Register.builder()
// //                 .name(request.getName())
// //                 .email(request.getEmail())
// //                 .password(passwordEncoder.encode(request.getPassword())) 
// //                 // .company(request.getCompany()) // Uncomment and adjust if 'company' is a field
// //                 .role(Role.USER)
// //                 .build();
// //         userRepository.save(user);
// //         var jwtToken = jwtService.generateToken(user);
// //         return AuthenticationResponse.builder()
// //                 .token(jwtToken)
// //                 .build();
// //     }

// //     public AuthenticationResponse authenticate(AuthenticationRequest request) {
// //         authenticationManager.authenticate(
// //                 new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
// //         var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
// //         var jwtToken = jwtService.generateToken(user);
// //         return AuthenticationResponse.builder()
// //                 .token(jwtToken)
// //                 .build();
// //     }
// // }

// package com.example.appdev.service;

// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import com.example.appdev.dto.request.RegisterRequest;
// import com.example.appdev.dto.response.AuthenticationResponse;
// import com.example.appdev.modal.Register;
// import com.example.appdev.modal.Role;
// import com.example.appdev.repository.UserRepository;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class AuthenticationService {

//     private final UserRepository userRepository;
//     private final PasswordEncoder passwordEncoder;
//     private final JwtService jwtService;
//     private final AuthenticationManager authenticationManager;

//     public AuthenticationResponse register(RegisterRequest request) {
//         var user = Register.builder()
//                 .name(request.getName())
//                 .email(request.getEmail())
//                 .password(passwordEncoder.encode(request.getPassword()))
//                 .company(request.getCompany()) // Include company field
//                 .phoneNumber(request.getPhoneNumber()) // Include phoneNumber field
//                 .selectedRole(request.getSelectedRole())
//                 .role(Role.USER)
//                 .build();
//         userRepository.save(user);
//         var jwtToken = jwtService.generateToken(user);
//         return AuthenticationResponse.builder()
//                 .token(jwtToken)
//                 .build();
//     }

//     public AuthenticationResponse authenticate(RegisterRequest request) {
//         authenticationManager.authenticate(
//                 new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
//         var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
//         var jwtToken = jwtService.generateToken(user);
//         return AuthenticationResponse.builder()
//                 .token(jwtToken)
//                 .build();
//     }
// }


package com.example.appdev.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.appdev.dto.request.RegisterRequest;
import com.example.appdev.dto.response.AuthenticationResponse;
import com.example.appdev.modal.Register;
import com.example.appdev.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = Register.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .company(request.getCompany())
                .phoneNumber(request.getPhoneNumber())
                .selectedRole(request.getSelectedRole())
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(RegisterRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
