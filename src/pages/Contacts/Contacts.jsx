import { Typography } from '@mui/material'
import cls from './Contacts.module.css'
import phone from "../../assets/phone.png"
import addres from "../../assets/addres.png"
import inst from "../../assets/inst.png"
import star from "../../assets/star.png"
import { useEffect } from 'react'

const Contacts = () => {
    
  return (
    <div className='container'>
            <Typography variant='h3' fontSize={"40px"} pt={"50px"} pb={"60px"}>Контакты</Typography>
        <div className={cls.wrap}>
            <div>
              <div>
                <img src={phone} alt="" />
                <h4 className={cls.text}>Телефон:</h4> 
                <h3 className={cls.texttwo}>+7 (965) 237-44-49</h3>
              </div>
              <div>
                <img src={addres} alt="" />
                <h4 className={cls.text}>Адреса:</h4> 
                <h3 className={cls.texttwo}>г. Воронеж, ул. Плехановская, д. 18</h3>
              </div>
              <div>
                <img src={inst} alt="" />
                <h4 className={cls.text}>Социальные сети:</h4> 
                <h3 className={cls.texttwo}>vk.com/long_link_name <br/>instagram.com/long_ling_name</h3>
              </div>
              <div>
                <img src={star} alt="" />
                <h4 className={cls.text}>Реквизиты:</h4> 
                <h3 className={cls.texttwo}>ООО "No Doors Technology" <br/>ИНН: 3123386455 <br/>ОГРН: 1163123062222 <br/>КПП: 312301001</h3>
              </div>
            </div>
            <div className={cls.map}>
            <iframe frameborder="no"  width="100%" height="381" src="http://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A42.88036688693864%2C%22lon%22%3A74.58628892898561%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22org%22%3A%2270000001019362491%22%7D"></iframe>
        </div>
        </div>
    </div>
  )
}

export default Contacts