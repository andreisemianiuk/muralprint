import React, { useEffect } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import Calculator from '../Calculator/Calculator'
import { useDispatch, useSelector } from 'react-redux'
import { calendarSelectors } from '../../redux/calendar/calendarSelectors'
import { calendarActions } from '../../redux/calendar/calendarSlice'
import image5 from './images/5.jpg'
import image6 from './images/6.jpg'
import image7 from './images/7.jpg'
import styles from './Calendar.module.css'


const Calendar = () => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const clear = () => dispatch(calendarActions.resetAll())
    return () => {
      clear()
    }
  },[dispatch])
  
  const quarterlyCalendarInfo = useSelector(calendarSelectors.getQuarterlyInfo)
  const homeCalendarInfo = useSelector(calendarSelectors.getHomeCalendarInfo)
  const pocketCalendarInfo = useSelector(calendarSelectors.getPocketCalendarInfo)
  
  const images = [
    {url: image7},
    {url: image5},
    {url: image6},
  ]
  
  const onLabelClick = (orderId: string, id: string) => {
    dispatch(calendarActions.setIsActive({buttonId: orderId, typeId: id}))
    dispatch(calendarActions.setDisabled({buttonId: orderId, typeId: id}))
  }
  
  return (
    <div className={styles.calendarContainer}>
        <SimpleImageSlider
          width={290}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
          navMargin={0}
        />
        <Calculator arr={[quarterlyCalendarInfo, homeCalendarInfo, pocketCalendarInfo]} onLabelClick={onLabelClick}/>
    </div>
  )
}

export default Calendar