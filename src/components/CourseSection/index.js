import styled from "styled-components";
import Card from "../Card";
import curso_oral from '../../images/curso_oral.jpg';
import curso_regular from '../../images/curso_regular_2024.jpg';

const SectionComponent = styled.section`

`
const DivContainer = styled.div`
padding: 60px;
display: flex;
flex-wrap: wrap;
`
const cards = [Card, Card, Card, Card, Card, Card];
const images = [curso_oral, curso_regular, curso_regular, curso_regular, curso_regular, curso_regular];

function SectionCourses() {
    return (
        <SectionComponent>        
            <DivContainer >
                {cards.map((_, index) => (
                    <Card img={images[index]}/>
                ))}
            </DivContainer>
        </SectionComponent>
    )
}
 
export default SectionCourses;