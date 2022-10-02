//adapted from material UI's website https://mui.com/material-ui/react-select/
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const dietaryrestrictions = [
  'Peanut Allergy Friendly',
  'Nut Allergy Friendly',
  'Vegan Friendly',
  'Vegetarian Friendly',
];

export default function MuiMultiselect(props) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Dietary Tag(s)</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={props.value}
          onChange={(e) => props.setter(e.target.value)}
          input={<OutlinedInput label="Dietary Restrictions" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {dietaryrestrictions.map((dietaryrestriction) => (
            <MenuItem key={dietaryrestriction} value={dietaryrestriction}>
              <Checkbox checked={props.value.indexOf(dietaryrestriction) > -1} />
              <ListItemText primary={dietaryrestriction} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}