import React from "react";

//material Ui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Service = (props) => {
  const { img, name, description } = props.service;
  return (
    <Card sx={{ maxWidth: 345, my: 5, height: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="cavity"
          sx={{ p: 3 }}
          style={{ width: "auto", margin: "0px auto" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Service;
