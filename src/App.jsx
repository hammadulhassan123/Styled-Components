import React from "react"
import Header from "./Components/header"
import Footer from "./Components/Footer"
import { Container } from "./Components/styled/Container.styled"
import { ThemeProvider } from "styled-components"
import content from "./content"
import Card from "./Components/Card"
import Footers from "./Components/Footer"
function App() {

const theme ={
  colors:{
    header: "#ebfbff",
    body:"#fff",
    footer: "#003333",
  },
  mobile: '768px',
}
  
  return (
    <ThemeProvider theme={theme}>
    <>
    <Header />
    <Container>
      {content.map((item,index)=>(<Card key={index} item={item} />))}
    </Container>
    <Footers/>
    </>
    </ThemeProvider>
  )
}

export default App
