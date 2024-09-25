import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { 
  Container, 
  Titulo, 
  Formulario, 
  Campo, 
  Label, 
  Input, 
  Erro, 
  Botao,
  TextoLink,
  LinkStyled,
} from './cadastro.styles';


interface IFormInput {
  nomeCompleto: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
}

const Cadastro: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data); // chama rota
  };

  const handleLoginClick = () => {
    window.location.href = '/login'; // implemtar logica pra ir pra tela de login
  };

  return (
    <Container>
      <Titulo>Cadastro</Titulo>
      <Formulario onSubmit={handleSubmit(onSubmit)}>
        <Campo>
          <Label htmlFor="nomeCompleto">Nome Completo:</Label>
          <Input
            type="text"
            id="nomeCompleto"
            {...register('nomeCompleto', { required: 'Nome completo é obrigatório' })}
          />
          {errors.nomeCompleto && <Erro>{errors.nomeCompleto.message}</Erro>}
        </Campo>
        <Campo>
          <Label htmlFor="cpf">CPF:</Label>
          <Input
            type="text"
            id="cpf"
            {...register('cpf', {
              required: 'CPF é obrigatório',
              pattern: { value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, message: 'CPF inválido' },
            })}
          />
          {errors.cpf && <Erro>{errors.cpf.message}</Erro>}
        </Campo>

        <Campo>
          <Label htmlFor="telefone">Telefone:</Label>
          <Input
            type="tel"
            id="telefone"
            {...register('telefone', {
              required: 'Telefone é obrigatório',
            })}
          />
          {errors.telefone && <Erro>{errors.telefone.message}</Erro>}
        </Campo>

        <Campo>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email inválido' },
            })}
          />
          {errors.email && <Erro>{errors.email.message}</Erro>}
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

        <Botao type="submit">Cadastrar-se</Botao>
        <TextoLink>
          Já possui uma conta? <LinkStyled onClick={handleLoginClick}>Faça login</LinkStyled>
        </TextoLink>
      </Formulario>
    </Container>
  );
};

export default Cadastro;