import React, { Fragment , Component} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../images/logo_thumbnail.png';
import './Nav.css';

export default class Nav extends Component {
    constructor(){
        super();
        this.state={
            show: true,
        }
    }
    render() {
        return (
          <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav-content ">
                    <div className="container">
                        <a className="navbar-brand " > 
                            <img src={logo} alt="" width="35" height="25"></img>
                           <span className='doctor-name'> 
                               Doctor 
                            </span> 
                        </a>
                        <button className="navbar-toggler  menu-icon" 
                        onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
                            {this.state.show ? <MenuIcon /> : <CloseIcon />}
                        </button>
                            <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link navbar-link" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navbar-link" >Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navbar-link" > profile </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navbar-link" >blogs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navbar-link" >Contact Us </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navbar-link" > booking </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
          </Fragment>
            
          
        )
    }
}
