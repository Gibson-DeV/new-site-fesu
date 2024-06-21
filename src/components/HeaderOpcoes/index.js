import styled from "styled-components";
import LoginButton from "../LoginButton";
import { Link } from "react-router-dom";

const opcoes = ['Preparatorios','Concursos','Programa de Cotas','Institucional','Contato'];

const OpcoesUl = styled.ul`
display: flex;
align-items: center;

`

const OpcaoLi = styled.li`
    margin-right: 35px;
    font-size: 20px;
    cursor: pointer;

    padding: 3px;


    &:hover {
    text-decoration: none;
    text-decoration-color: yellow;
    color: grey;
    transition: text-decoration-color 2s, color 0.5s;
`
const StyleLink = styled(Link)`
text-decoration: none;
color: inherit;
text-align: center;
`

function HeaderOpcoes () {

    return (
        <OpcoesUl>
            {opcoes.map((opcao) => (
                <StyleLink to={`/${opcao.toLowerCase()}`}><OpcaoLi><p>{opcao}</p></OpcaoLi></StyleLink>
            ))}
            <LoginButton />
        </OpcoesUl>
    )
}

export default HeaderOpcoes;