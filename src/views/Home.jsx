import {useEffect, useState}from 'react'
import logOut from '../functions/logOut';
import Navbar from '../components/Navbar';
import PendienteForm from '../components/PendienteForm';
import getAllPEndientes from '../functions/leerPendientes';
import PendienteCard from '../components/PendienteCard';

const Home = ({ user }) => {
  const [allPendientes, setAllPendientes] = useState(null);

  const refresh = () => {
    getAllPEndientes()
    .then(pendientes => {
      setAllPendientes(pendientes);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    refresh()
  }, [])
  
  return (
    <div className='w-screen h-screen flex flex-col'>
        <Navbar usuario={user}/> 
        <PendienteForm refresh={refresh}/>
        {allPendientes && (
          allPendientes.map( pendiente => <PendienteCard pendiente={pendiente}/>)
        )}
    </div>
  )
}

export default Home