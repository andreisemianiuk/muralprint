import React from 'react'
import styles from './Footer.module.css'
import HomeIcon from '@material-ui/icons/Home'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { Link } from 'react-router-dom'
import { SendForm } from '../../common/SendForm/SendForm'
import { Modal } from '@mui/material'

const Footer = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)

    const companyInfo = [
        {id: 1, component: () => <HomeIcon className={styles.logo}/>, description: 'Минск, П. Бровки, 24'},
        {id: 2, component: () => <MailOutlineIcon className={styles.logo}/>, description: 'market@mural.by'},
    ]

    return (
        <div className={styles.footerContainer}>
          <Modal open={isOpenModal} onClose={handleCloseModal} style={inlineStyle.modal}>
            <SendForm
              close={handleCloseModal}
              buttonTitle={'Отправить заявку'}
              description={'Параметры заказа'}
            />
          </Modal>
            <Link to={'/'} className={styles.companyName}>
                <span className={styles.mural}>MURAL </span>
                <span className={styles.polygraph}>ПОЛИГРАФИЯ</span>
            </Link>
            <div className={styles.aboutCompany}>
                {companyInfo.map(info => <span key={info.id}
                                               className={styles.description}>{info.component()}{info.description}</span>)}
            </div>
            <div className={styles.callWrapper}>
                <span className={styles.text}>Остались вопросы? Звоните</span>
                <span onClick={handleOpenModal} className={styles.backCall}>Закажи обратный звонок</span>
                <span className={styles.text}>+375 29 380 90 05</span>
            </div>
        </div>
    );
};

const inlineStyle = {
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Footer;