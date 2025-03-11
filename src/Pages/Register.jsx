import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validações
    if (!formData.name || !formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    // Simulando envio do formulário
    const button = e.target.querySelector('button');
    button.disabled = true;
    button.textContent = 'Cadastrando...';

    setTimeout(() => {
      setSuccess(true);
      button.disabled = false;
      button.textContent = 'Cadastrar';
      
      // Limpar formulário após sucesso
      setFormData({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      });
    }, 1500);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-header">
          <i className="fas fa-user-plus"></i>
          <h2>Criar Conta</h2>
        </div>

        <div className="form-group">
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Nome de Usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Escolha um nome de usuário"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirme sua senha"
          />
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Cadastro realizado com sucesso!</div>}

        <button type="submit">Cadastrar</button>
        
        <div className="login-link">
          Já tem uma conta? <Link to="/">Fazer login</Link>
          
        </div>
      </form>
    </div>
  );
}

export default Register; 