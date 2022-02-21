import React, { useEffect } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import image2 from './images/12.jpg'
import Calculator from '../Calculator/Calculator'
import { useDispatch, useSelector } from 'react-redux'
import { cardSelectors } from '../../redux/card/cardSelectors'
import { cardActions } from '../../redux/card/cardSlice'
import styles from './Cards.module.css'

const Cards = () => {
  const dispatch = useDispatch()
  const cards = useSelector(cardSelectors.getCardsInfo)
  
  useEffect(()=>{
    const clear = () => dispatch(cardActions.clearAllActiveButtons())
    return () => {
      clear()
    }
  },[dispatch])
  
  const images = [
    {url: image2},
  ]
  
  const onLabelClick = (orderId: string, id: string) => {
    dispatch(cardActions.setIsActive({buttonId: orderId, typeId: id}))
    dispatch(cardActions.setDisabled({buttonId: orderId, typeId: id}))
  }
  
  return (
    <div className={styles.postalContainer}>
        <SimpleImageSlider
          width={290}
          height={500}
          images={images}
          showBullets={false}
          showNavs={true}
          navMargin={0}
        />
      <Calculator arr={[cards]} onLabelClick={onLabelClick}/>
    </div>
  )
}

export default Cards