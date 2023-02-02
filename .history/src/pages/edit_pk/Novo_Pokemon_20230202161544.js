import styles from '../edit_pk/Pk_modulo.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Novo_Pokemon() {
    const {id} = useParams()

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
    <p>{newPk.name}</p>
)}

export default Novo_Pokemon