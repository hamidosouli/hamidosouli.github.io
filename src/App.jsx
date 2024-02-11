import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import useMediaQuery from './hook/useMediaQuery'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './themes/theme'
import { Global, css } from '@emotion/react'
import { prismDarkTheme } from './themes/prism'
import Container from './components/Container'
import Introduction from './components/Introduction'
import AboutMe from './components/AboutMe'
import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
} from '@chakra-ui/react'

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        // styles={css`
        //   ${prismDarkTheme};
        //   ::selection {
        //     background-color: #90cdf4;
        //     color: #fefefe;
        //   }
        //   ::-moz-selection {
        //     background: #ffb7b7;
        //     color: #fefefe;
        //   }
        //   html {
        //     min-width: 356px;
        //   }
        //   #__next {
        //     display: flex;
        //     flex-direction: column;
        //     min-height: 100vh;
        //     background: #000;
        //   }
        //   ::-webkit-scrollbar {
        //     width: 8px;
        //     background: #080808;
        //   }

        //   ::-webkit-scrollbar-thumb {
        //     background: #111111;
        //     border-radius: 8px;
        //   }
        // `}
      />
      {children}
    </>
  )
}

function App() {
  const isLargerThan800 = useMediaQuery(800)
  const introduction = [
    {
      fields: {
        companyUrl: "",
        emoji: "",
        description: ""
      }
    },{
      fields: {
        companyUrl: "",
        emoji: "",
        description: ""
      }
    }
  ]
  return (
    <>
     <ChakraProvider resetCSS theme={customTheme}>
      {/* <GlobalStyle> */}
      <Container enableTransition={true}>
        <div>
          <title>Abdul Rahman - Software Engineer</title>
          <meta name="title" content="Abdul Rahman - Software Engineer" />
          <meta name="keywords" content="abdulrcs, abdulrcs website" />
          <meta
            name="description"
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abdulrahman.id" />
          <meta
            property="og:title"
            content="Abdul Rahman - Software Engineer"
          />
          <meta
            property="og:description"
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
          />
          <meta property="og:image" content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://abdulrahman.id/" />
          <meta
            property="twitter:title"
            content="Abdul Rahman - Software Engineer"
          />
          <meta
            property="twitter:description"
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
          />
          <meta
            property="twitter:image"
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
          />
        </div>

        <Stack
          as="main"
          spacing="144px"
          pb='144px'
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction introduction={introduction} />
          {/* <FeaturedProjects projects={projects} /> */}
          {/* <LatestArticle articles={articles} /> */}
          {/* <ContactMe contactMe={contactMe} /> */}
        </Stack>
      </Container>
      {/* </GlobalStyle> */}
    </ChakraProvider>
    </>
  )
}

export default App
