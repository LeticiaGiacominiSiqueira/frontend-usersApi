import { BrowserRouter, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { useState } from 'react'
import AppRoutes from './AppRoutes';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to="/usuarios"
              sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none', fontWeight: 'bold', letterSpacing: 1 }}
            >
              Usuários
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ minHeight: 'calc(100vh - 64px)', background: '#f5f6fa' }}>
        <AppRoutes />
      </Box>
    </BrowserRouter>
  )
}

export default App
