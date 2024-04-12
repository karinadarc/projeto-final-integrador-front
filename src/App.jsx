import GlobalStyle from "./GlobalStyles"
import Router from "./routes/Router"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Router />
    </ChakraProvider>
  )
}

export default App;
