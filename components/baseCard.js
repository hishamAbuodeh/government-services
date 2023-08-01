import React from "react";

import {
  Card,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";

const BaseCard = (props) => {

  return (
    <Card sx={{ minWidth: '85%' }} dir="rtl">
      <Box p={2} display="flex" alignItems="center" justifyContent='space-between'>
        <Typography variant="h4">{props.title}</Typography>
        {props.right?
          <div 
            style={{display:'flex',alignItems:'center'}}
            onClick={() => props.onClick(0)}
          >
            <Typography variant="h6" style={{marginLeft:10}}>الرجوع</Typography>
            <FeatherIcon
              icon={props.iconType}
              width="25"
              height="25"
            />
          </div>
        :
          <></>
        }
      </Box>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default BaseCard;
