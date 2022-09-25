import {Box, Heading, NativeBaseProvider, Text} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
            <Heading size={'xs'}>xs</Heading>
            <Heading size={'sm'}>sm</Heading>
            <Heading size={'lg'}>lg</Heading>
            <Heading size={'xl'}>xl</Heading>
            <Heading size={'2xl'}>2xl</Heading>
            <Heading size={'3xl'}>3xl</Heading>
            <Heading size={'4xl'}>4xl</Heading>
        </Box>
      </NativeBaseProvider>
  )
}

export default App
