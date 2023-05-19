import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'

const index = () => {

  const [cursos, setCursos] = useState([])

useEffect(() =>{
 setCursos(getAll())
}, [])

function getAll(){
  return JSON.parse(window.localStorage.getItem('cursos')) || []
}

function excluir(id){
const itens = getAll()
itens.splice(id, 1)
window.localStorage.setItem('cursos', JSON.stringify(itens))
setCursos(itens)
}

  return (
  <Pagina titulo="Cursos">

    <Link href='/cursos/form' className='mb-2 btn btn-primary'>Novo</Link>
    
    <Table striped bordered hover size="sm">
      <thead>  
         <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Duração</th>
          <th>Modalidade</th>
        </tr>
      </thead>
      <tbody>
      {cursos.map((item, i)=> (
        <tr key={i}>
          <td>
            <AiOutlineDelete onClick={()=>excluir(i)} className='text-success'/>
          </td>
          <td>{item.nome}</td>
          <td>{item.duracao}</td>
          <td>{item.modalidade}</td>
        </tr>
))}        
      </tbody>
    </Table>

 </Pagina>
  )
}

export default index