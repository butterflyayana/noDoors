import cls from "./Cart.module.css"
import { Typography } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";


const Cart = () => {
    const data2 = useSelector(state => state.cart.items)
  return (
    <div className='container'>
        <div className={cls.cart__wrap}>
            <Typography fontSize={"36px"} mb={"60px"} fontWeight={"500"}  variant="h3">Ваша Корзина</Typography>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" >
                  Название товара
                </TableCell>
                <TableCell align="right">Цена (Розница)</TableCell>
                <TableCell align="right">Цена (Опт от 5)</TableCell>
                <TableCell align="right">Остаток</TableCell>
                <TableCell align="right">Количество</TableCell>
                <TableCell align="right">Сумма</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data2.map((row) => (
                <TableRow key={row.name}>
                  <TableCell >
                    <div style={{display: 'flex', gap: '20px'}}> 
                        <img width={80} src={row.image} alt="" />
                        <p>{row.name}</p>
                    </div>
                  </TableCell>
                  <TableCell align="right">{row.roznisa}</TableCell>
                  <TableCell align="right">{row.optom}</TableCell>
                  <TableCell align="right">{row.stock}</TableCell>
                  <TableCell align="right" >
                    <button>-</button>
                    <input type="text" style={{width:40}} />
                    <button>+</button>
                  </TableCell>
                  <TableCell align="right">{4000}</TableCell>
                  <TableCell align="right"> X </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Cart