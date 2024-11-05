package com.example.mini_taller_semana13.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.mini_taller_semana13.entity.AirQualityData;
import com.example.mini_taller_semana13.entity.User;

public interface AirQualityDataRepository extends JpaRepository<AirQualityData, Long> {
    // Encontrar todos los datos de calidad del aire por ubicación
    List<AirQualityData> findByLocation(String location);

    // Encontrar todos los datos de calidad del aire con un nivel específico de PM2.5 o superior
    List<AirQualityData> findByPm25GreaterThanEqual(int pm25);

    // Encontrar todos los datos de calidad del aire por usuario
    List<AirQualityData> findByUser(User user);

    // Encontrar todos los datos entre un rango de fechas
    List<AirQualityData> findByTimestampBetween(LocalDateTime start, LocalDateTime end);
    
}
