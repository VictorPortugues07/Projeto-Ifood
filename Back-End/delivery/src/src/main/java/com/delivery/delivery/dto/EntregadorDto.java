package com.delivery.delivery.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class  EntregadorDto extends UsuarioBaseDto {

    @NotBlank
    private String dsNumeroCnh;

    @NotBlank
    private String dsPlacaVeiculo;

}
