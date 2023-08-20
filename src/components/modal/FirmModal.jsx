import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {modalStyle} from "../../styles/globalStyle"
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import useStockCall from '../../hooks/useStockCall';


export default function FirmModal({open, handleClose, info, setInfo}) {


const {postStockData, putStockData} = useStockCall()
const handleChange = (e) => {
const {name,value} = e.target
setInfo({...info, [name]:value }) //! değişken olduğu için squarebrakket kullandık yoksa strring algılar ve . ile ulaşamayız.
}

const handleSubmit = (e) => {
  
  e.preventDefault()
  console.log(info.id)
  if (info.id) {
    putStockData("firms", info)
  } else {
    postStockData("firms", info)
  }

  handleClose()
 
}

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} component="form" onSubmit={handleSubmit}>
                  <TextField
                    label="Firm Name"
                    name="name"
                    id="name"
                    type="text"
                    variant="outlined"
                    required
                onChange={handleChange}
                value={info.name }
                  />
                  <TextField
                    label="Phone"
                    name="phone"
                    id="phone"
                    type="tel"
                    variant="outlined"
                    required
                onChange={handleChange}
                value={info.phone }
                  />
                  <TextField
                    label="Address"
                    name="address"
                    id="address"
                    type="text"
                    variant="outlined"
                    required
                onChange={handleChange}
                value={info.address }
                  />
                  <TextField
                    label="Image"
                    name="image"
                    id="image"
                    type="url"
                    variant="outlined"
                    required
                onChange={handleChange}
                value={info.image }
                  />

<Button variant="contained" type="submit">
                    Submit
</Button>
                </Box>
        </Box>
      </Modal>
    </div>
  );
}
