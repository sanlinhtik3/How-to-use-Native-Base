import {Box, NativeBaseProvider} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
          {/* Border */}

            {/*Parent*/}
            <Box mt="10" mx={5}>

                {/*Child*/}
                <Box shadow="1" borderRadius={'xl'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb="3"/>
                <Box shadow="3" borderRadius={'xl'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb="3"/>
                <Box shadow="5" borderRadius={'xl'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb="3"/>
                <Box shadow="7" borderRadius={'xl'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb="3"/>
                <Box shadow="9" borderRadius={'xl'} w={20} h={20} bg={'pink.500'} borderWidth={5} borderColor={'pink.200'} mb="3"/>

            </Box>

      </NativeBaseProvider>
  )
}

export default App
