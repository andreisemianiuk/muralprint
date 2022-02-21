import React from 'react'
import RedeemIcon from '@material-ui/icons/Redeem'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import {FeedbackForm} from '../FeedbackForm/FeedbackForm'
import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styles from './BusinessBox.module.css'
import {CartForm} from '../CartForm/CartForm'
import {Modal} from '@mui/material'
import {useDispatch} from 'react-redux'
import {cartActions} from '../../redux/product-cart/cartSlice'
import image from '../../common/images/bis-set.jpg'

const BusinessBox = () => {
    const dispatch = useDispatch()
    const [isOpenModal, setIsOpenModal] = React.useState(false)
    const handleOpenModal = () => setIsOpenModal(true)
    const handleCloseModal = () => setIsOpenModal(false)

    const blockInfo = [
        {
            id: 1,
            number: 1,
            title: 'КАЛЕНДАРЬ (тираж 30 шт.)',
            description: 'Рекламный постер 297х210 мм, 4+0, 250 гр., ламин. гл./мат., сшивка на три пружины,\n' +
                'сетка «стандарт», крепление: люверс, курсор.',
        },
        {
            id: 2,
            number: 2,
            title: 'БЛОКНОТ (тираж 30 шт.)',
            description: 'Формат А5, обложка 4+0, 250 гр., ламинация обложки мат./гл.,\n' +
                'блок б/печати, 40 листов, сшивка на пружину по короткой стороне.',
        },
        {
            id: 3,
            number: 3,
            title: 'ОТКРЫТКА (тираж 30 шт.)',
            description: '200х100 мм в готовом виде / формат А5, 1 биг, 4+4.',
        },
        {
            id: 4,
            number: 4,
            title: 'ПАКЕТ (тираж 30 шт.)',
            description: 'Под формат А4, бумага 170 гр. 4+0, ламинация мат./гл., люверсы,\n' +
                'веревочный ручки, укрепление дна.',
        },
    ]

    const styleForArrow = {
        width: '50px',
        height: '50px',
    }

    const addToCart = () => {
        const result = `Бизнес-набор, Цена: 504 BYN`
        dispatch(cartActions.addProduct(result))
        dispatch(cartActions.setProductsToLS())
        handleOpenModal()
    }

    return (
        <div className={styles.businessBoxContainer}>
            <Modal open={isOpenModal} onClose={handleCloseModal} className={styles.modal}>
                <CartForm close={handleCloseModal}/>
            </Modal>
            <div className={styles.blockInfoContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image}
                         alt="img"/>
                    <div className={styles.accordionWrapper}>
                        <div className={styles.textBlock}>
                        <span className={styles.title}>Закажите бизнес-набор по выгодной цене
                            <b className={styles.price}>16,80 BYN</b>
                        </span>

                        </div>
                        {blockInfo.map(info =>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{info.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {info.description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )}
                        <div className={styles.priceAll}>
                            <span className={styles.priceAllText}>Стоимость 30 подарочных наборов 504 белорусских рублей с НДС</span>
                            <Button color="secondary" variant="contained" onClick={addToCart}>
                                В корзину
                            </Button>
                            <RedeemIcon color="secondary" style={{
                                width: '100px',
                                height: '100px',
                                marginTop: '20px'
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.textWrapper}>
                    <div className={styles.firstDescription}>
                        <ArrowForwardIcon color="secondary" style={styleForArrow}/>
                        <span>Если вы не знаете, что подарить своим клиентам и партнерам на НОВЫЙ ГОД, но очень хотите порадовать их к празднику, <br/>
                            бизнес-набор будет ИДЕАЛЬНЫМ РЕШЕНИЕМ.
                        </span>
                    </div>
                    <div className={styles.firstDescription}>
                        <ArrowForwardIcon color="secondary" style={styleForArrow}/>
                        <span>Вам не нужно продумывать концепцию подарка и составлять техническое задание - <br/>
                            мы с удовольствием СДЕЛАЕМ ЭТО ЗА ВАС. Если у вас нет макета - тоже не проблема, наши дизайнеры предложат вам <br/>
                            стильные и интересные варианты.
                        </span>
                    </div>
                </div>
                <FeedbackForm/>
            </div>

        </div>
    )
}

export default BusinessBox