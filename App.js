import {Box, NativeBaseProvider} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
          {/* Border */}
            <Box mt="10" mx={5}>

                <Box w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb={10}/>
                <Box w={20} h={20} bg={'pink.500'} borderLeftWidth={5} borderColor={'pink.200'}/>

            </Box>

      </NativeBaseProvider>
  )
}

export default App
