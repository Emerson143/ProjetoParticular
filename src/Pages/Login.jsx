import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    if (!username || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const button = e.target.querySelector('button');
    button.disabled = true;
    button.textContent = 'Entrando...';

    setTimeout(() => {
      if (username === 'usuario' && password === '123') {
        setSuccess(true);
        setError('');
        button.textContent = 'Entrar';

        setTimeout(() => {
          navigate("/home");
        }, 1000)


      } else {
        setError('Usuário ou senha incorretos');
        setSuccess(false);
              
      button.disabled = false;
      button.textContent = 'Entrar';
    }}, 1000);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-header">
          <i className="fas fa-user-circle"></i>
          <h2>Bem-vindo</h2>
        </div>
        
        <div className="form-group">
          <label htmlFor="username">Nome de Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite seu usuário"
            autoComplete="username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            autoComplete="current-password"
          />
        </div>

        <div className="form-options">
          <label className="remember-me">
            <input type="checkbox" /> Lembrar-me
          </label>
          <a href="#" className="forgot-password">Esqueceu a senha?</a>
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Login realizado com sucesso!</div>}

        <button type="submit">Entrar</button>
        
        <div className="register-link">
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;