package com.delivery.delivery.repository;

import com.delivery.delivery.entity.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Integer> {
    boolean existsByDsEmail(String dsEmail);
}


