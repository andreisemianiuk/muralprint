import React, { useEffect } from 'react'
import styles from './Package.module.css'
import SimpleImageSlider from 'react-simple-image-slider'
import image1 from './images/13.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { packSelectors } from '../../redux/pack/packSelectors'
import { packActions } from '../../redux/pack/packSlice'
import Calculator from '../Calculator/Calculator'

const Package = () => {
  const dispatch = useDispatch()
  const paperPacks = useSelector(packSelectors.getPaperPacksInfo)
  const giftBoxPacks = useSelector(packSelectors.getGiftBoxPacksInfo)
  const craftPacks = useSelector(packSelectors.getCraftPacksInfo)
  
  useEffect(() => {
    const clear = () => {
      dispatch(packActions.clearAllActiveButtons())
    }
    return () => {
      clear()
    }
  }, [dispatch])
  
  const onLabelClick = (orderId: string, id: string) => {
    dispatch(packActions.setIsActive({buttonId: orderId, typeId: id}))
    dispatch(packActions.setDisabled({buttonId: orderId, typeId: id}))
  }
  
  const images = [
    {url: image1},
  ]
  return (
    <div className={styles.packageContainer}>
        <SimpleImageSlider
          width={310}
          height={540}
          images={images}
          showBullets={false}
          showNavs={true}
          navMargin={0}
        />
        <Calculator arr={[paperPacks, giftBoxPacks, craftPacks]} onLabelClick={onLabelClick}/>
    </div>
  )
}

export default Package