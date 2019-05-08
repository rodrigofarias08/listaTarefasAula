import React from 'react'

export default props => {
    return ( 
        <nav className="navbar-default navbar-static-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav metismenu" id="side-menu">
                    <li className="active">
                        <a href="#/tarefas"><i className="fa fa-check"></i> <span className="nav-label">Tarefas</span></a>
                    </li>
                    <li>
                        <a href="#/sobre"><i className="fa fa-address-card"></i> <span className="nav-label">Sobre</span> </a>
                    </li>
                </ul>
            </div>
    </nav>
    );
}