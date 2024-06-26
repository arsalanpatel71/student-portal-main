import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomArrowIcon = (props) => (
  <div
    style={{
      marginRight: "1rem",
      display: "flex",
      alignItems: "center",
    }}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </div>
);

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function DropdownField({ label, options, id, onChange }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    onChange(value);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: "25vw",
          boxShadow: 0.5,
          border: "none",
          bgcolor: "#FFFFFF",
          borderRadius: 1,
          marginBottom: "2.5rem",
        }}
      >
        <InputLabel id={`dropdown-label-${id}`}>{label}</InputLabel>
        <Select
          labelId={`dropdown-label-${id}`}
          id={`dropdown-${id}`}
          value={personName} //
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
          IconComponent={CustomArrowIcon}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, personName, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
