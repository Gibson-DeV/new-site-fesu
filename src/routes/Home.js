import styled from "styled-components"
import SectionCourses from "../components/CourseSection"
import Carousel from "../components/Carousel"
import Footer from '../components/Footer'

const AppContainer = styled.main`
    margin: 0;
    padding: 0;
 
`
function Home() {
  return (
      <AppContainer>
        <Carousel />
        <SectionCourses />
        <Footer />
      </AppContainer>
  )
}

export default Home;