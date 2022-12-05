import React from "react";

//material Ui
import {
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Card,
  Grid,
} from "@mui/material";

const Review = (props) => {
  const { img, name, description } = props.review;
  return (
    <Card sx={{ maxWidth: 345, my: 5, height: "auto" }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Grid container spacing={2}>
          <Grid xs={4} sm={4} md={4}>
            <CardMedia
              component="img"
              image={img}
              alt="person"
              sx={{ p: 3 }}
              style={{ width: "auto", margin: "0px auto" }}
            />
          </Grid>
          <Grid
            xs={8}
            sm={8}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {new Date().toDateString()}
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default Review;
