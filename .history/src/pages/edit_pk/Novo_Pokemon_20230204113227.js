import {Container,Form} from '../edit_pk/Novo_PkStyles'
import Input from '../../Components/Input/Input'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import CatchingPk from '@mui/icons-material/CatchingPokemon';
function Novo_Pokemon() {
    const {id} = useParams()

     const pk = async (event) => {
      try {
         window.close('pokedex/new', '_self')
         }
       catch(err){
         alert('Algo deu errado :c' + err)
       }
      }

    const [newPk, setNewPk] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/pokedex/new', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(resp => resp.json())
      .then((data) => {
        setNewPk(data)
      })
      .catch(err => console.log)
    }, [id])

  return(
    <Container>

        <h1><CatchingPk/> Crie Seu Pokemon <CatchingPk/> </h1>
        <Form>
        <Input
          name='Nome'
         placeholder='Digite o nome do Pokemon'
         //  componente personalizado
        />
        </Form>

       <Button size="large"  variant="contained" color="success" onClick={pk}>
       <CatchingPk /> Criar</Button>
    </Container>
)}

export default Novo_Pokemon