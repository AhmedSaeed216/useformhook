import React, { useState } from 'react';

const SignUp = () => {


    const [formData, setFormData] = useState({
        email:'',
        username:'',
        password:'',
        gender:''

    })


    const handleChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
        
        setFormData({
            gender:'',
            email:'',
            username:'',
            password:''
    })

    };

    const onClose=()=>{console.log("closed")
        setFormData({
            gender:'',
            email:'',
            username:'',
            password:''
    })
    }


    
    return (
        <div className='bg-white p-6 rounded-lg shadow-lg relative'>
            <button onClick={onClose} className="absolute top-2 right-2 text-red-600 font-bold text-xl">
                ×/ Clear All
            </button>
            <form 
            onSubmit={handleSubmit}
             className="flex flex-col gap-4">


                <label className="flex items-center gap-2">
                    Email:   
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="grow p-2 border border-gray-300 rounded-md"
                        placeholder="Email"
                    />
                    <br />
                    <br />
                </label>
                Username:
                <label className="flex items-center gap-2">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="grow p-2 border border-gray-300 rounded-md"
                        placeholder="Username"
                    />
                </label>
                <br />
                <br />
                <label className="flex items-center gap-2">
                    Password: 
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="grow p-2 border border-gray-300 rounded-md"
                        placeholder="Password"
                    />
                </label>

                <br /><br />
                <label >
                    Gender
                    <input 
                    type="text"
                    name='gender'
                    placeholder='Enter Gender '
                    value={formData.gender}
                    onChange={handleChange}

                    />

                </label>

            <br />
            <br />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
