import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPacientes}) => {

  return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

          <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="text-indigo-900 font-bold">Pacientes y Citas</span>
          </p>

            {/* imprimir los valores en comsola usando .map() */}
            {pacientes.map( paciente => {

                return(
                    // llama este componente tantas veces se vaya creando
                    <Paciente 
                        paciente={paciente}
                    />
                )

            })}

         
      
      </div>
  )
}

export default ListadoPacientes