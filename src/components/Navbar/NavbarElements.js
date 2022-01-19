import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: red;
    height: 80px;
    display: flex;
    justify-content: conter;
    font=weight: 700;
`;

export const NavLink  = styled(Link)`
color: #FFF;
font-size: 2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: ponter;

@media screen and (mac-width: 400px){
    position: absolute;
    top:10px;
    left: 25px;
}
`