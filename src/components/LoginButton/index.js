import styled from "styled-components";


const ButtonComponent = styled.div`

justify-content-md-end;
padding: 10px

`
const Button = styled.button`
    -webkit-box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.71);
    -moz-box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.71);
    box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.71);
    border-radius: 10px;
`

function LoginButton() {

    return (
        <ButtonComponent id="buttonLogin"> 
        <Button className="btn btn-secondary bg-gradient" type="button">Entrar</Button>
        </ButtonComponent>
    )
}

// const b = document.getElementById('buttonLogin');
// b.addEventListener('click', () => window.open('asd','_blank'))

export default LoginButton;