import logoFesu from '../../images/logo-white.svg';
import styled from 'styled-components';


const LogoContainer = styled.div`
    display: flex;
  align-items: flex-start;
  font-size: 30px;
  color: white;
  cursor: pointer;
  position: relative;
  transition: color 0.5s;
  &:hover {
    color: white;
  }

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background-color: white;
    transition: width 0.5s;
  }
    
`
const LogoImg = styled.img`  
  width: 50px;
  margin-right: 10px;
  
`

function Logo () {

    return (
        <LogoContainer>
            <LogoImg 
                src={logoFesu}
                alt='logo-fesudeperj'
            />
            <p>Fesudeperj
            </p>
        </LogoContainer>
    )
}

export default Logo;