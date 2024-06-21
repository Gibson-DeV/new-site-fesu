import styled from "styled-components"
import Logo from '../Logo/Logo';
import HeaderOpcoes from "../HeaderOpcoes";
import { Link } from "react-router-dom";

const HeaderComponent = styled.header`

    background: rgb(2,84,75);
    background: linear-gradient(90deg, rgba(2,84,75,1) 0%, rgba(1,150,118,1) 95%, rgba(3,162,121,1) 99%); 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 19px;
    -webkit-box-shadow: 2px 4px 6px 3px rgba(0,0,0,0.1);
    -moz-box-shadow: 2px 4px 6px 3px rgba(0,0,0,0.1);
    box-shadow: 2px 4px 6px 3px rgba(0,0,0,0.1);
    `

function Header() {
    return (
        <HeaderComponent className="bg-gradient">
            <Link to='/'>
                <Logo />
            </Link>
            <HeaderOpcoes />
        </HeaderComponent>
    )
}

export default Header;