import s from './AboutUs.module.scss'
import aboutUs from '../assets/about_us.svg'
import star from '../assets/star.svg'

export default function AboutUs(){
    return(
        <>
            <div id='about_us' className={s.aboutUs_box}>
                <img src={aboutUs} alt='Примеры ремонта'/>
                <div className={s.description_box}>
                    <img className={s.description_box__star} src={star}  alt='Звезда'/>
                    <h2 className={s.description_box__heading}>О нас</h2>
                    <p className={s.description_box__desc} >С нами ремонт квартиры превращается из стресса в приятный процесс.
                        Мы полностью берём все заботы на себя: материалы, сроки, контроль качества и финальную уборку.
                        Вы просто наслаждаетесь жизнью, а в итоге получаете современное,
                        уютное и функциональное пространство, в котором хочется жить.</p>

                </div>
            </div>
        </>
    )
}