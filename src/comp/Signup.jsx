import React from 'react'
import { useForm } from 'react-hook-form'
const Signup = () => {

    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState:{errors,isSubmitting},
    }=useForm();

const delay=(time)=>{
    return new Promise((resolve,reject)=>{
            setTimeout(() => {

          resolve();      
            }, time*1000);
        })
}

    const onsubmit= async  (data)=>{

        await delay(3);
        console.log(data)
        if (data.username!=="ahmed") {
            setError("invalidUser",{message:"User dose not exist"})
        }
        if (data.username==="saeed") {
            setError("blockedUser",{message:"this user is blocked"})
        }
    }
  return (
    <>

    {isSubmitting&&  <div>Submitting..</div> }
        <form onSubmit={handleSubmit(onsubmit)}>
            <input type="text"
                placeholder='Username'
                {...register("username",{required:{value:true,message:"username must be enter"},minLength:{value:3,message:"Min length is 3"},maxLength:{value:8,message:"max Length is 8 "}})}
                // {...register("username", {required:{value:true ,message:"this field is required"},minLength:{value:3,message:"Min length is 3"},maxLength:{value:8,message:"max length is 8"}})}
            />
            {errors.username&&<div>{errors.username.message}</div>}

            <br />
            <input type="password"
            placeholder='Password'
            {...register("passwords",{required:{value:true,message:"Password cant be blank"},minLength:{value:4,message:"Value less than 4 is invalid"},maxLength:{value:9,message:"password cant be more than 9 letters"}})} />

            {errors.passwords&&  <div>{errors.passwords.message}</div> }
<br />
            <input type="submit"
            value="submit"
            disabled={isSubmitting}
             />

             {errors.invalidUser&&  <div>{errors.invalidUser.message}</div> }
             {errors.blockedUser&&  <div>{errors.blockedUser.message}</div> }
        </form>
    </>
  )
}

export default Signup