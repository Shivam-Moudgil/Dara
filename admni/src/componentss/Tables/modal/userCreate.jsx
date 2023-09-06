import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MDTypography from "components/MDTypography";

import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useState } from 'react';
import  axios from 'axios';
const obj = {
  email: "",
    password: "",
  name:""
};
const currencies = [
  {
    value: 'agent',
    label: 'Agent',
  },
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'sub-admin',
    label: 'Sub Admin',
  },
  {
    value: 'manager',
    label: 'Manager',
  },
];
export default function FormDialog({handleClickOpen,handleClose,open}) {
  const [load, setLoad] = useState(false);
  const [text, setText] = useState(obj);
  const handleChange = (e) => {
    const { type, checked,id, value } = e.target;
    // const inputValue = type === "checkbox" ? checked : value;
  setText({...text, [id]: value});
};
const {email, password,name} = text;

 
const handleSubmit = async() => {
  if (email !== "" && password !== "") {
    setLoad(true);
  await axios.post("/api/auth/login",{email:email,password:password,name:name})
      .then((res) => {
        setLoad(false);
console.log(res)
      })
      .catch((err) => {
        setLoad(false);
        console.log(err);
      
      });

    setText(obj);
  } else {
    toast({
      title: "Input fields first",
      position: "top-right",
      status: "warning",
      duration: 2000,
      isClosable: true,
    });
  }
};
  return (
    <div>
      <Button variant="outlined" onClick={()=>{handleClickOpen(true)}}>
        Create an User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User form</DialogTitle>
        <DialogContent >
            <Box width={"500px"} display="flex" flexDirection={"column"} gap="20px" >
<TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={handleChange}
            value={name}
            label="Name"
            type="name"
            fullWidth
            variant="standard"
          />
<TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            onChange={handleChange}
            value={email}
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            onChange={handleChange}
            value={password}
            type="password"
            fullWidth
            variant="standard"
          />
          {/* <TextField
         id="standard-select-currency"
         select
         label="Select"
         defaultValue="agent"
         onChange={handleChange}
         value={email}
         fullWidth
         helperText="Please select user role"
         variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        
        <Button p='4' onClick={handleSubmit} variant='contained'>
       Create
      </Button>
        </Box>
        </DialogContent>
       
        <DialogActions>
          <Button onClick={()=>{handleClose(false)}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
