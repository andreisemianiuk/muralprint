import React, { FormEventHandler } from 'react'
import { Button, Modal } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Calculator.module.css'
import { IButtonTypes, ICalendar } from '../../redux/calendar/calendarTypes'
import { Price } from '../Price/Price'
import { totalSumSelectors } from '../../redux/total-sum/totalSumSelectors'
import { INote } from '../../redux/note/noteTypes'
import { totalSumActions } from '../../redux/total-sum/totalSumSlice'
import { packActions } from '../../redux/pack/packSlice'
import { calendarActions } from '../../redux/calendar/calendarSlice'
import { noteActions } from '../../redux/note/noteSlice'
import { cardActions } from '../../redux/card/cardSlice'
import { cartActions } from '../../redux/product-cart/cartSlice'
import { CartForm } from '../CartForm/CartForm'

type Props = {
  arr: ICalendar[][] | INote[][]
  onLabelClick?: (id: string, orderId: string) => void;
}


const Calculator = ({arr, onLabelClick}: Props) => {
  const dispatch = useDispatch()
  
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)
  
  const totalSum = useSelector(totalSumSelectors.getTotalSum)
  
  const addToCart: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    let checked = Array.from(e.currentTarget)
      // @ts-ignore
      .filter(v => v.localName === 'input' && v.checked)
      // @ts-ignore
      .map((el, i, a) => (i !== a.length - 1) ? el.defaultValue : `Тираж: ${el.defaultValue}`)
    checked.push(`Цена: ${totalSum} BYN`)
    const result = checked.join(' / ')
    // @ts-ignore
    dispatch(cartActions.addProduct(result))
    dispatch(cartActions.setProductsToLS())
    handleOpenModal()
    
    dispatch(packActions.clearAllActiveButtons())
    dispatch(calendarActions.resetAll())
    dispatch(noteActions.clearAllActiveButtons())
    dispatch(cardActions.clearAllActiveButtons())
    choosePrice(0)
    e.currentTarget.reset()
  }
  
  const choosePrice = (total: number) => {
    dispatch(totalSumActions.setTotalPrice({total}))
  }
  
  return (
    <div className={styles.calculator}>
      <Modal open={isOpenModal} onClose={handleCloseModal} className={styles.modal}>
        <CartForm close={handleCloseModal}/>
      </Modal>
      {arr.length > 1 && <span>Вид:</span>}
      <form onSubmit={addToCart}>
        <div className={styles.infoContainer}>
          {arr.map(a => (
            <div className={styles.inputsWrapper}>
              {a.length > 0 && a.map(order =>
                <fieldset style={{border: 'none'}}
                          id={order.id}>
                  <p className={styles.title}>{order.title}</p>
                  <div className={styles.buttonsWrapper}>
                    {order.title !== 'Вид коробки подарочной:' ? order.buttons.map((button: IButtonTypes) =>
                        <React.Fragment key={order.id}>
                          <input
                            disabled={button.disabled} key={button.id}
                            className={styles.radioSelect} type="radio" id={button.id}
                            name={button.name} value={button.value} checked={button.active}
                            onClick={() => onLabelClick ? onLabelClick(button.id, order.id) : null}
                          />
                          <label key={button.id} className={styles.label} htmlFor={button.id}>
                            {button.description}
                          </label>
                        </React.Fragment>,
                      )
                      :
                      <div className={styles.giftBoxContainer}>
                        {order.buttons.map((button: IButtonTypes) =>

                           <div className={styles.buttonsGiftBoxPackWrapper} key={order.id}>
                             <input
                                 disabled={button.disabled} key={button.id}
                                 className={styles.radioSelect} type="radio" id={button.id}
                                 name={button.name} value={button.value} checked={button.active}
                                 onClick={() => onLabelClick ? onLabelClick(button.id, order.id) : null}
                             />
                             <label
                                 key={button.id}
                                 className={styles.label}
                                 htmlFor={button.id}
                             >
                               {button.description}
                             </label>
                             <div>
                               <img className={styles.giftBoxBtn} src={button.img} alt={''}/>
                             </div>
                           </div>
                        )}
                      </div>
                    }
                  </div>
                </fieldset>,
              )}
            </div>
          ))}
        </div>
        <div className={styles.price}>
          <Price/>
          <div className={styles.sumInfo}>
            <input type="text" name="итоговая сумма" id="text" className={styles.radioSelect} value={`${totalSum}BYN`}/>
            <label htmlFor="text">Сумма: {totalSum} BYN</label>
            <Button className={styles.submitBtn} type="submit" variant="contained" color="secondary"
                    disabled={!totalSum}>
              В корзину
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Calculator