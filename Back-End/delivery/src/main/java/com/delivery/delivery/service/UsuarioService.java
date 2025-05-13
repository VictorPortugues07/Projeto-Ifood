package com.delivery.delivery.service;

import com.delivery.delivery.entity.UsuarioEntity;
import com.delivery.delivery.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public List<UsuarioEntity> listarTodos() {
        return repository.findAll();
    }

    public Optional<UsuarioEntity> buscarPorId(Integer id) {
        return repository.findById(id);
    }

    public UsuarioEntity salvar(UsuarioEntity usuario) {
        return repository.save(usuario);
    }

}

