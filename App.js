import {Box, NativeBaseProvider} from "native-base";

const ABox = () => {
    return <Box p={5} bg={'pink.500'} m={5}></Box>
}

const App = () => {
  return (
      <NativeBaseProvider>
          {/* flexbox */}
          {/*<Box mt={10}>*/}

          {/*    <Box display="flex" flexDirection={'row'} justifyContent={'space-evenly'} mb={10} bg="pink.100">*/}
          {/*        <ABox/>*/}
          {/*        <ABox/>*/}
          {/*        <ABox/>*/}
          {/*    </Box>*/}

          {/*    <Box display="flex" flexDirection={'row'} h="400px" justifyContent={'center'} alignItems={"center"} bg="pink.100">*/}
          {/*        <ABox/>*/}
          {/*        <ABox/>*/}
          {/*        <ABox/>*/}
          {/*    </Box>*/}
          {/*    */}
          {/*</Box>*/}

          <Box flex={1} bg={'pink.300'}></Box>

      </NativeBaseProvider>
  )
}

export default App
