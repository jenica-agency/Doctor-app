import React, { Fragment , Component} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../images/logo_thumbnail.png';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Profile from '../Profile/Profile';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Booking from '../Booking/Booking';
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
            <BrowserRouter>
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
                                            <NavLink to="/Home" className="nav-link navbar-link" >Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/Services" className="nav-link navbar-link" >Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/Profile" className="nav-link navbar-link" > profile </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/Blogs" className="nav-link navbar-link" >blogs</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/Contact" className="nav-link navbar-link" >Contact Us </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/Booking" className="nav-link navbar-link" > booking </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </Fragment>
                     <Routes>
                            <Route path="/Home" element={<Home/>}></Route>
                            <Route path="/Services" element={<Services/>}></Route>
                            <Route path="/Booking" element={<Booking/>}></Route>
                            <Route path="/Profile" element={<Profile/>}></Route>
                            <Route path="/Blogs" element={<Blogs/>}></Route>
                            <Route path="/Contact" element={<Contact/>}></Route>
                     </Routes>
            </BrowserRouter>
          
            
          
        )
    }
}
