import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Container, Titulo, Formulario, Campo, Label, Input, Erro, Botao, TextoLink, LinkStyled } from './login.styles';

interface IFormInput {
  cpf: string;
  senha: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data); // chama rota
  };

  const handleLoginClick = () => {
    window.location.href = '/cadastro'; // tela de login
  };

  return (
    <Container>
      <Titulo>Login</Titulo>
      <Formulario onSubmit={handleSubmit(onSubmit)}>
        <Campo>
          <Label htmlFor="cpf">CPF:</Label>
          <Input type="text" id="cpf" {...register('cpf', { required: 'CPF é obrigatório', pattern: { value: /^\d{3}.\d{3}.\d{3}-\d{2}$/, message: 'CPF inválido' }, })} />
          {errors.cpf && <Erro>{errors.cpf.message}</Erro>}
        </Campo>

        <Campo>
          <Label htmlFor="senha">Senha:</Label>
          <Input
            type="password"
            id="senha"
            {...register('senha', {
              required: 'Senha é obrigatória',
              minLength: { value: 6, message: 'A senha deve ter pelo menos 6 caracteres' },
            })}
          />
          {errors.senha && <Erro>{errors.senha.message}</Erro>}
        </Campo>

        <Botao type="submit">Entrar</Botao>
        <TextoLink>
          Não possui uma conta? <LinkStyled onClick={handleLoginClick}>Cadastre-se</LinkStyled>
        </TextoLink>
      </Formulario>
    </Container>
  );
};

export default Login;