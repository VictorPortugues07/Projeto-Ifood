package com.delivery.delivery.controller;

import com.delivery.delivery.dto.auth.AuthRequest;
import com.delivery.delivery.dto.auth.AuthResponse;
import com.delivery.delivery.security.AppDetalhesUsuarioService;
import com.delivery.delivery.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtUtil jwtUtil;
    private final AppDetalhesUsuarioService appDetalhesUsuarioService;

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        UsernamePasswordAuthenticationToken authInputToken =
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getSenha());

        authManager.authenticate(authInputToken);

        UserDetails user = appDetalhesUsuarioService.loadUserByUsername(request.getEmail());
        String token = jwtUtil.generateToken(user.getUsername());

        return new AuthResponse(token);
    }
}
