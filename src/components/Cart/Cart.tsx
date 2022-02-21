import React, { useEffect } from 'react'
import { Button, Container, Grid, IconButton, Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { cartSelectors } from '../../redux/product-cart/cartSelectors'
import { cartActions } from '../../redux/product-cart/cartSlice'
import DeleteIcon from '@mui/icons-material/Delete'
import styles from './Cart.module.css'
import { SendForm } from '../../common/SendForm/SendForm'

export const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(cartSelectors.getCartInfo).cart
  const sum = useSelector(cartSelectors.getCartInfo).sum
  
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)
  
  const setToLS = () => {
    dispatch(cartActions.setProductsToLS())
  }
  
  useEffect(() => {
    dispatch(cartActions.getSum())
    return () => setToLS()
  }, [dispatch, sum, cart])
  
  const deleteItem = (id: string) => {
    dispatch(cartActions.deleteItem({buttonId: id}))
  }
  
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Modal open={isOpenModal} onClose={handleCloseModal} className={styles.modal}>
        <SendForm
          close={handleCloseModal}
          title={'Заполните контактную форму'}
          description={'Комментарии к заказу'}
          buttonTitle={'Заказать'}
          orders={cart}
        />
      </Modal>
      <h1 className={styles.title}>Корзина товаров</h1>
      <Grid direction="column" margin={2} padding={1}>
        {cart.length
          ? cart.map(c =>
            (<div className={styles.item} id={c.id}>
              {c.product}
              <IconButton aria-label="delete" onClick={() => deleteItem(c.id)}>
                <DeleteIcon/>
              </IconButton>
            </div>),
          ) : <div>Ваша корзина пуста</div>
        }
      </Grid>
      <div className={styles.sum}><b>Итого: {sum} BYN</b></div>
      <div className={styles.buttonWrapper}>
        <Button
          onClick={handleOpenModal}
          style={buttonStyles}
          className={styles.btn}
          variant="contained"
          aria-label="make deal"
        >
          Оформить заказ
        </Button>
      </div>
    </Container>
  )
}

const buttonStyles = {
  backgroundColor: '#f05',
  color: '#ffffff',
  transition: 'font-size 0.5s',
}