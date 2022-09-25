import {NativeBaseProvider, Text} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
          {/* Margin and Padding */}
            <Text bg={'#dc2626'} p={10} mx={5}>Hello</Text>
      </NativeBaseProvider>
  )
}

export default App
