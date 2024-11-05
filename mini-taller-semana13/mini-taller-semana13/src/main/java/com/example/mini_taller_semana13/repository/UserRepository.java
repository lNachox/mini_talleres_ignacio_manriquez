package com.example.mini_taller_semana13.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mini_taller_semana13.entity.Role;
import com.example.mini_taller_semana13.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    // Encontrar usuario por nombre
    List<User> findByName(String name);

    // Encontrar usuario por correo electrónico
    User findByEmail(String email);

    // Encontrar todos los usuarios por rol
    List<User> findByRole(Role role);
    
    // Contar cuántos usuarios tienen un rol específico
    long countByRole(Role role);

}
