import {Box, NativeBaseProvider, Text} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={'xs'}>xs</Text>
            <Text fontSize={'sm'}>sm</Text>
            <Text fontSize={'md'}>md</Text>
            <Text fontSize={'lg'}>lg</Text>
            <Text fontSize={'xl'}>xl</Text>
            <Text fontSize={'2xl'}>2xl</Text>
            <Text fontSize={'4xl'}>4xl</Text>
            <Text fontSize={'5xl'} bold>5xl</Text>
            <Text fontSize={'6xl'} italic color={'pink.500'}>xs</Text>
        </Box>
      </NativeBaseProvider>
  )
}

export default App
