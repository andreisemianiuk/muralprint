import React, { useEffect } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import image1 from './images/8.jpg'
import image2 from './images/9.jpg'
import image3 from './images/10.jpg'
import Calculator from '../Calculator/Calculator'
import { useDispatch, useSelector } from 'react-redux'
import { noteSelectors } from '../../redux/note/noteSelectors'
import { noteActions } from '../../redux/note/noteSlice'
import styles from './Notebook.module.css'

const Notebook = () => {
  const dispatch = useDispatch()
  const notes = useSelector(noteSelectors.getNotesInfo)
  
  useEffect(()=>{
    const clear = () => dispatch(noteActions.clearAllActiveButtons())
    return () => {
      clear()
    }
  },[dispatch])
  
  const images = [
    {url: image3},
    {url: image1},
    {url: image2},
  ]

  const onLabelClick = (orderId: string, id: string) => {
    dispatch(noteActions.setIsActive({buttonId: orderId, typeId: id}))
  }
  
  return (
    <div className={styles.notebookContainer}>
        <SimpleImageSlider
          width={290}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
          navMargin={0}
        />
        <Calculator arr={[notes]} onLabelClick={onLabelClick}/>
    </div>
  )
}

export default Notebook