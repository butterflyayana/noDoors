import { useState } from "react";
import cls from "./Brands.module.css"
import { MenuItem, Select } from "@mui/material";

const brandsName = [
    {
        name: "Apple",
        module: [
         "iPhone11",
         "iPhone XS Max",
         "iPhone XS",
         "iPhone XR",
         "iPhone X",
         "iPhone 8 Plus",
         "iPhone 8",
         "iPhone 7 Plus",
         "iPhone 7",
         "Apple "
        ]
    },
    {
        name: "Huawei",
        module: [
            "iPhone11",
            "iPhone XS Max",
            "iPhone XS",
            "iPhone XR",
            "iPhone X",
            "iPhone 8 Plus",
            "iPhone 8",
            "iPhone 7 Plus",
            "iPhone 7"
           ]
    },
    {
        name: "Xiaomi",
        module: [
            "iPhone11",
            "iPhone XS Max",
            "iPhone XS",
            "iPhone XR",
            "iPhone X",
            "iPhone 8 Plus",
            "iPhone 8",
            "iPhone 7 Plus",
            "iPhone 7"
           ]
    },
    {
        name: "Samsung",
        module: [
            "iPhone11",
            "iPhone XS Max",
            "iPhone XS",
            "iPhone XR",
            "iPhone X",
            "iPhone 8 Plus",
            "iPhone 8",
            "iPhone 7 Plus",
            "iPhone 7"
           ]
    },
]

const brandsName2 = [
    {
        name: "Питание и кабели "
    },
    {
        name: "Powerbank"
    },
    {
        name: "Акции"
    },
]


const Brands = () => {
    const [name, setName] = useState('');

const handleChange = (event) => {
  setName(event.target.value);
};

  return (
    <div className='container'>
      {brandsName.map(brName => (
       <Select
       sx={{
           boxShadow: "none",
           ".MuiOutlinedInput-notchedOutline": { border: 0 },
           "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
               {
                   border: 0,
               },
           "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
               {
                   border: 0,
               },
       }}

       value={name}
       onChange={handleChange}
       displayEmpty
       inputProps={{'aria-label': 'Without label'}}
   >
       {brName.module.map(el => (
        <MenuItem  value="" key={el}>
            {el}
        </MenuItem>
       ))}
       
   </Select>
      ))}
    <div className={cls.left}>
      {brandsName2.map(brName2 => (
       <h4 className={cls.textMenu} key={name}>{brName2.name}</h4>
      ))}
      <h4 style={{color: "green", marginLeft: "auto"}}>Прайс лист</h4>
    </div>
    </div>
  )
}

export default Brands