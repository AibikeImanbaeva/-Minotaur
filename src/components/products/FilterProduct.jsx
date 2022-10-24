import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useProducts } from "../../contexts/ProductContextProvider";


export default function ControlledRadioButtonsGroup() {
  //custom
  const {fetchByParams} = useProducts()

 

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Categories</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        //custom
       defaultValue="all"
        onChange={(e)=> fetchByParams("type", e.target.value)}
      >
        <FormControlLabel value="all" control={<Radio />} label="весь ассортимент" />
        <FormControlLabel value="makarons" control={<Radio />} label="макаронсы" />
        <FormControlLabel value="eclairs" control={<Radio />} label="эклеры" />
        <FormControlLabel value="giftbaskets" control={<Radio />} label="подарочные наборы" />
        <FormControlLabel value="caramel" control={<Radio />} label="карамель на палочке" />
        <FormControlLabel value="waffles" control={<Radio />} label="вафельные трубочки" />
        <FormControlLabel value="chokpotato" control={<Radio />} label="десерт картошка" />
      </RadioGroup>
    </FormControl>
  );
}