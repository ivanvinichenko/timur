import s from './Services.module.scss'
import deconstruction from '../assets/deconstruction.svg'
import plastering from '../assets/plastering.svg'
import framing from '../assets/framing.svg'
import wiring from '../assets/wiring.svg'
import plumbing from '../assets/plumbing.svg'
import tiling from '../assets/tiling.svg'
import finishing from '../assets/finishing.svg'


export default function Services(){
    return(
        <>
            <h2 id='services'className={s.heading}>Наши Услуги</h2>
            <div className={s.pic_line}>
                <div className={s.pic_line__img_wrapper}>
                    <img src={deconstruction} alt='Демонтаж'/>
                    <p className={s.pic_line__img_wrapper__heading} >Демонтаж и перепланировка</p>
                    <p className={s.pic_line__img_wrapper__overlay_text}>Узнать больше</p>
                </div>
                <div className={s.pic_line__img_wrapper}>
                    <img src={plastering} alt='Черновое выравнивание'/>
                    <p className={s.pic_line__img_wrapper__heading}>Черновое выравнивание</p>
                    <p className={s.pic_line__img_wrapper__overlay_text}>Узнать больше</p>
                </div>
                
                <div className={s.pic_line__img_wrapper}>
                    <img src={framing} alt='Возведение перегородок'/>
                    <p className={s.pic_line__img_wrapper__heading}>Возведение перегородок</p>
                    <p className={s.pic_line__img_wrapper__overlay_text}>Узнать больше</p>
                </div>
                
            </div>
            <div className={s.pic_line}>
                <div className={s.pic_line__img_wrapper}>
                    <img src={wiring} alt='Инженерная электрика'/>
                    <p className={s.pic_line__img_wrapper__heading}>Инженерная электрика</p>
                    <p className={s.pic_line__img_wrapper__overlay_text}>Узнать больше</p>
                </div>
                
                <div className={s.pic_line__img_wrapper}>
                    <img src={plumbing} alt='Сантехника и отопление'/>
                    <p className={s.pic_line__img_wrapper__heading}>Сантехника и отопление</p>
                    <p className={s.pic_line__img_wrapper__overlay_text}>Узнать больше</p>
                </div>
                
                <div className={s.pic_line__img_wrapper}>
                    <img src={tiling} alt='Укладка плитки и керамогранита'/>
                    <p className={s.pic_line__img_wrapper__heading}>Укладка плитки и керамогранита</p>
                    <p className={s.pic_line__img_wrapper__overlay_text}>Узнать больше</p>
                </div>
                
                <div className={s.pic_line__img_wrapper}>
                    <img src={finishing} alt='Финишная отделка'/>
                    <p className={s.pic_line__img_wrapper__heading}>Финишная отделка</p>
                    <p className={s.pic_line__img_wrapper__overlay_text}>Узнать больше </p>
                </div>
                
            </div>
        </>
    )
}