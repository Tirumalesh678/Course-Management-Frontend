import React, { useEffect } from 'react';
import { Container,Button } from 'reactstrap';


const Home = () => {
  useEffect(()=>
  {
    document.title="Home";
  },[]);
  return (
    <div className='text-center'>
        
            <h1>
                Course Management Application
            </h1>
            <p> Dummy frontend application</p>
            <Container>
              <Button color='primary'>
                Go to Courses Page
              </Button>
            </Container>
        
      
    </div>
  )
}

export default Home
