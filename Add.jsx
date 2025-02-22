import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = () => {
    axios
      .post("http://localhost:3001/add", inputs)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "600px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Title"
            onChange={inputHandler}
            name="title"
            value={inputs.title}
            fullWidth
            InputProps={{
              style: {
                backgroundColor: "white", // Set background color to white
                border: "1px solid black", // Set border color to black
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black', // Set border color to black
                },
                '&:hover fieldset': {
                  borderColor: 'black', // Set border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black', // Set border color when focused
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Content"
            onChange={inputHandler}
            name="content"
            value={inputs.content}
            multiline
            rows={4}
            InputProps={{
              style: {
                backgroundColor: "white", // Set background color to white
                border: "1px solid black", // Set border color to black
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black', // Set border color to black
                },
                '&:hover fieldset': {
                  borderColor: 'black', // Set border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black', // Set border color when focused
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Image URL"
            onChange={inputHandler}
            name="img_url"
            value={inputs.img_url}
            InputProps={{
              style: {
                backgroundColor: "white", // Set background color to white
                border: "1px solid black", // Set border color to black
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black', // Set border color to black
                },
                '&:hover fieldset': {
                  borderColor: 'black', // Set border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black', // Set border color when focused
                },
              },
            }}
          />

          <Button variant="contained" color="secondary" onClick={addData}>
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Add;