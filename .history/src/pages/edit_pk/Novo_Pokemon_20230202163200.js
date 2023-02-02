import styles from '../edit_pk/Pk_modulo.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function Novo_Pokemon() {
    const {id} = useParams()

    const pk = async (event) => {
      try {
        window.open('pokedex', '_self')
        }
      catch(err){
        alert('Algo deu errado :c' + err)
      }
     }

    const [newPk, setNewPk] = useState([])

    useEffect(() => {
      fetch('http://localhost:5000/Novo_Pokemon/${id}', {
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
    <Button size="small" color="inherit" onClick={pk}> <AddIcon /> </Button>
)}

export default Novo_Pokemon