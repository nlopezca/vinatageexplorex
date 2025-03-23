import { ThemeProvider, Heading, View, Flex, Input, Button} from '@aws-amplify/ui-react';
import Navbar from './components/navbar'
import ChatBot from './components/ChatBot'
// import './App.css'
// import '@aws-amplify/ui-react/styles.css'
import background from './assets/background.png'

function App() {

  return (
    <ThemeProvider>
      {/* <Navbar/> */}
      {/* Call to Action Banner */}
      <div style={{ height: '100vh', margin: '-.5em', marginBottom: '1em', padding: '1em', backgroundImage: `url(${background})`,  backgroundSize: 'cover'}}>
      <Navbar/>
        {/* <Flex direction='column' justifyContent='center' alignItems='center' height='65vh'>
          <Flex direction='column' justifyContent='center' alignItems='center' padding={'1em'} borderRadius={'14px'} style={{backgroundColor:'rgba(4, 124, 148, 0.6)'}}>
          <Heading level={2} color='white'>Explore our world with a smile</Heading>
          <Heading level={6} color='white'>We have the top destinations waiting for you with the best deals happening right now!</Heading>
          <Flex backgroundColor={'white'} padding={'.5em'} borderRadius={'5px'} width={'55vw'}>
            <Input placeholder='📍 location' />
            <Input placeholder='📅 date' />
            <Input placeholder='👤 person' />
            <Button variation='primary' >Go </Button>
          </Flex>
          </Flex>
        </Flex> */}
      </div>
      <ChatBot/>
    </ThemeProvider>
  )
}

export default App
