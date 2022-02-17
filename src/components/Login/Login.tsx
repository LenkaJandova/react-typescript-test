import './Login.css'
import { checkCredentials } from '../../functions/login'
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
import { MouseEventHandler, useState } from 'react'
import { CLIENT_RENEG_LIMIT } from 'tls'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))


function Login() {
  
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const performLogin: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if(checkCredentials(username,password)){
      navigate("/main");
    } else{
      alert(`username: ${username}, password: ${password}`)//TODO na mui najit boxik a nastavime do statu tyhle componenty novou property "error message"
    }
  }

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
                value={username}
                onChange={(event) => { setUsername(event.target.value) }}
                id="standard-required"
                label="Username"
                // defaultValue="Hello World"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={password}
                onChange={(event) => { setPassword(event.target.value) }}
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
                onClick={performLogin}
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
