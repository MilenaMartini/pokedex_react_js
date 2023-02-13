import React, {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/Input/index'
// import { validarEmail, validarSenha, validarTelefone, validarNome, validarConfirmarSenha } from '../../Utils/validadores'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import CatchingPk from '@mui/icons-material/CatchingPokemon';

const Novo_Pokemon = new UserService()

      const Cadastro = () => {
        const [loading, setLoading] = useState()
        const [form, setForm] = useState([])
        const navigate = useNavigate()

        // const handleSubmit = async (event) => {
        //   event.preventDefault();
        //   try {
        //     setLoading(true)
        //     const { data } = await Novo_Pokemon.cadastrar({
        //       nome: form.nome,
        //       telefone: form.telefone,
        //       email: form.email,
        //       password: form.password,
        //     })
        //     if (data) {
        //       const responseLogin = await Novo_Pokemon.login({
        //         email: form.email,
        //         password: form.password
        //       })
        //       if (responseLogin === true) {
        //         alert('usuário Cadastrado com Sucesso')
        //         navigate('/home')
        //       }
        //   }
        //     setLoading(false)
        //   }
        //   catch (err) {
        //     alert('Algo deu errado com o Cadastro' + err)
        //   }
        // }

        const handleChange = (event) => {
          setForm({...form, [event.target.name]: event.target.value})
        }

        // const validadorInput = () => {
        //   return validarEmail(form.email)
        //   && validarSenha(form.password)
        //   && validarTelefone(form.telefone)
        //   && validarConfirmarSenha(form.password, form.confirmarPassword)
        //   && validarNome(form.nome)
        // }

  return(
    <Container>
      <Form>

        <h1><CatchingPk/> Crie Seu Pokemon <CatchingPk/> </h1>
        <h1>Faça o seu Cadastro 👋</h1>
        <Input
          name='nome'
          placeholder='Digite o seu nome'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='telefone'
          placeholder='Digite o seu telefone'
          onChange={handleChange}
          type='number'
        />
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Input
          name='confirmarPassword'
          placeholder='Confirme a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Button size="large"  variant="contained" color="success" >
       <CatchingPk /> Criar</Button>
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="*">Login</NavLink>
        </SubContainerSign>
       </Form>
    </Container>
)}

export default Novo_Pokemon