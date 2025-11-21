import './Presentacion.css'

function Presentacion() {
  return (
     <div className="presentacion-container">
      <div className="caja-presentacion">
        <p className='slogan'>
          <span className='slogan1'>Lugar</span> <span className='slogan2'>soñado</span>
        </p>
      </div>

      <img 
        src="../../public/images/foto-presentacion.jpg" 
        alt="Hotel Tandil"
        className="presentacion-img"
      />
    </div>
  );
}

export default Presentacion
