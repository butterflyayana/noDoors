import cls from "./popular.module.css"
import { useSelector, useDispatch} from "react-redux"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Input } from "@mui/material";
import { addToCart } from "../../redux/Slices/cartSlice";
import { addToHeart } from "../../redux/Slices/heartSlice";
import { showAlert,  } from "../../redux/Slices/alertSlice";


const PopularProducts = (props) => {
    const {data} = props
    const dispatch = useDispatch()
    const addItem = (product ) => {
      dispatch(showAlert())
      dispatch(addToCart(product))
    }
    const addHeart = (product) => {
      dispatch(addToHeart(product))
    }
    

    console.log(data);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const Tag = ({ tag }) => {
      let tagColor;
      switch (tag) {
          case 'Новинки':
              tagColor = 'blue';
              break;
          case 'Скидка':
              tagColor = 'green';
              break;
          case 'Популярное':
              tagColor = 'red';
              break;
      }
      return (
          <span
              style={{
                  backgroundColor: tagColor,
                  padding: '0.2rem 0.5rem',
                  borderRadius: '10px',
                  color: 'white',
                  marginRight: '0.5rem',
                  fontSize: "14px",
                  
              }}
          >
              {tag}
          </span>
      );
  };
  return (
    <div >
        <h2>Популярные Товары</h2>
        <div style={{display: "flex", gap: "30px"}}>
        {data.map(el => (
            <Card sx={{ maxWidth: "461px", position: 'relative' }}>
             <Typography sx={{width: '50%'}}>
                {el.tags.map(tag => (
                    <Tag key={tag} tag={tag} />
                ))}
            <Checkbox onClick={() => addHeart(el)}  sx={{marginLeft: "13rem", marginTop: "-2.2rem"}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>
            </Typography>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={`http://localhost:5173/popular.png`}
              />
            <CardContent>
              <Typography  gutterBottom variant="h5" component="div">
                {el.name}
              </Typography>
              <Typography style={{color: "#686868", fontSize: "14px"}} >
                Разница: <br />
                Оптом (от 5): <br />
                В Наличии:
              </Typography>
              <Typography style={{textAlign: "end", marginTop: "-4rem", color: "black", fontSize: "14px"}} variant="body2" color="text.secondary">
                {el.roznisa} <br />
                {el.optom} <br />
                {el.stock}
              </Typography>
              <Stack sx={{display: 'flex'}} spacing={2} direction="row">
                 <Input sx={{width: '50px', 'input': {textAlign: 'center'}}} value={96}/>
                <Button onClick={() => addItem(el)} sx={{color: "#399a3a", borderColor: "#399a3a", '&:hover': {borderColor: '#399a3a'} }} variant="outlined">В корзину</Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
        </div>
    </div>
  )
}

export default PopularProducts