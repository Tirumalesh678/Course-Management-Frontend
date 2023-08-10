import axios from "axios";
import React from "react";
import { Card,CardBody,CardSubtitle,CardText,Button,Container } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course = ({course,update}) =>
{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>
            {
                
                toast.success('Deleted Successfully');
                update(id);
            },
            (error)=>{
                toast.error("went wrong in deleting");
            }
        )
    }

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold"> {course.title}</CardSubtitle>
                <CardText>{course.description} </CardText>
            </CardBody>
            <Container className="text-center">
                <Button color="danger">Update</Button>
                <Button color="warning" onClick={()=>{deleteCourse(course.id);}}>Delete</Button>
            </Container>
        </Card>
    );
}
export default Course;