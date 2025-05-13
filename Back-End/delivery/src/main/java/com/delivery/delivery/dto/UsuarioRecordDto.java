package com.delivery.delivery.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record UsuarioRecordDto(
        @NotBlank String nmUsuario,
        @NotBlank String dsEmail,
        @NotBlank String dsSenha,
        @NotNull Integer flTipoUsuario,
        @NotBlank String nuCnpjCpf,
        @NotNull LocalDate dtNascimento,
        @NotBlank String dsTelefone,
        @NotBlank String dsNumeroCnh,
        @NotBlank String dsPlacaVeiculo
) {
}
