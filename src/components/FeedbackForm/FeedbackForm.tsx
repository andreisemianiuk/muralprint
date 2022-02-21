import React from 'react'
import styles from './Feedback.module.css'
import { SendForm } from '../../common/SendForm/SendForm'
import { Button, Modal } from '@mui/material'

export const FeedbackForm = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)
  
  return (
    <div className={styles.feedbackFormContainer}>
      <div className={styles.descriptionContainer}>
        <span className={styles.headerDescription}>Вы также можете оставить заявку <br/> для расчета тиража</span>
        <span className={styles.descriptionText}>Наши менеджеры ответят Вам в течении 15 минут.</span>
      </div>
      <Button
        onClick={handleOpenModal} aria-label={'open modal'} className={styles.button}
        color={'secondary'} variant={'contained'} style={inlineStyle.button}
      >
        Оставить заявку
      </Button>
      <Modal open={isOpenModal} onClose={handleCloseModal} style={inlineStyle.modal}>
        <SendForm
          close={handleCloseModal}
          buttonTitle={'Отправить заявку'}
          description={'Параметры заказа'}
        />
      </Modal>
    </div>
  
  )
}

const inlineStyle = {
  button: {
    backgroundColor: '#f05'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
