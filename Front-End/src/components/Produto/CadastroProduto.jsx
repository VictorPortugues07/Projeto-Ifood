import React, { useState } from 'react';
import './CadastroProduto.css'; 

const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(product);
    alert('Produto cadastrado com sucesso!');
    setProduct({ name: '', description: '', price: '', quantity: '', category: '' });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Cadastro de Produto</h2>

      <label>Nome:</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        required
      />

      <label>Descrição:</label>
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        required
      />

      <label>Preço:</label>
      <input
        type="number"
        name="price"
        step="0.01"
        value={product.price}
        onChange={handleChange}
        required
      />

      <label>Quantidade:</label>
      <input
        type="number"
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
        required
      />

      <label>Categoria:</label>
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroProduto;
