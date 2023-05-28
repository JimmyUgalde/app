import FooterTag from './componentes/FooterTag.js';
import AcorTag from './componentes/AcorTag.js';
import ListaTag from './componentes/ListaTag.js';
import NavbarTag from './componentes/NavbarTag.js';
import HeaderTag from './componentes/HeaderTag.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  const datos = ['Virtual DOM', 'Componentes', 'Propiedades'];

  const descripcion = "En este taller, se creó una aplicación en ReactJS desde cero. Durante el taller, se aprendió cómo construir una aplicación con al menos cinco componentes individuales, cada uno de ellos con sus propios estilos CSS personalizados. Una de las ventajas de ReactJS es la capacidad de diseñar y aplicar estilos personalizados a cada componente. También se utilizo Bootstrap que es un framework de desarrollo web que facilita enormemente la creación de sitios y aplicaciones. Con sus múltiples componentes predefinidos y estilos prediseñados, Bootstrap permite a los desarrolladores construir interfaces modernas y atractivas de manera rápida y sencilla.";
  return (


    <div className="App">
      
      <NavbarTag/>

      <HeaderTag titulo={"Workshop #1"} descripcion={descripcion}/>

      <div className="card-deck m-5">

        <div className="listComp card " >
          <h2>Conceptos importantes de React</h2>
          <ListaTag data={datos} />
        </div>

        <div className="acorComp card ">
          <AcorTag contenido= "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página."/>
        </div>

      </div>
      
      <div className="footComp">
        <FooterTag/>
      </div>
      
    </div>
    
  );
}

export default App;
