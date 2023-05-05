import React from "react"
import Header from "./Components/header"
import { Container } from "./Components/styled/Container"
import { ThemeProvider } from "styled-components"
function App() {

const theme ={
  colors:{
    header: "#ebfbff",
    body:"#fff",
    footer: "#003333",
  },
}
  
  return (
    <ThemeProvider theme={theme}>
    <>
    <Header />
    <Container>
      <h1>Hello World</h1>
    </Container>
    </>
    </ThemeProvider>
  )
}

export default App
