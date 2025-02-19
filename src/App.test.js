import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Counter from "./Counter";

test('Rederiza texto de boas vindas', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bem vindo!/i);
  expect(linkElement).toBeInTheDocument();
});

test("Incrementa o contador ao clicar", () => {
  render(<Counter />);
  const button = screen.getByText("Incrementar");
  fireEvent.click(button);
  expect(screen.getByText("Contagem: 1")).toBeInTheDocument();
});
