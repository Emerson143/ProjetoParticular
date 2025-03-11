import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o componente de login', () => {
  render(<App />);
  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});

test('verifica se os campos de usuário e senha estão presentes', () => {
  render(<App />);
  const usernameInput = screen.getByLabelText(/Nome de Usuário/i);
  const passwordInput = screen.getByLabelText(/Senha/i);
  
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('verifica se o botão de entrar está presente', () => {
  render(<App />);
  const submitButton = screen.getByText(/Entrar/i);
  expect(submitButton).toBeInTheDocument();
});
