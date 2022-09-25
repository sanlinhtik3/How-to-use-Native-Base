import {Box, NativeBaseProvider} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
          {/* Border */}

            {/*Parent*/}
            <Box mt="10" mx={5} h={500} bg={'pink.100'}>

                {/*Child*/}
                <Box position={'absolute'} zIndex={4} left={5} borderRadius={'xl'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'}/>
                <Box position={'absolute'} zIndex={2} left={7} borderRadius={'xl'} w={20} h={20} bg={'green.500'} borderWidth={5} borderColor={'green.200'}/>
                <Box position={'absolute'} zIndex={3} left={10} borderRadius={'xl'} w={20} h={20} bg={'rose.500'} borderWidth={5} borderColor={'rose.200'}/>
                <Box position={'absolute'} left={12} borderRadius={'xl'} w={20} h={20} bg={'yellow.500'} borderWidth={5} borderColor={'yellow.200'}/>
            </Box>

      </NativeBaseProvider>
  )
}

export default App
