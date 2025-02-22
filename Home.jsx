import { Card, CardContent, Grid, Typography, CardMedia, CardActions } from "@mui/material";
import Button from '@mui/material/Button';
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ margin: "2%", backgroundColor: "white", color: "black", minHeight: "100vh", padding: "20px" }}>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={post.img_url} 
                title={post.title} 
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content} {/* Use content instead of body */}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained">Delete</Button>
                <Button variant="contained">Update</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;