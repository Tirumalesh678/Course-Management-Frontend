import './App.css';
import { ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Help from './components/Help';

function App() {
  // const btnHandle=()=>
  // {
  //   toast("This is notification",{
  //     position:"top-center"
  //   });
  // }
  return (
    <div > 
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
      <Container>
        <Row>
          <Col md={4}>
            <Menus/> 
          </Col>
          <Col md={8}>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add-course' element={<Addcourse/>}/>
            <Route path='/all-course' element={<Allcourses/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/help' element={<Help/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
      </BrowserRouter> 
    </div >
  );
}

export default App;
