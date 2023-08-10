import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const Addcourse = () => {

    const [course,setCourse]=useState({});

    const handleForm=(e)=>
    {
        // console.log("control comes to handleForm");
        // console.log(course);
        postDataToServer(course);
    }

    const postDataToServer=(data)=>
    {
        // console.log("control in posting data");
        axios.post(`${base_url}/courses`,data).then(()=>
        {
            toast.success("courses posted sucessfully")
        },
        (error)=>
        {
            toast.error("error in posting");
        });

        console.log("posting either success or filed");

    }


  return (
    <>
    <h1 className='text-center my-3'>Fill Course Details</h1>
    <Form>
        <FormGroup >
            <label htmlFor="userId">Id of the Course</label><br/>
            <Input type="text" name="userId" id="userId" placeholder='Enter Here'
            onChange={(e)=>{setCourse({...course, id:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label htmlFor="name">Title of the course</label><br/>
            <Input type="text" name="title" id='title' placeholder='Enter title'
            onChange={(e)=>{setCourse({...course, title:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label htmlFor="description">Description Of The Course</label><br/>
            <Input type='textarea' name='description' id='description' placeholder='enter description here'
            style={{height:200}}
            onChange={(e)=>{setCourse({...course, description:e.target.value})}}/>
        </FormGroup>
        <Container className='text-center'>
            <Button   color='success' onClick={handleForm}>Add</Button>
            <Button  type="clear" color='warning ml-2' onClick={(e)=>setCourse({})}>Clear</Button>
        </Container>
    </Form>
    </>
  )
}

export default Addcourse
