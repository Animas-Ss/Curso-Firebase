import { useState } from 'react';
import loginEmail from '../functions/LoginEmail';
import registerUser from '../functions/registerUser';
import loginGoogle from '../functions/loginGoogle';

const Login = () => {
    const [isLoggin, setIsLoggin] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log("Login:", username, password);
        if(isLoggin){
            await loginEmail(username, password);
        }else{
            await registerUser(username, password);
        }
    }
    

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className=' w-1/3 h-2/3 border shadow-xl rounded-xl flex flex-col items-center justify-between p-4'>
                <h1 className='text-3xl font-bold'>{isLoggin ? "inicia sesion" : 'Registrate'}</h1>
                <form action='' className='flex flex-col gap-6' onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor='username'>Username</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' id='username' />
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='password' id='password' />
                    </div>
                    <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>{isLoggin ? "Acceder" : "Registrate"}</button>
                </form>
                <button className='bg-red-500 border-1 border-black py-2 px-4 shadow-xl w-72 rounded-2xl' onClick={loginGoogle}>Google</button>
                <button className='underline' onClick={() => setIsLoggin(!isLoggin)}>
                    {isLoggin ? "¿No tienes cuenta? Crea una" : "¿Ya tienes cuenta? Accede"}
                </button>

            </div>
        </div>
    )
}

export default Login;