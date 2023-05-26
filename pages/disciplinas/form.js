import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit } = useForm()

  function salvar(dados) {

    axios.post('/api/disciplinas', dados)
  

    console.log(dados);

  }

  return (
    <Pagina titulo="Disciplinas">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type='text' {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso: </Form.Label>
          <Form.Control type='text' {...register("curso")} />
        </Form.Group>


        <div className='text-center'>
          <Button variant="primary" onClick={handleSubmit(salvar)}>
            <BsCheckLg className='me-2' />
            Salvar
          </Button>
          <Link className='ms-2 btn btn-danger' href='/cursos'>
            <AiOutlineArrowLeft className='me-2' />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>


  )
}

export default form