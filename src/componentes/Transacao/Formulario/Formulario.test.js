import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import Formulario from '.';

describe('Deve renderizar o campo de Input', () => {
  test('No documento', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  test('Com o type Number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('Que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    useEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });
});

describe('Deve chamar um evento de onSubmit', () => {
  test('Ao clicar em realizar transação', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);
    const botao = screen.getByRole('button');

    useEvent.click(botao);
    expect(realizarTransacao).toHaveBeenCalledTimes(1);
  });
});
