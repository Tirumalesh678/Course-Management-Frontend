import React, { useEffect, useState } from 'react'
import Course from './Course';
import { toast } from 'react-toastify';
import axios from 'axios';
import base_url from '../api/bootapi';

const Allcourses = () => {
    useEffect(()=>
    {
        document.title="All Courses";
        getAllCoursesFromServer();
    },[]);

    const getAllCoursesFromServer=()=>
    {
        axios.get(`${base_url}/courses`).then(
            (response)=>
            {
                console.log(response);
                toast.success("courses has been loaded");
                setCourses(response.data);
            },
            (error)=>
            {
                console.log(error);
                toast.error("somethig went wrong");
            }
        )
    }
    
    const[courses,setCourses]=useState([]);


    const updateCourse=(id)=>
    {
        setCourses(courses.filter((c)=>c.id!=id))
    }

  return (
    <div>
      {
        courses.length>0?courses.map((item)=><Course key={item.id}  course={item} update={updateCourse}/>):"No Courses"
      }
    </div>
  )
}

export default Allcourses
