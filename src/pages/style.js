import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
`

export const Nav = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    padding: 0;
    margin-right: 30px;
`

export const NavLink = styled.li`
    list-style: none;

`

export const StyledLink = {
    textDecoration: "none",
    color: '#fff',
    fontWeight: '400',
};

export const SecondaryText = styled.span`
    color: #FF5151;
`

export const PrimaryText = styled.h2`
    color: #fff;
`