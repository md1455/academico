import Pagina from '@/components/Pagina'
import axios from 'axios'
import { get } from 'firebase/database'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsFillPencilFill } from 'react-icons/bs'

const index = () => {

  const [disciplina, setDisciplinas] = useState([])

  useEffect(() => {
    axios.get('/api/disciplinas').then(resultado => {
      setDisciplinas(resultado.data);
    })

  }, [])

  function getAll() {
    axios.get('/api/disciplinas').then(resultado => {
      setDisciplinas(resultado.data);
    })
  }
  function excluir(id) {
    axios.delete('/api/disciplinas/' + id)
    getAll()
  }



  return (
    <Pagina titulo="Disciplinas">

      <Link href='/disciplinas/form' className='mb-2 btn btn-primary'>Novo</Link>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {disciplina.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={'/disciplina/' + item.id}>
                  <BsFillPencilFill title="Alterar" onClick={() => alterar(item.id)} />
                </Link>
                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />

              </td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>


            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}

export default index