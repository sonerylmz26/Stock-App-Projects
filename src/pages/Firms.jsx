import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import useStockCall from "../hooks/useStockCall";
import { Grid } from "@mui/material";
import FirmModal from "../components/modal/FirmModal"
const Firms = () => {
    const { getStockData  } = useStockCall();
    const { firms } = useSelector((state) => state.stock);
    const [info , setInfo ] = useState({
      name:"", phone:"", address:"", image:""
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      setInfo({
        name:"", phone:"", address:"", image:""
      })
    }

  useEffect(() => {
getStockData("firms");
}, []);

    return (
        <div>
            <Typography variant="h4" color={"error"} mb={3}>
                Firms
            </Typography>
            <Button sx={{backgroundColor:"#452C5A"}} onClick={handleOpen} variant="contained">NEW FIRM</Button>
       
       
<FirmModal open={open} handleClose={handleClose}  info={info}
              setInfo={setInfo}/>
<Grid container justifyContent={"center"} spacing={2}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard
              firm={firm}
              handleOpen={handleOpen}
              info={info}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>



        </div>
    );
};

export default Firms;
