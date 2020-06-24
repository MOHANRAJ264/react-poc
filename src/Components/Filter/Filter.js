import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor:'#ccc',
    borderRadius: "15px",
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" style={{marginTop:"5px",marginLeft:"10px"}}>Filter</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Mobile</MenuItem>
          <MenuItem value={20}>Mobile Accessories</MenuItem>
          <MenuItem value={30}>Laptop</MenuItem>
          <MenuItem value={30}>Laptop Accessories</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
