import React, {useState} from 'react'
import { Form } from './Styles_Login';
import { validarEmail, validarSenha } from '../../Utils/Validadores';
import "../../Styles/Styles.css"
import Image from '../../Components/Images/logooriginalpokemon.png'
import Input from '../../Components/Input/Input';
import Btn from '../../Components/Button/Btn_Login'
//{} serve para mostra que você está importando algo de dentro do arquivo

const Login = () => {
  const [loanding, setLoanding] = useState()
  const [form, setForm] = useState([])
  //form é a variavel

  const handleSubmit = async (event) => {

    const handleSubmit = async (event) => {
    try {
      setLoanding (true)
      //o usuário aperto e ta carregando
      alert('Login')
      setLoanding(false)
      //quando carrega habilita o botão de novo
      }
    catch(err){
      alert('Algo deu errado :c' + err)
    }
   }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }
  // capta o nome e o valor, evento do input

   const validadorInput = () => {
     return validarEmail(form.email) && validarSenha(form.password)
   }

   console.log('Form está válido?', validadorInput())

  return (
    <section className='Main-Container'>
      <Form>
      <img src={Image} width={250}/>
       <h1> Login </h1>
       <Input
       name='email'
       placeholder='Digite o seu e-mail'
       anChage={handleChange}
       type='email'
      //  componente personalizado
       />
        <Input
        name='password'
        placeholder='Digite a sua senha'
        anChage={handleChange}
        type='password'
        />
        <Btn
        type='submit'
        text='Entrar'
        onClick={handleSubmit}
        disabled={loanding === true || !validadorInput()}
        />
       <div >
        <p>Não possui uma conta?</p>
       </div>
      </Form>
    </section>
   )
}

export default Login;