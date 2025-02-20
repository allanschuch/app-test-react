import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Counter from "./Counter";
import Form from "./Name";

test('Rederiza texto de boas vindas', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bem vindo!/i);
  expect(linkElement).toBeInTheDocument();
});

test("Incrementa o contador ao clicar", () => {
  render(<Counter />);
  const button0 = screen.getByRole("button", { name: /incrementar/i });
  fireEvent.click(button0);
  //const button = screen.getByText("Incrementar");
  //fireEvent.click(button);
  expect(screen.getByText("Contagem: 1")).toBeInTheDocument();
});

test("deve mostrar o nome após digitar no campo", () => {
  render(<Form />);

  // Busca o input pelo placeholder
  const input = screen.getByPlaceholderText("Digite seu nome");

  // Simula a digitação no input
  fireEvent.change(input, { target: { value: "Engenharia de Software 2" } });

  // Verifica se o nome foi exibido na tela
  expect(screen.getByText("Olá, Engenharia de Software 2!")).toBeInTheDocument();
});

//erro forçado
test('Rederiza texto de boa tarde', () => {
  render(<App />);
  const linkElement = screen.getByText(/BOA TARDE!/i);
  expect(linkElement).toBeInTheDocument();
});