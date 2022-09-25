import {Box, NativeBaseProvider, Text} from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
          {/* Typography */}
          <Box mt={10}>
              <Text fontSize={'3xl'} fontWeight={'bold'}>Thank You</Text>
              <Text lineHeight={'40'} letterSpacing={'5'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum dicta doloremque ex labore laboriosam nobis odit perspiciatis qui quibusdam, quisquam quo repellat repudiandae saepe, sed temporibus tenetur ullam ut.
              </Text>
              <Text fontSize={'2xl'} textAlign={'left'}>Hello</Text>
              <Text fontSize={'2xl'} textTransform={'uppercase'}>Text Transform</Text>
              <Text fontSize={'2xl'} underline>Text Transform</Text>
          </Box>
      </NativeBaseProvider>
  )
}

export default App
