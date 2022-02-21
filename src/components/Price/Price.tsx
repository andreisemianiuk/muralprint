import React, { useCallback, useEffect } from 'react'
import styles from './Price.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { pricesSelectors } from '../../redux/prices/pricesSelectors'
import { calendarSelectors } from '../../redux/calendar/calendarSelectors'
import { ICirculations } from '../../redux/prices/pricesTypes'
import { totalSumActions } from '../../redux/total-sum/totalSumSlice'
import { noteSelectors } from '../../redux/note/noteSelectors'
import { cardSelectors } from '../../redux/card/cardSelectors'
import { packSelectors } from '../../redux/pack/packSelectors'
import { IButtonTypes } from '../../redux/calendar/calendarTypes'

export const Price = () => {
  
  const dispatch = useDispatch()
  const choosePrice = useCallback((total: number) => {
    if (!Number.isNaN(total)) {
      dispatch(totalSumActions.setTotalPrice({total}))
    } else {
      dispatch(totalSumActions.setTotalPrice({total: 0}))
    }
  }, [dispatch])
  
  
  const getIds = (arr: any) => {
    return arr.map((a: any) => a.buttons.filter((button: IButtonTypes) => button.active))
      .map((v: any) => [...v][0]?.id || '')
  }
  
  // prices for different calendars
  const arrOfQuarterIds = getIds(useSelector(calendarSelectors.getQuarterlyInfo))
  const arrOfHomeIds = getIds(useSelector(calendarSelectors.getHomeCalendarInfo))
  const arrOfPocketIds = getIds(useSelector(calendarSelectors.getPocketCalendarInfo))
  
  let arrOfCalendarIds = arrOfQuarterIds[0].length
    ? arrOfQuarterIds : arrOfHomeIds[0].length
      ? arrOfHomeIds : arrOfPocketIds[0].length
        ? arrOfPocketIds : []
  
  let calendarPrices = []
  const calendars = useSelector(pricesSelectors.getCalendarsPrices).categories
  if (arrOfCalendarIds[0] === 'quarter' && arrOfCalendarIds[4].length) {
    calendarPrices = calendars.find((c: any) => c.id === arrOfCalendarIds[0])
      ?.advertisingFields?.find((f: any) => f.id === arrOfCalendarIds[1])
      ?.net.find((n: any) => n.id === arrOfCalendarIds[2])
      ?.binding.find((b: any) => b.id === arrOfCalendarIds[3])?.circulations
  }
  if (arrOfCalendarIds[0] === 'home' && (arrOfCalendarIds[3] === 'plus' || arrOfCalendarIds[3] === 'minus')
    && arrOfCalendarIds[4].length) {
    calendarPrices = calendars.find((c: any) => c.id === arrOfCalendarIds[0])
      ?.type?.find((t: any) => t.id === arrOfCalendarIds[1])
      ?.size?.find((s: any) => s.id === arrOfCalendarIds[2])
      ?.cursor?.find((c: any) => c.id === arrOfCalendarIds[3])
      ?.circulations
  }
  if (arrOfCalendarIds[0] === 'home' && arrOfCalendarIds[3] !== 'plus' && arrOfCalendarIds[3] !== 'minus'
    && arrOfCalendarIds[4].length) {
    calendarPrices = calendars.find((c: any) => c.id === arrOfCalendarIds[0])
      ?.type?.find((t: any) => t.id === arrOfCalendarIds[1])
      ?.size?.find((s: any) => s.id === arrOfCalendarIds[2])
      ?.circulations
  }
  if (arrOfCalendarIds[0] === 'pocket' && arrOfCalendarIds[3].length) {
    calendarPrices = calendars.find((c: any) => c.id === arrOfCalendarIds[0])
      ?.block?.find((t: any) => t.id === arrOfCalendarIds[1])
      ?.roundingCorners?.find((r: any) => r.id === arrOfCalendarIds[2])
      ?.circulations
  }
  
  // notes prices
  const arrOfNotesIds = getIds(useSelector(noteSelectors.getNotesInfo))
  const notes = useSelector(pricesSelectors.getNotesPrices)
  let notesPrices = []
  if (arrOfNotesIds[2].length) {
    notesPrices = notes?.size.find((c: any) => c.id === arrOfNotesIds[0])
      ?.noteBlock.find((n: any) => n.id === arrOfNotesIds[1])
      ?.circulations
  }
  
  // cards prices
  const arrOfCardsIds = getIds(useSelector(cardSelectors.getCardsInfo))
  let cardsPrices = useSelector(pricesSelectors.getCardsPrices)
    ?.paper.find((c: any) => c.id === arrOfCardsIds[0])
    ?.size.find((n: any) => n.id === arrOfCardsIds[1])
  if ((arrOfCardsIds[2] === 'laser-false') && (arrOfCardsIds[3] === 'liner-false')) {
    cardsPrices = cardsPrices?.attributes.find((n: any) => n.id === 'liner&laser-false')
      ?.lamination.find((n: any) => n.id === arrOfCardsIds[4])
      ?.circulations
  }
  if ((arrOfCardsIds[2] === 'laser-true') && (arrOfCardsIds[3] === 'liner-true')) {
    cardsPrices = cardsPrices?.attributes.find((n: any) => n.id === 'liner&laser-true')
      ?.lamination.find((n: any) => n.id === arrOfCardsIds[4])
      ?.circulations
  }
  if ((arrOfCardsIds[2] === 'laser-true') && (arrOfCardsIds[3] === 'liner-false')) {
    cardsPrices = cardsPrices?.attributes.find((n: any) => n.id === 'laser-true')
      ?.lamination.find((n: any) => n.id === arrOfCardsIds[4])
      ?.circulations
  }
  if ((arrOfCardsIds[2] === 'laser-false') && (arrOfCardsIds[3] === 'liner-true')) {
    cardsPrices = cardsPrices?.attributes.find((n: any) => n.id === 'liner-true')
      ?.lamination.find((n: any) => n.id === arrOfCardsIds[4])
      ?.circulations
  }
  
  // packs prices
  const arrOfPaperPacksIds = getIds(useSelector(packSelectors.getPaperPacksInfo))
  const arrOfCraftPacksIds = getIds(useSelector(packSelectors.getCraftPacksInfo))
  const arrOfGiftBoxPacksIds = getIds(useSelector(packSelectors.getGiftBoxPacksInfo))
  let arrOfPacksIds = arrOfPaperPacksIds[0].length
    ? arrOfPaperPacksIds : arrOfGiftBoxPacksIds[0].length
    ? arrOfGiftBoxPacksIds : arrOfCraftPacksIds[0].length
      ? arrOfCraftPacksIds : []
  
  const packs = useSelector(pricesSelectors.getPacksPrices).view
  let packsPrices = []
  if (arrOfPacksIds[0] === 'paper') {
    packsPrices = packs.find((p: any) => p.id === arrOfPacksIds[0])
      ?.size.find((v: any) => v.id === arrOfPacksIds[1])
      ?.weight.find((v: any) => v.id === arrOfPacksIds[2])
      ?.grommet.find((v: any) => v.id === arrOfPacksIds[3])
      ?.circulations
  }
  if (arrOfPacksIds[0] === 'craft') {
    packsPrices = packs.find((p: any) => p.id === arrOfPacksIds[0])
      ?.size.find((v: any) => v.id === arrOfPacksIds[1])
      ?.application.find((v: any) => v.id === arrOfPacksIds[2])
      ?.stickerSize.find((v: any) => v.id === arrOfPacksIds[3])
      ?.circulations
  }
  if (arrOfPacksIds[0] === 'gift-box') {
    packsPrices = packs.find((p: any) => p.id === arrOfPacksIds[0])
      ?.view.find((v: any) => v.id === arrOfPacksIds[1])
      ?.circulations
  }

  const emptyPrices = [
    {
      id: '10',
      name: 'coins',
      priceForSingle: '   -   ',
      priceForAll: '   -   ',
    },
    {
      id: '50',
      name: 'coins',
      priceForSingle: '   -   ',
      priceForAll: '   -   ',
    },
    {
      id: '100',
      name: 'coins',
      priceForSingle: '   -   ',
      priceForAll: '   -   ',
    },
    {
      id: '300',
      name: 'coins',
      priceForSingle: '   -   ',
      priceForAll: '   -   ',
    },
    {
      id: '500',
      name: 'coins',
      priceForSingle: '   -   ',
      priceForAll: '   -   ',
    },
  ]
  const prices = calendarPrices?.length
    ? calendarPrices : notesPrices?.length
      ? notesPrices : cardsPrices?.length
        ? cardsPrices : packsPrices?.length
          ? packsPrices
          : emptyPrices
  
  
  useEffect(() => {
    // @ts-ignore
    const checkedElementId = Array.from(ref.current.children).find((el: any) => el.children[0].checked)
      ?.innerHTML.match(/id=("\d+")/)[1]
    const currentPrice = prices.find((v: any) => v.id === checkedElementId?.slice(1, -1))
    
    if (currentPrice?.priceForAll && currentPrice.priceForAll !== '   -   ') {
      choosePrice(currentPrice?.priceForAll)
    } else {
      choosePrice(0)
    }
  }, [choosePrice, prices])
  
  const ref = React.useRef<HTMLDivElement>(null)
  
  const titleStyle = {
    width: '100%',
    color: '#fff',
    backgroundColor: '#f50057',
    paddingLeft: '10px',
  }
  
  const stripStyle = {
    width: '100%',
    color: '#fff',
    backgroundColor: '#f50057',
    paddingLeft: '15px',
  }
  
  return (
    <div className={styles.container}>
      <span className={styles.title}>Выберите тираж:</span>
      <div className={styles.leftWrapper}>
        <span className={styles.text} style={titleStyle}>Тираж, шт.</span>
        <span className={styles.text}>Стоимость <br/> всего тиража</span>
        <span className={styles.text}>Стоимость <br/> за единицу</span>
      </div>
      <div ref={ref} className={styles.rightWrapper}>
        {prices.map((circulation: ICirculations, i: number) =>
          <div key={i}>
            <input key={i} className={styles.radioSelect} value={circulation.id}
                   type="radio" id={circulation.id} name={circulation.name}
                   onClick={() => choosePrice(+circulation.priceForAll)}
            />
            <label key={i} className={styles.label} htmlFor={circulation.id}>
              <span style={stripStyle}>{circulation.id}</span>
              <span>{circulation.priceForAll}</span>
              <span>{circulation.priceForSingle}</span>
            </label>
          </div>,
        )}
      </div>
    </div>
  )
}

