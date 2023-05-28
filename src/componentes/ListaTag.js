//import './lista.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const ListaTag = (props) => {
    
    const data = props.data;
    return (
        <ul className="list list-group" >
            {data.map((dato, index) => (
                <li className="list-group-item" key={index}>{dato}</li>
            ))}
        </ul>
    );
  
};

export default ListaTag;