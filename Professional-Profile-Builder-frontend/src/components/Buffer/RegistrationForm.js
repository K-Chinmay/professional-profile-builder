import React,{useState,useEffect} from "react";

const RegistrationForm = () => {

    const [userData,setUserData]=useState({name:"",
        email:"",
        lastname:"",
        gender:"",
        address:"",
        city:"",
        phone:"",
        pincode:"",
        collagename:"",
        skills:"",
        projects:"",
        department:"",
        yearofstudy:"",
        qualification:"",
        yearofgraduation:""});

        const userRegistration = async ()=>{
            try{
              const res = await fetch('/getdata',{
                method: 'GET',
                headers:{
                  "Content-Type": "application/json"
                },
              });
      
              const data = await res.json();
              console.log(data);
              setUserData({...userData,name:data.name,email:data.email,
                lastname:data.lastname,
                gender:data.gender,
                address:data.address,
                city:data.city,
                phone:data.phone,
                pincode:data.pincode,
                collagename:data.collagename,
                skills:data.skills,
                projects:data.projects,
                department:data.department,
                yearofstudy:data.yearofstudy,
                qualification:data.qualification,
                yearofgraduation:data.yearofgraduation});
        
              if(!res.status===200)
              {
                const error = new Error(res.error);
                throw error;
              }
            } catch(err){
              console.log(err);
            }
          }
          useEffect(()=>{
            userRegistration();
          },[]);
      
      
          const handleInputs = (e)=>{
              const name = e.target.name;
              const value = e.target.value;
              setUserData({...userData,[name]:value});
          }
      
          const RegistrationForm = async (e) =>{
            e.preventDefault();
      
            const {name,email,
                lastname,
                gender,
                address,
                city,
                phone,
                pincode,
                collagename,
                skills,
                projects,
                department,
                yearofstudy,
                qualification,
                yearofgraduation} = userData;
            const res = await fetch("/registration",{
              method: 'POST',
              headers:{
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                name,
                email,
                lastname,
                gender,
                address,
                city,
                phone,
                pincode,
                collagename,
                skills,
                projects,
                department,
                yearofstudy,
                qualification,
                yearofgraduation
              })
            });
      
            const data = await res.json();
            if(!data){
              console.log("Form not send");
            } else {
              alert("Form  sent successfully ");
              setUserData({...userData,name:"",email:"",
              lastname:"",
              gender:"",
              address:"",
              city:"",
              phone:"",
              message:"",
              pincode:"",
              collagename:"",
              skills:"",
              projects:"",
              department:"",
              yearofstudy:"",
              qualification:"",
              yearofgraduation:""})
            }
      
      
      
          }
  return (
    <div className="lg:px-80 md:px-52 bg-blue-100">
      <form method="POST">
        <div className="p-2 lg:max-w-3xl sm:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  ">
          <p className="text-lg text-gray-800 dark:text-gray-100 font-bold text-center mx-2 my-3">
            Personal Information
          </p>
          <hr />

          <div className="text-left mx-3 p-3 space-x-2 ">
            <div class="grid gap-6 mb-1 md:grid-cols-2">
              <div className="my-3 space-y-2">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={userData.name}
                  onChange={handleInputs}

                />
              </div>

              <div className="my-3 space-y-2">
                <label
                  for="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="lastname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={userData.lastname}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div class="grid gap-6 mb-1 md:grid-cols-2">
              <div className="my-3 space-y-2">
                <label
                  for="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  pattern="^[7-9]{1}[0-9]{9}$"
                  required=""
                  value={userData.phone}
                  onChange={handleInputs}
                />
              </div>

              <div className="my-3 space-y-2">
                <label
                  for="Gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Gender
                </label>
                <select
                  id="Gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="gender"
                  value={userData.gender}
                  onChange={handleInputs}
                >
                  <option selected=""></option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="TG">Other</option>
                </select>
              </div>
            </div>
            <div className="my-3 space-y-2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                pattern="[a-z]+[a-z0-9]"
                required=""
                value={userData.email}
                onChange={handleInputs}
              />
            </div>

            <div className="my-3 space-y-2">
              <label
                for="Address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Address
              </label>
              <input
                type="text"
                id="Address"
                name="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20"
                placeholder=""
                required=""
                value={userData.address}
                onChange={handleInputs}
              />
            </div>

            <div class="grid gap-6 mb-2 md:grid-cols-2">
              <div className="my-3 space-y-2">
                <label
                  for="city"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={userData.city}
                  onChange={handleInputs}
                />
              </div>

              <div className="my-3 space-y-2">
                <label
                  for="pincode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Pin Code
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  pattern="^[0-9]{6}"
                  required=""
                  value={userData.pincode}
                  onChange={handleInputs}
                />
              </div>
            </div>

            {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-100 font-bold text-center mx-2 my-3">
            Eductional Details
          </p>
          <hr />

          <div className="text-left mx-3 p-3 space-x-2 ">
            <div className="grid gap-6 mb-1 md:grid-cols-2">
              <div className="my-3 space-y-2">
                <label
                  for="HighestQualification"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Highest Qualification
                </label>
                <select
                  id="HighestQualification"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="qualification"
                  required=""
                  value={userData.qualification}
                  onChange={handleInputs}
                >
                  <option selected=""></option>
                  <option value="M">High School</option>
                  <option value="F">Pre University(XII)</option>
                  <option value="TG">Diploma</option>
                </select>
              </div>

              <div className="my-3 space-y-2">
                <label
                  for="YearofGraduation"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Year of Graduation
                </label>
                <input
                  type="text"
                  id="YearofGraduation"
                  name="yearofgraduation"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={userData.yearofgraduation}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="my-3 space-y-2">
              <label
                for="CollegeName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                College Name
              </label>
              <input
                type="text"
                id="collegename"
                name="collagename"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
               
                value={userData.collagename}
                onChange={handleInputs}
              />
            </div>

            <div class="grid gap-6 mb-1 md:grid-cols-2">
              <div className="my-3 space-y-2">
                <label
                  for="Department"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Department
                </label>
                <select
                  id="Department"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="department"
                  required=""
                  value={userData.department}
                  onChange={handleInputs}
                >
                  <option selected=""></option>
                  <option value="M">Computer Science and Engineering</option>
                  <option value="F">Mechanical Engineering</option>
                  <option value="TG">Electrical Engineering</option>
                  <option value="G">Electronics Engineering</option>
                  <option value="T">Information Technology</option>
                  <option value="E">Civil Engineering</option>
                </select>
              </div>
              <div className="my-3 space-y-2">
                <label
                  for="Studyyear"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Study Year
                </label>
                <select
                  id="Studyyear"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  name="yearofstudy"
                  value={userData.yearofstudy}
                  onChange={handleInputs}
                >
                  <option selected=""></option>
                  <option value="M">1st Year</option>
                  <option value="F">2nd Year</option>
                  <option value="TG">3rd Year</option>
                  <option value="G">4th Year</option>
                  <option value="T">5th Year</option>
                  <option value="R">Not Applicable</option>
                </select>
              </div>
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold text-center mx-2 my-3">
              Skills
            </p>
            <hr />
            <div className="text-left mx-3 p-3 space-x-2 ">
              <div className="my-3 space-y-2">
                <label
                  for="Skills"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Enlist Programming Skills{" "}
                </label>
                <input
                  type="text"
                  id="Skills"
                  name="skills"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder=""
                  required=""
                  value={userData.skills}
                  onChange={handleInputs}
                />
              </div>
              <div class="grid gap-6 mb-2 md:grid-cols-2">
                <div className="my-3 space-y-2">
                  <label
                    for="Projects"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Enlist Projects
                  </label>
                  <input
                    type="text"
                    id="Projects"
                    name="projects"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required=""
                    value={userData.projects}
                    onChange={handleInputs}
                  />
                </div>

                
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 space-y-2">
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            onClick={RegistrationForm}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
