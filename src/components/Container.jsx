import React, { useEffect, useState } from 'react'
import { chakra, Flex, Stack, Text } from '@chakra-ui/react'
import Navbar from './Navbar'

const Container = ({ enableTransition, children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // fix hydration mismatch from using useMediaQuery hooks
  if (mounted)
    return (
      <>
        <Flex as="main" justifyContent="center" flexDirection="column">
          {children}
        </Flex>
        <Stack alignItems="center" mt={10} mb={5}>
          
        </Stack>
      </>
    )
}

export default Container
