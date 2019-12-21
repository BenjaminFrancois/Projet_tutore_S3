import React,{useState} from 'react'
import { Navbar, NavLink, NavbarToggler, Collapse, Nav, NavbarBrand, NavItem } from 'shards-react'
import { navigate } from 'hookrouter'
import style from './navbar.module.css'
import logo from '../../../assets/images/scShare_logoNav.png'
import ProfilRound from '../../../components/profileRound_component/ProfilRoundNav'
import { useDispatch } from 'react-redux'
import {logout} from '../../../providers/actions/userActions'

export default function NavBar() {
    
    const dispatch = useDispatch();

    //hook to handle navBar collapse when on responsive mode
    const[open, setOpen] = useState(false);

    var location = window.location.pathname;

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Navbar type={"dark"} className={style.Navbar} expand="md">
            <NavbarBrand className={style.Brand} onClick = {() => navigate('/seances')} > <img src={logo} alt="SchoolShare Logo" />schoolShare</NavbarBrand>
            <Nav navbar className="ml-auto" >
                <NavItem>
                    {(location !== '/' && location !== '/passwordForget') ? (
                        <ProfilRound bgcolor="white" fcolor="black" letter="B" logout={() => handleLogout()} />
                        ) : ''
                    }
                </NavItem>
            </Nav>
      </Navbar>
    )
}
