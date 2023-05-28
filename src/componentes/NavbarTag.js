import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarTag = (props) => {
  
    return (
        
        

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">WorkShop UTN</a>
        <a class="navbar-brand" href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/768px-React.svg.png?20230428153009" width="30" height="30" class="d-inline-block align-top" alt=""/>
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://es.legacy.reactjs.org/docs/getting-started.html">DocReact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://lenguajehtml.com/">DocHtml</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://lenguajecss.com/">DocCSS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://lenguajejs.com/">DocJS</a>
                </li>
            </ul>
        
        </div>
    </nav>

    );
  
};

export default NavbarTag;