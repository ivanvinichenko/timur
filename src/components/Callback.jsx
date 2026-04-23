import s from './Callback.module.scss'
import CustomFormik from './CustomFormik'

export default function Callback(){
    return (
        <>
            <div id='callback' className={s.callBack_box}>
                <div className={s.callBack_box__leftSide}>
                    <h3 className={s.callBack_box__leftSide__heading}>Оставьте номер!</h3>
                    <p className={s.callBack_box__leftSide__desc}>
                        и наш прораб свяжется с вами  и проконсультирует в ближайшее время!</p>
                </div>
                <CustomFormik />
            </div>
        </>
    )
}