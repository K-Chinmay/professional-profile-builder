import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const Navigate =useNavigate();
    useEffect(() =>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            Navigate('/student/login');
            if(res.status !==200)
            {

                const error = new Error(res.error);
                throw error;
            }

        }).catch((err)=>{
            console.log(err);
        });
    });
  

  return (
    <div>Logout Page</div>
  )
}

export default Logout;