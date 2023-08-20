import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import { btnStyle } from '../styles/globalStyle';
import useStockCall from '../hooks/useStockCall';




 const FirmCard = ({firm , handleOpen, info ,setInfo}) => {
  const {deleteStockData} = useStockCall();

  return (
    <Card sx={{mt:5, p:2, width:"300px", height:"400px", display:"flex", justifyContent: "space-between", flexDirection:"column",    alignItems: "center",}}> 
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {firm.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {firm.address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={firm.name}
        title={firm.name}
  sx={{height:170 , p:2 , objectFit:"contain"}}
        image={firm.image}
      />
       <Typography gutterBottom variant="h5" color="text.secondary" >{firm.phone}</Typography>
     
      <CardActions>
      <EditIcon sx={btnStyle} onClick={()=>{
        handleOpen()
        setInfo(firm)
    
      }} />

      <DeleteOutlineIcon sx={btnStyle} onClick={()=>deleteStockData("firms", firm.id)} />
      </CardActions>
    </Card>
  );
}

export default FirmCard