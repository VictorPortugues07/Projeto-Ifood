package com.delivery.delivery.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class UsuarioBaseDto {

    @NotBlank
    private String nmUsuario;

    @NotBlank
    private String dsEmail;

    @NotBlank
    private String dsSenha;

    @NotNull
    private Integer flTipoUsuario;

    @NotBlank
    private String nuCnpjCpf;

    @NotNull
    private LocalDate dtNascimento;

    @NotBlank
    private String dsTelefone;

}
