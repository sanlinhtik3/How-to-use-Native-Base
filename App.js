import {Box, NativeBaseProvider} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
          {/* Typography */}
          <Box mt={10}>
              <Box bg={'pink.100'} w="20%" h="30px"></Box>
          </Box>
      </NativeBaseProvider>
  )
}

export default App
