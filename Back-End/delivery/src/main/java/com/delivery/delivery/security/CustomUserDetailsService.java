package com.delivery.delivery.security;

import com.delivery.delivery.entity.UsuarioEntity;
import com.delivery.delivery.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String dsEmail) throws UsernameNotFoundException {
        UsuarioEntity usuario = usuarioRepository.
                findByDsEmail(dsEmail).
                orElseThrow(() ->
                        new UsernameNotFoundException("Usuário não encontrado: " + dsEmail));
        return new CustomUserDetails(usuario);
    }
}
