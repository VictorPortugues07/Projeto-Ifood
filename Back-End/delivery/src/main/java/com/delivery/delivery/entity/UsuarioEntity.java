package com.delivery.delivery.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="TBUSUARIO")
@Entity
public class UsuarioEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String nmUsuario;

    @Column(nullable = false, unique = true)
    private String dsEmail;

    @Column(nullable = false)
    private String dsSenha;

    @Column(nullable = false)
    private Integer flTipoUsuario;

    @Column(nullable = false)
    private String nuCpfCnpj;

    private LocalDate dtNascimento;

    private String dsTelefone;

    private String dsNumeroCnh;

    private String dsPlacaVeiculo;

}
