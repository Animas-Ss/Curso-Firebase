import React from 'react'
import crearPendiente from '../functions/createPendiente';

const PendienteForm = ({refresh}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const priority = e.target.priority.value;
        const description = e.target.description.value;
        const email = e.target.email.value;
        console.log(priority, description, email);

       const data = { priority, description, email} ;
       await crearPendiente(data);

       e.target.priority.value = " ";
       e.target.description.value = " ";
       e.target.email.value = " ";

       refresh();
    }

  return (
    <div className=''>
        <form action="" onSubmit={handleSubmit} className='flex flex-row justify-around my-5 min-w-full'>
            <label htmlFor="" className='flex flex-col mx-10'>
                Prioridad
                <select name="priority" id="" className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
            <label className='flex flex-col'>
                Descripcion
                <input type="text" name='description' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'/>
            </label>
            <label htmlFor="" className='flex flex-col'>
                Contacto
                <input type="email" name='email' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'/>
            </label>
            <button className='bg-red-300 hover:bg-red-500 font-bold py-2 px-4 rounded focus:shadow-outline focus:outline-none'>Agregar</button>
        </form>
    </div>
  )
}

export default PendienteForm;