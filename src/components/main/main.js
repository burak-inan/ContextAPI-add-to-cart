import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <Container className='mt-5 text-center'>
      <Link to={"/shop"}><Button className='m-2'>Go To Shop</Button></Link>
      <Link to={"/cart"}><Button className='m-2'>Go To Cart</Button></Link>
    </Container>
  )
}

export default Main