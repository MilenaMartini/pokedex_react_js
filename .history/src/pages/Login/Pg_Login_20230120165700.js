import React, {useState, useEffect} from 'react'
import { Form } from './Styles_Login'
import Poke from '../Pg_Pokedex/Pg_Poke'
import "../../Styles/Styles.css"
import Image from '../../Components/Images/logooriginalpokemon.png'
import Input from '../../Components/Input/Input'
import Btn from '../../Components/Button/Btn_Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { redirect } from 'react-router-dom'
//{} serve para mostra que você está importando algo de dentro do arquivo
import * as yup from 'yup';




const Login = () => {


   const[user, setUser] = useState({
    email: '',
    password: ''
   });

   let schema = yup.object().shape({
    email: yup.string('precisa ser string').email('Email').required('É necessário'),
    password: yup.string('string').required('É necessário'),
   });

  const [loading, setLoading] = useState()

    const handleSubmit = async (event) => {
    try {
      window.open('pokedex', '_self')
      }
    catch(err){
      alert('Algo deu errado :c' + err)
    }
   }

<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/pokedex' element={<Poke />} />
  </Routes>
  </BrowserRouter>

  const validateData = () => {
    try{
      schema.validate(user);
      console.log(user)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <section className='Main-Container'>
      <Form>
      <img src={Image} width={250}/>
       <h1> Login </h1>
       <Input
       name='email'
       placeholder='Digite o seu e-mail'
       type='email'
       value='email'
      //  componente personalizado
       />
        <Input
        name='password'
        placeholder='Digite a sua senha'
        type='password'
        value='password'
        />
        <Btn
        type='submit'
        text='Entrar'
        onClick={validateData}
        />
       <div >
        <p>Não possui uma conta?</p>
       </div>
      </Form>
    </section>
   )
}


export default Login;