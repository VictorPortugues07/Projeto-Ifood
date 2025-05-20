package com.delivery.delivery.service;

import com.delivery.delivery.entity.ClienteEntity;
import com.delivery.delivery.repository.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final ClienteRepository clienteRepository;
    private final PasswordEncoder passwordEncoder;

    public ClienteEntity criarCliente(ClienteEntity cliente) {
        cliente.setDsSenha(passwordEncoder.encode(cliente.getDsSenha()));
        cliente.setFlTipoUsuario(cliente.getFlTipoUsuario() != null ? cliente.getFlTipoUsuario() : com.delivery.delivery.entity.enums.TipoUsuario.CLIENTE);
        return clienteRepository.save(cliente);
    }

    public List<ClienteEntity> listarTodos() {
        return clienteRepository.findAll();
    }

    public Optional<ClienteEntity> buscarPorId(Integer id) {
        return clienteRepository.findById(id);
    }


    public ClienteEntity atualizarCliente(ClienteEntity cliente) {
        // Se a senha estiver presente, criptografa
        if (cliente.getDsSenha() != null) {
            cliente.setDsSenha(passwordEncoder.encode(cliente.getDsSenha()));
        }
        return clienteRepository.save(cliente);
    }
}
