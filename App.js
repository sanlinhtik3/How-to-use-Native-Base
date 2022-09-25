import {Box, NativeBaseProvider, Text} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
          {/* Margin and Padding */}
          <Box mt={10}>
              <Text color={"pink.500"} bg="pink.100" p="10">Hello Color</Text>
          </Box>
      </NativeBaseProvider>
  )
}

export default App
