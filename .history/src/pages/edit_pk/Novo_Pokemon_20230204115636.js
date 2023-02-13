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
      <Form>

        <h1><CatchingPk/> Crie Seu Pokemon <CatchingPk/> </h1>
        <Input
          name='Nome'
          type='text'
          placeholder='Digite o nome do Pokemon'
         //  componente personalizado
        />
       <Button size="large"  variant="contained" color="success" onClick={pk}>
       <CatchingPk /> Criar</Button>
       </Form>
    </Container>
)}

export default Novo_Pokemon