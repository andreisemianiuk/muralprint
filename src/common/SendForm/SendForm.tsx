import React, { ChangeEventHandler, CSSProperties, FormEventHandler, useState } from 'react'
import styles from './SendForm.module.css'
import { Button, NativeSelect, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../redux/store'
import { appActions } from '../../redux/app/appSlice'
import { send } from 'emailjs-com'
import { CircularProgress, TextareaAutosize, TextField } from '@material-ui/core'
import IsDone from '../IsDone/IsDone'
import { cartActions } from '../../redux/product-cart/cartSlice'
import { IProduct } from '../../redux/product-cart/cartTypes'
import { v1 } from 'uuid'
import s from '../../components/CartForm/CartForm.module.css'
import CancelIcon from '@mui/icons-material/Cancel'

type ModalForm = {
  style?: CSSProperties | undefined
  title?: string
  buttonTitle: string
  description: string
  orders?: IProduct[]
  close?: () => void
}

export const SendForm = ({orders,title,style,buttonTitle,description,close}: ModalForm) => {
  const dispatch = useDispatch()
  const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)
  const [isDone, setIsDone] = useState<boolean>(false)
  
  const [toSend, setToSend] = useState({
    userName: '',
    email: '',
    communication_method: '',
    phone: '',
    comment: '',
    cart: orders?.map(v => v.product).join(' ----- ') || '',
  })
  
  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement| HTMLSelectElement> = (e) => {
    setToSend({...toSend, [e.currentTarget.name]: e.currentTarget.value})
  }
  
  const sendMessage: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    dispatch(appActions.setIsFetching(true))
    
    send('mural_market_emailjs', 'template_naaawwo',
      toSend,'user_Srn03xsw1b1cYOFJ7H2PY')
      .then(result => {
        setIsDone(true)
        dispatch(cartActions.clearAllItems())
        console.log(result.text)
      }).catch(error => {
      console.log(error.text)
    }).finally(() => {
      dispatch(appActions.setIsFetching(false))
    })
    e.currentTarget.reset()
  }
  
  const optionsForSelect = [
    {id: v1(), value: 'Свяжитесь со мной по телефону', option: 'Звонок', name: ''},
    {id: v1(), value: 'Свяжитесь со мной по Viber', option: 'Viber', name: ''},
    {id: v1(), value: 'Свяжитесь со мной по Telegram', option: 'Telegram', name: ''},
    {id: v1(), value: 'Свяжитесь со мной по Email', option: 'Email', name: ''},
  ]
  
  return <div className={styles.container} style={style}>
    {title && <h3 className={styles.title}>{title}</h3>}
    <Stack direction={'column'}>
      <form className={styles.form} onSubmit={sendMessage}>
        {isDone ?
          <IsDone/>
          : !isFetching
            ?
            <>
              <TextField id="outlined-basic" label="Ваше имя" variant="standard"
                         size={'medium'} color="secondary" name="userName"
                         onChange={handleChange} style={inlineStyles.name}
              />
              <TextField id="outlined-basic" label="Ваш email" variant="standard"
                         size={'medium'} color="secondary" name="email"
                         onChange={handleChange} style={inlineStyles.email}
              />
              <div className={styles.contactChoice}>
                <NativeSelect
                  name="communication_method"
                  onChange={handleChange}
                  value={toSend.communication_method}
                  variant={'standard'}
                  color={'secondary'}
                  className={styles.nativeSelect}
                >
                  {optionsForSelect.map(option =>
                    <>
                      <option
                        key={option.id}
                        className={styles.option}
                      >
                        {option.option}
                      </option>
                    </>,
                  )
                  }
                </NativeSelect>
              <TextField id="outlined-basic" label="Ваш телефон" variant="standard"
                         size={'small'} color="secondary" name="phone"
                         onChange={handleChange}
              />
              </div>
              <span className={styles.description}>{description}</span>
              <TextareaAutosize aria-label="minimum height" minRows={5} name="comment" onChange={handleChange}/>
            </>
            : <CircularProgress color="secondary" className={styles.circularProgress}/>}
        {(!isDone && !isFetching) &&
        <Button
          style={inlineStyles.button} className={styles.button}
          type={'submit'} variant={'contained'}
          color={'primary'} size={'large'}
        >
          {buttonTitle}
        </Button>
        }
      </form>
    </Stack>
    <CancelIcon className={s.cancelBtn} aria-label={'close modal'} onClick={close}/>
  </div>
}

// styles

const inlineStyles = {
  name: {
    width: '300px',
    marginBottom: '20px'
  },
  email: {
    marginBottom: '10px'
  },
  button: {
    marginTop: '30px',
    backgroundColor: '#f50057',
    transition: 'opacity 0.3s'
  }
}