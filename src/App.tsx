import React from 'react'
import './App.css'
import { Button, Container, Grid, Paper, styled, TextField } from '@mui/material'
import { Box } from '@mui/system'
import Login from './Login';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
        <Login/>
      </header>
    </div>
  )
}

export default App
