import React from 'react'

const PendienteCard = ({pendiente}) => {
  return (
    <div className='flex flex-row justify-around border-2 border-slate-500 p-1 mb-1'>
        <div>
            <h3>Prioridad</h3>
            <p>{pendiente.priority}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p>{pendiente.description}</p>
        </div>
        <div>
            <h3>contacto</h3>
            <p>{pendiente.email}</p>
        </div>
    </div>
  )
}

export default PendienteCard