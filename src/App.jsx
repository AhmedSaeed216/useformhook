import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './comp/Form'
import { useForm, useFormState } from "react-hook-form"
import Signup from './comp/Signup'


function App() {
  // const [count, setCount] = useState(0)

// const {
//   register,
//   handleSubmit,
//   watch,
//   setError, //seterror is use to make custom error msg
//   formState:{errors,isSubmitting},
// }=useForm();


// // following function is to simulating the network delay while submitting the form
// const delay=(d)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve()
//     }, d*1000);
//   })
// }

// const onSubmit = async (data) => {
//    await delay(4);
//   console.log(data)
//   if (data.username!=="ahmed") {
//     setError("myform",{message:"Your Credentials are not valid"})
//     // here myform is the name of the error
//   }
//    if(data.username==="saeed")
//   {
//     setError("blocked", {message:"This user is blocked :)"})
//   }
// }



//   return (
//     <>
// {isSubmitting && <div>Loading.....</div>}


//         <div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <input 
//           placeholder='Username'
//           {...register("username", {required:{value:true ,message:"this field is required"},minLength:{value:3,message:"Min length is 3"},maxLength:{value:8,message:"max length is 8"}})}
          
//           type="text"  />
// {errors.username && <div>  {errors.username.message}</div>}
// <br />

// {/* if ypuw ant ot get the specfic error type then we must use the object annd also pass the error msg of each length or error cause */}
//           <input type="password"
//           placeholder='Password'
//           {...register("password",{required:{value: true,message:"this field Must be filled"},minLength:{value:5,message:"Write atleast 5 letters"},maxLength:{value:9,message:"Not long then 9 ketter"}})}
//           /> 

//           {errors.password&&  <div>{errors.password.message}</div>}       
// <br />
//           <input
//           // is submitting willl disabled the submit button
//           disabled={isSubmitting} type="submit" value="submit" /> 

// custom errors
//           {errors.myform&& <div>{errors.myform.message}</div>}
//           {errors.blocked && <div>{errors.blocked.message}</div> }
//         </form>
//         </div>

//     </>
//   )

return(
  <Signup/>
)
}

export default App
