import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsFillPencilFill  } from 'react-icons/bs'

const index = () => {

  const [disciplina, setCursos] = useState([])

  useEffect(() => {
    setCursos(getAll())

  },[])

  return (
    <Pagina titulo="Disciplinas">

      <Link href='/disciplina/form' className='mb-2 btn btn-primary'>Novo</Link>

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
            <tr key={i}>
              <td>
                <Link href={'/disciplina/' + i}>
                <BsFillPencilFill title="Alterar"  onClick={() => alterar(i)} />
                </Link>
                <BsFillTrash3Fill  title="Excluir" onClick={() => excluir(i)} className='text-danger' />

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