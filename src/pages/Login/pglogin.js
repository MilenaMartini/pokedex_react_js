import React from 'react'
import "../../styles/styles.css"
import {  Form } from './styles';
import Input from '../../Components/input/input';
import image from '../../Components/img/logooriginalpokemon.png'
// styles.css é onde mexe na imagem do login

const Login = () => {
  return (
    <section className='Main-Container'>
      <Form>
      <img src={image} width={250}/>

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