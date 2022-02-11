import './Login.css'
import {
  Button,
  Container,
  Grid,
  Paper,
  styled,
  TextField,
} from '@mui/material'
import { Box } from '@mui/system'

import { useNavigate } from "react-router-dom"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))



function Login() {
  
  const navigate = useNavigate();
  
  return (
    <div className="Login">
      <Item>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h4>Login</h4>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-required"
                label="Username"
                // defaultValue="Hello World"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/invoices");
                }}
              >
                Butonek
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Item>
    </div>
  )
}

export default Login
