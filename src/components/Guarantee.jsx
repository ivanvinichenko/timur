import s from './Guarantee.module.scss'


export default function Guarantee(){
    return(
        <>
            <div className={s.guarantee}>
                <h2 className={s.guarantee__heading}>Гарантия</h2>
                <p className={s.guarantee__desc}>
                    Фиксируем гарантию В ДОГОВОРЕ. Если что-то пойдет не так,
                     приедем и исправим всё БЕСПЛАТНО за свой счет.
                </p>
            </div>
        </>
    )
}