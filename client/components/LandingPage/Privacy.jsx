import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Markdown from './modules/components/Markdown'
import Typography from './modules/components/Typography'
import Navbar from './Navbar'
import AppFooter from './modules/views/AppFooter'
import withRoot from './modules/withRoot'
import privacy from './modules/views/privacy.md'

function Privacy () {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(Privacy)
