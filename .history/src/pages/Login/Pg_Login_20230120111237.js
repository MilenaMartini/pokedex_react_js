import React, {useState, useEffect} from 'react'
import { Form } from './Styles_Login'
import Poke from '../Pg_Pokedex/Pg_Poke'
import "../../Styles/Styles.css"
import Image from '../../Components/Images/logooriginalpokemon.png'
import Input from '../../Components/Input/Input'
import Btn from '../../Components/Button/Btn_Login'
// import UserService from '../../Service/UserService'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//{} serve para mostra que você está importando algo de dentro do arquivo


const Login = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  //form é a variavel


    const handleSubmit = async (event) => {
    try {
      setLoading (true)
      //carregando
      alert ('login')
      // setLoading(false)
      //quando carrega habilita o botão de novo
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