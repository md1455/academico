import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
<<<<<<< HEAD
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

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duração: </Form.Label>
          <Form.Control type='text' {...register("duracao")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade: </Form.Label>
          <Form.Control type='text' {...register("modalidade")} />
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



=======
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const id = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm();

  useEffect(()=>{
    if(query.id) { 
    const cursos = JSON.parse(window.localStorage.getItem('cursos'))
    const curso = cursos[query.id]
    for(let campo in curso) {
        setValue(campo, curso[campo])
    }
}
  },[query.id])

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.unshift(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push("/cursos")
  }
  function alterar(id,dados){
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.splice(id, 0, dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push("/cursos")
  }

  return (
    <Pagina titulo="Curso">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do curso" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duração</Form.Label>
          <Form.Control type="text" placeholder="Digite a duração" {...register('duracao')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade</Form.Label>
          <Form.Control type="text" placeholder="Digite a modalidade" {...register('modalidade')}  />
        </Form.Group>

        <div className='text-center'>
        <Button variant="success" className='me-2' onClick={() =>{
            alterar(query.id)
        }}>
          <BsSendCheck className='me-2'/>
          Salvar
        </Button>
        <Link href={'/cursos'}>
        <Button variant="danger">
          <BsArrowBarLeft className='me-2'/> 
          Voltar
        </Button>
        </Link>
        </div>
      </Form>
>>>>>>> adc41aa34ebc1d9240669c7d13a5d6f8cff08cd5
    </Pagina>
  )
}

<<<<<<< HEAD
export default form
=======
export default id
>>>>>>> adc41aa34ebc1d9240669c7d13a5d6f8cff08cd5
