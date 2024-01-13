import React from "react";
import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

export default function LoginButton({ title = "LogIn", ...props }) {
  return(
    <Button
    onClick={()=> {}}
    startIcon={<LoginIcon />}
    variant="contained"
    size="medium"
    {...props}
    >
    {title}
    </Button>
  )
}
