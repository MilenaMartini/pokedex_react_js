import React from 'react'
import "../../styles/styles.css"
import {  Form } from './styles';
import Input from '../../Components/input/input';
// styles.css é onde mexe na imagem do login

const Login = () => {
  return (
    <section className='Main-Container'>
      <Form>
        <br />
       <h1> Login </h1>
       <Input/>
        <Input/>
       <div >
        <p>Não possui uma conta?</p>
        <a>Cadastrar</a>
       </div>
      </Form>
    </section>
   )
}

export default Login;