package com.delivery.delivery.security;

import com.delivery.delivery.entity.enums.TipoUsuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@AllArgsConstructor
@Getter
public class AppDetalhesUsuario implements UserDetails {

    private final Integer id;
    private final String email;
    private final String senha;
    private final TipoUsuario tipoUsuario;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Define o papel do usuário com base no tipo (ex: ROLE_CLIENTE)
        return Collections.singleton(() -> "ROLE_" + tipoUsuario.name());
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

