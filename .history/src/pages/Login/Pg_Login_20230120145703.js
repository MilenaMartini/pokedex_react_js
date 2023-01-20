import React, {useState, useEffect} from 'react'
import { Form } from './Styles_Login'
import Poke from '../Pg_Pokedex/Pg_Poke'
import "../../Styles/Styles.css"
import Image from '../../Components/Images/logooriginalpokemon.png'
import Input from '../../Components/Input/Input'
import Btn from '../../Components/Button/Btn_Login'
import 'core-js/es6/promise';
import 'core-js/es6/set';
import 'core-js/es6/map';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { redirect } from 'react-router-dom'
//{} serve para mostra que você está importando algo de dentro do arquivo

import * as yup from 'yup';


const Login = () => {
  const [loading, setLoading] = useState()


    const handleSubmit = async (event) => {
    try {
      window.open('pokedex', '_self')
      }
    catch(err){
      alert('Algo deu errado :c' + err)
    }
   }

   let schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.number().password(),
  });

  schema
    .isValid({
      email: 'xxxxxx',
      password: '123',
    })
    

<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/pokedex' element={<Poke />} />
  </Routes>
  </BrowserRouter>
  return (
    <section className='Main-Container'>
      <Form>
      <img src={Image} width={250}/>
       <h1> Login </h1>
       <Input
       name='email'
       placeholder='Digite o seu e-mail'
       type='email'
      //  componente personalizado
       />
        <Input
        name='password'
        placeholder='Digite a sua senha'
        type='password'
        />
        <Btn
        type='submit'
        text='Entrar'
        onClick={handleSubmit}
        />
       <div >
        <p>Não possui uma conta?</p>
       </div>
      </Form>
    </section>
   )
}


export default Login;