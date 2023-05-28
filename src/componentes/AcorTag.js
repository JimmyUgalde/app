//import './acordion.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const AcorTag = (props) => {
    
    const data = props.contenido;
    console.log(data)
    return (
        <details className = "acordion accordion">
		    <summary><h2>¿Qué es React?</h2></summary>
		    <p className = "card-header" >{data}</p>
	    </details>
    );
  
};

export default AcorTag;