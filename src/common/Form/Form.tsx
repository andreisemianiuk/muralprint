import React, { FormEventHandler, useState } from 'react'
import styles from './Form.module.css'
import { Button, CircularProgress, TextareaAutosize, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../redux/store'
import { appActions } from '../../redux/app/appSlice'
import emailjs from 'emailjs-com'
import { v1 } from 'uuid'
import IsDone from '../IsDone/IsDone'
import { NativeSelect } from '@mui/material'


const Form = () => {
  const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)
  const [isDone, setIsDone] = useState<boolean>(false)
  
  const dispatch = useDispatch()
  
  const sendMessage: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    dispatch(appActions.setIsFetching(true))
    emailjs.sendForm('service_ddgqqvx', 'template_fw57khb',
        e.currentTarget, 'user_5pbCDxrMtWwImO972phqC')
      .then(result => {
        setIsDone(true)
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
  
  const onResetButtonClick = () => {
    setIsDone(false)
  }
  
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={sendMessage}>
        {isDone
          ? <IsDone/>
          : !isFetching
            ? <>
              <span className={styles.formLabel}>Имя</span>
              <TextField id="outlined-basic" label="Как к вам обращаться?" variant="filled"
                         color="secondary" name="userName"/>
              <span className={styles.formLabel}>Email</span>
              <TextField id="outlined-basic" label="Ваш email" variant="filled"
                         color="secondary" name="email"/>
              <span className={styles.formLabel}>Выберете способ общения</span>
              <div className={styles.contactChoice}>
                <NativeSelect
                  name="communication_method"
                  defaultValue={1}
                  inputProps={{
                    name: 'type',
                    id: 'uncontrolled-native',
                  }}
                  variant={'standard'}
                  color={'secondary'}
                  className={styles.nativeSelect}
                >
                  {optionsForSelect.map(option =>
                    <>
                      <option
                        value={option.value}
                        className={styles.option}
                      >{option.option}</option>
                    </>,
                  )
                  }
                </NativeSelect>
                <TextField id="outlined-basic" label="Ваш телефон" variant="standard"
                           color="secondary" name="phoneNumber"/>
              </div>
              <span className={styles.order}>Параметры заказа</span>
              <TextareaAutosize aria-label="minimum height" minRows={7} name="textField"/>
            </>
            : <CircularProgress color="secondary" className={styles.circularProgress}/>
        }
        <div className={styles.sendButton}>
          {(!isDone && !isFetching) &&
          <Button type="submit" variant="contained" color="secondary" disabled={isFetching}>
            Отправить заявку
          </Button>}
        </div>
      </form>
      {isDone && <Button onClick={onResetButtonClick} variant="contained" color="secondary">
        Заказать еще
      </Button>}
    </div>
  )
}

export default Form