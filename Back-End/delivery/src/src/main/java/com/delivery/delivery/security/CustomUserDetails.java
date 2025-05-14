package com.delivery.delivery.security;

import com.delivery.delivery.entity.UsuarioEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
public class CustomUserDetails implements UserDetails {

    private final UsuarioEntity usuario;

    public CustomUserDetails(UsuarioEntity usuario) {
        this.usuario = usuario;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String role = switch (usuario.getFlTipoUsuario()) {
            case CLIENTE -> "ROLE_CLIENTE";
            case ENTREGADOR -> "ROLE_ENTREGADOR";
            case FORNECEDOR -> "ROLE_FORNECEDOR";
            default -> "ROLE_USER";
        };

        return List.of(new SimpleGrantedAuthority(role));
    }

    @Override
    public String getPassword() {
        return usuario.getDsSenha();
    }

    @Override
    public String getUsername() {
        return usuario.getNmUsuario();
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
