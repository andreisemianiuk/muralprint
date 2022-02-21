import React from 'react'
import s from './CartForm.module.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel'

type CartFormType = {
  close: () => void
}

export const CartForm = ({close}: CartFormType) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Товар добавлен в корзину!</h3>
      <div className={s.buttonsWrapper}>
        <Button variant={'contained'} aria-label={'continue shopping'} color={'primary'} size={'large'} onClick={close}>
          Продолжить покупки
        </Button>
        <Link to={'/cart'}>
          <Button variant={'contained'} aria-label={'go to cart'} color={'success'} size={'large'}>
            Перейти в корзину
          </Button>
        </Link>
      </div>
      <CancelIcon className={s.cancelBtn} aria-label={'close modal'} onClick={close}/>
    </div>
  )
}