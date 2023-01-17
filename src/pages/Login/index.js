import React from 'react'
import { Container, Form } from './styles';
import Input from '../../Components/input/index';

const Login = () => {
  return (
    <Container>
      <Form>
       <h1>⭐ Faça o seu Login ⭐</h1>
       <input/>
        <input/>
       <div>
        <p>Não possui uma conta?</p>
        <a>Cadastrar</a>
       </div>
      </Form>
    </Container>
   )
}

export default Login;