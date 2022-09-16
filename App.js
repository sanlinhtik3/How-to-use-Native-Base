import {Box, NativeBaseProvider, Text} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text fontSize={30} color={"#007bff"}>Open up App.js to start working on your app!</Text>
        </Box>
      </NativeBaseProvider>
  )
}

export default App