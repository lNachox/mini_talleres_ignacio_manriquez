package com.example.mini_taller_semana13.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mini_taller_semana13.entity.Role;
import com.example.mini_taller_semana13.entity.User;
import com.example.mini_taller_semana13.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<User> getUsersByRole(Role role) {
        return userRepository.findByRole(role);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }
    
}
