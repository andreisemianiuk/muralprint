import React, { useEffect } from 'react'
import styles from './Header.module.css'
import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Badge } from '@mui/material'
import { cartSelectors } from '../../redux/product-cart/cartSelectors'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/product-cart/cartSlice'

const Header = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cartActions.getProductsFromLS())
  }, [dispatch])
  
  const count = useSelector(cartSelectors.getCartInfo).cart.length
  
  const onAddressClick = () => {
    window.open('https://yandex.by/maps/157/minsk/house/Zk4YcAdiTUAEQFtpfXVwcH9gZw==/?ll=27.602453%2C53.911333&z=17.09')
  }
  
  const companyInfo = [
    {
      id: 1,
      component: () => <HomeIcon color="secondary" className={styles.logo} onClick={onAddressClick}/>,
      description: 'Минск, П. Бровки, 24',
    },
    {
      id: 2,
      component: () => <MailOutlineIcon color="secondary" className={styles.logo}/>,
      description: 'market@mural.by',
    },
    {
      id: 3,
      component: () => <PhoneIcon color="secondary" className={styles.logo}/>,
      description: '+375 29 380 90 05',
    },
  ]
  
  return (
    <div className={styles.headerContainer}>
      <Link to={'/'} className={styles.logoContainer}>
        <span className={styles.mural}>MURAL </span>
        <span className={styles.polygraph}>ПОЛИГРАФИЯ</span>
      </Link>
      <div className={styles.aboutCompany}>
        {companyInfo.map(info =>
          (<span
            key={info.id}
            className={styles.description}
            style={info.id === 1 ? {cursor: 'pointer'} : {}}
            onClick={info.id === 1 ? onAddressClick : () => {
            }}
          >
          {info.component()}
            {info.description}
        </span>))}
      </div>
      <Link to={'/cart'} className={styles.cartContainer}>
       <div>
         <span className={styles.cartName}>КОРЗИНА</span>
         <IconButton aria-label="add to shopping cart" style={{paddingLeft: '0'}}>
           <Badge badgeContent={count} color={'primary'}>
             <AddShoppingCartIcon sx={{color: '#f05'}}/>
           </Badge>
         </IconButton>
       </div>
      </Link>
    </div>
  )
}

export default Header