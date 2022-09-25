import {Box, NativeBaseProvider} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
          {/* Border */}
            <Box mt="10" mx={5}>

                <Box borderRadius={'xl'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb={10}/>
                <Box borderRadius={'20px'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb={10}/>
                <Box borderLeftRadius={'20px'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb={10}/>
                <Box borderRightRadius={'20px'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb={10}/>
                <Box borderBottomRadius={'20px'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb={10}/>
                <Box borderRadius={'full'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb={10}/>

            </Box>

      </NativeBaseProvider>
  )
}

export default App
