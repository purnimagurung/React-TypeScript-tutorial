import React, { useCallback, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const LoginForm = () => {
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });
   
    const handleChange = useCallback((e) => {
        const{name, value} = e.target;
        setFormData((prev)=> ({
            ...prev,
            [name]: value, 
        }));
    },[]);
    
    const  handleLogin= (e) => {
        e.preventDefault();
        login({ email: formData.email, password: formData.password});
    }

  return (
    <form  onSubmit = {handleLogin} className="p-4 max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-2">Login</h2>
      <input className="border p-2 mb-2 block w-full"
        name="email"
        value={formData.email}
        onChange={handleChange} 
        placeholder="Email" />
      <input className="border p-2 mb-2 block w-full"
       name='password'
        type="password" 
        value={formData.password}
        onChange={handleChange}
        placeholder="Password" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" 
      type="submit">Login</button>
    </form>

  )
}

export default LoginForm