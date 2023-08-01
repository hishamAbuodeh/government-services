import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MyCard({handleChange,data,index}) {
  return (
    <Card sx={{ maxWidth: '29%', marginBottom:'2%', marginLeft:'2%', marginRight:'2%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="25%"
          image={data.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" dir="rtl">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" dir="rtl">
            {data.brief}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions dir="rtl">
        <Button size="large" color="primary" dir="rtl"
            onClick={() => handleChange(1,index)}
        >
          المزيد
            <ArrowBackIcon style={{marginRight:10}}/>
        </Button>
      </CardActions>
    </Card>
  );
}