package com.example.mini_taller_semana13.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.mini_taller_semana13.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    // Encontrar rol por nombre
    Optional<Role> findByName(String name);
    
}
