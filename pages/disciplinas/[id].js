import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {

    if(query.id){
    const id = query.id
    const cursos = JSON.parse(window.localStorage.getItem('cursos'))
    const curso = cursos[id]

    for(let atributo in curso){
      setValue(atributo, curso[atributo])
    }
  }

  }, [query.id])

  console.log(query.id);

  function salvar(dados) {

    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.splice(query.id, 1, dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }

  return (
    <Pagina titulo="Cursos">
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
          <Button variant="dark" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/cursos">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default form