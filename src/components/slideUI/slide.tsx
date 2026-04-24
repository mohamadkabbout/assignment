import './slide.scss'
import { Box, Button, Container, Typography } from '@mui/material'

function Slide() {
  return (
    <Box className="slide-section">
      <Container>
        <Box className="slide-content">
          <Typography variant="h2" className="slide-title">
             My Dr.Ahmad trad
          </Typography>

          <Typography variant="h6" className="slide-text">
            This project uses Bootstrap for the navbar and Material UI for the slide section.
          </Typography>

          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Slide