import 'bootstrap/dist/css/bootstrap.min.css';

import './header.css'
const HeaderTag = (props) => {
    
    const titulo = props.titulo;
    const descripcion = props.descripcion;

    return (
        <div className="jumbotron bg-cover text-white imgCont">
            <div className="container py-5 text-center">
                <h1 className="display-4 font-weight-bold">{titulo}</h1>
                <p className="font-italic mb-0 mt-5 text-justify">{descripcion}</p>
            </div>
        </div>

    );
  
};

export default HeaderTag;