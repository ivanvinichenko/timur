import s from './Portfolio.module.scss'
import CustomSwiper from './CustomSwiper'
import room1 from '../assets/room1.jpg'
import room2 from '../assets/room2.jpg'
import room3 from '../assets/room3.jpg'
import room4 from '../assets/room4.jpg'
import room5 from '../assets/room5.jpg'
import room6 from '../assets/room6.jpg'
import room7 from '../assets/room7.jpg'
import room8 from '../assets/room8.png'
import room9 from '../assets/room9.jpg'
import room10 from '../assets/room10.jpg'

export default function Portfolio(){
    return(
    <>
        <h2 id='portfolio' className={s.portfolio_heading}>Наши Работы</h2>
        <div className={s.portfolioBox}>
            <div className={s.portfolioBox__item}>
                <CustomSwiper images={[room1, room2, room3, room4, room5]} />
                <p className={s.portfolioBox__item__location}>Г. МОСКВА, ЖК “МОСКОВСКИЙ”</p>
                <p className={s.portfolioBox__item__desc}>Ремонт  однокомнатной квартиры  </p>
                <div className={s.portfolioBox__item__information}>
                    <div className={s.portfolioBox__item__priceBox}>
                        <p className={s.portfolioBox__item__information__priceBox__heading}>СТОИМОСТЬ РЕМОНТА</p>
                        <p className={s.portfolioBox__item__information__priceBox__price}>527 871₽</p>
                    </div>
                    <div className={s.portfolioBox__item__information__squareBox}>
                        <p className={s.portfolioBox__item__information__squareBox__heading}>ПЛОЩАДЬ</p>
                        <p className={s.portfolioBox__item__information__squareBox__square}>40.55м2</p>
                    </div>
                </div>
            </div>
            <div className={s.portfolioBox__item}>
                <CustomSwiper images={[room6, room7, room8, room9, room10]}/>
                <p className={s.portfolioBox__item__location}>Г. МОСКВА, ЖК “КУТУЗОВСКИЙ ГРАД 2”</p>
                <p className={s.portfolioBox__item__desc}>Ремонт  двухкомнатной квартиры</p>
                <div className={s.portfolioBox__item__information}>
                    <div className={s.portfolioBox__item__information__priceBox}>
                        <p className={s.portfolioBox__item__information__priceBox__heading}>СТОИМОСТЬ РЕМОНТА</p>
                        <p className={s.portfolioBox__item__information__priceBox__price}>987 871₽</p>
                    </div>
                    <div className={s.portfolioBox__item__information__squareBox}>
                        <p className={s.portfolioBox__item__information__squareBox__heading}>ПЛОЩАДЬ</p>
                        <p className={s.portfolioBox__item__information__squareBox__square}>57.9м2</p>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    )
}