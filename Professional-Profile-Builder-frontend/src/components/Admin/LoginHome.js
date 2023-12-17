import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const LoginHome =() =>{
    const Navigate = useNavigate();
    const [adminData,setAdminData] = useState({name:""});
    const callAdminHomePage = async () => {
      try {
        const res = await fetch("/", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
  
        const data = await res.json();
        setUserData({...userData,name:data.name});
        console.log(data);
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
        Navigate("/student/login");
      }
    };
    useEffect(() => {
        callStudentHomePage();
      }, []);

    return(
        <div>
        <Nav/>
        <div className="h-full inset-y-0 grid grid-cols-2 bg-[#4da8da]">
        
        <div id="header" className="header h-full  py-20  text-center md:pt-28 lg:text-center xl:pt-30 xl:pb-32 bg-[#4da8da] col-span-1">
                <div className="container px-4 sm:px-8 lg:gap-x-8 ">
                    <div className="mb-16 lg:mt-24 xl:mt-20 xl:mr-4 ">
                    <h1 className="text-center font-sans font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[50.8px] mb-4">Hello {userData.name} !!!</h1>
                        <h1 name="name" className="h1-large font-serif mb-5 font-semibold text-2xl text-center"></h1>
                        <p className="p-large mb-8 font-bold text-lg text-center">Welcome to Profile Builder Platform where you can Effortlessly make a job-worthy resume and cover letter that gets you hired faster .
                      </p>
    
                    </div>
                    <div className="justify-center sm:ml-20 md:ml-40 mt-5 flex grid-cols-3">
                        <p className="m-8 ml-0 justify-center col-span-1">
                          <NavLink to="/registration" className=" flex py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-white rounded-[10px] outline-none ">
                          <img src={fill} alt="student" className="w-8 h-8 mr-2"/>
                          
                            Get Sorted Data  
                          </NavLink>
                        </p>
                        <p className="m-8 ml-0 justify-center col-span-1">
                          <NavLink to="/update" className=" flex py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-white rounded-[10px] outline-none ">
                          <img src={update} alt="student" className="w-8 h-8 mr-2"/>
                          
                            Update Form 
                          </NavLink>
                        </p>
                        
    
                       
                      </div>
                </div> 
            </div>
            <div className="m-8">
                <img src={Graduation} alt="student" className="w-full h-full rounded-lg"/>
            
            </div>
            </div>
        </div>
    )
}



export default LoginHome;