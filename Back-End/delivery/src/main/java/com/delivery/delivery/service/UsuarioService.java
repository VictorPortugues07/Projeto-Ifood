package com.delivery.delivery.service;

import com.delivery.delivery.dto.ClienteDto;
import com.delivery.delivery.dto.EntregadorDto;
import com.delivery.delivery.dto.FornecedorDto;
import com.delivery.delivery.dto.UsuarioBaseDto;
import com.delivery.delivery.entity.UsuarioEntity;
import com.delivery.delivery.entity.enums.TipoUsuario;
import com.delivery.delivery.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void cadastrarCliente(ClienteDto dto) {
        UsuarioEntity user = criarUsuarioBase(dto, TipoUsuario.CLIENTE);
        repository.save(user);
    }

    public void cadastrarEntregador(EntregadorDto dto) {
        UsuarioEntity user = criarUsuarioBase(dto, TipoUsuario.ENTREGADOR);
        user.setDsNumeroCnh(dto.getDsNumeroCnh());
        user.setDsPlacaVeiculo(dto.getDsPlacaVeiculo());
        repository.save(user);
    }

    public void cadastrarFornecedor(FornecedorDto dto) {
        UsuarioEntity user = criarUsuarioBase(dto, TipoUsuario.FORNECEDOR);
        repository.save(user);
    }

    private UsuarioEntity criarUsuarioBase(UsuarioBaseDto dto, TipoUsuario tipo) {
        UsuarioEntity user = new UsuarioEntity();
        user.setNmUsuario(dto.getNmUsuario());
        user.setDsEmail(dto.getDsEmail());
        user.setDsSenha(passwordEncoder.encode(dto.getDsSenha()));
        user.setNuCpfCnpj(dto.getNuCnpjCpf());
        user.setDtNascimento(dto.getDtNascimento());
        user.setDsTelefone(dto.getDsTelefone());
        user.setFlTipoUsuario(tipo);
        return user;
    }


}
