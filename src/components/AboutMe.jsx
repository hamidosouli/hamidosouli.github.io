import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {

  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hey! I'm Abdul Rahman, I've been close to a computer since an
              early age, and been passionate about it ever since. <br />
              <br /> I really liked to build stuff using{' '}
              <MoreInfo
                text="no-code tools"
                content="I used to make games without code using RPG Maker VX, and build a simple website with blogspot back in primary school."
              />
              back in 2010, and from that, I explored how to code myself,
              fast-forward to today, I do programming in various languages and
              technologies, and had the privilege to worked in a{' '}
              and a
              I'm interested in building something awesome with code and
              automate tasks with code, currently focused on
              <MoreInfo
                text="Web & Mobile Development,"
                content="Building Web and Mobile Applications using Javascript Frameworks (React, React Native and Next.js)"
              />
              <MoreInfo
                text="Open Source"
                content="I really like the idea of contributing new features to open source projects that can be useful to other people."
              />
              and
              <MoreInfo
                text="Competitive Programming"
                content="Competitive Programming helped me to sharpen my Algorithms and Problem Solving skills."
              />
              <br />
              <br />
              When I'm not coding I play games with my friends, watch some show
              on Netflix, or if the weather's good, play basketball! 🏀
            </Text>
          </Stack>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
