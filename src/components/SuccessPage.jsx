import s from './SuccessPage.module.scss'
import check_circle from '../assets/check_circle.svg'


export default function SuccessPage(){
    return(
        <>
            <div  className={s.success_box}>
                <img src={check_circle}  className={s.success_box__check_circle}/>
                <div className={s.success_box__rightSide}>
                    <h3 className={s.success_box__rightSide__heading}>Вы успешно отправили нам Ваш номер!</h3>
                    <p className={s.success_box__rightSide__desc}>
                        Наш прораб свяжется с вами в самое ближайшее время</p>
                </div>
            </div>
        </>
    )

}