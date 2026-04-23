import s from './Guarantee.module.scss'
import star from '../assets/star.svg'


export default function Guarantee(){
    return(
        <>
            <div className={s.guarantee}>
                <h2 className={s.guarantee__heading}>Гарантия</h2>
                <img className={s.guarantee__star} src={star} alt='Звезда'></img>
                <p className={s.guarantee__desc}>
                    Фиксируем гарантию В ДОГОВОРЕ. Если что-то пойдет не так,
                     приедем и исправим всё БЕСПЛАТНО за свой счет.
                </p>
            </div>
        </>
    )
}