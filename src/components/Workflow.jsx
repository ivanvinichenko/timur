import s from './Workflow.module.scss'
import star from '../assets/star.svg'

export default function Workflow(){
    return(
        <>
            <h2 className={s.heading}>Схема работы</h2>
            <div className={s.workflow_box}>
                <div className={s.workflow_box__item}>
                    <div className={s.workflow_box__item__starBox}>
                        <img className={s.workflow_box__item__starBox__star} src={star} alt='Звезда'/>
                    </div>
                    <h3 className={s.workflow_box__item__heading}>Заявка</h3>
                    <p className={s.workflow_box__item__desc}>Оставьте заявку на бесплатную консультацию по Вашему объекту</p>

                </div>
                <div className={s.workflow_box__item}>
                    <div className={s.workflow_box__item__starBox}>
                        <img className={s.workflow_box__item__starBox__star} src={star} alt='Звезда'/>
                        <img className={s.workflow_box__item__starBox__star} src={star} alt='Звезда'/>
                    </div>
                    <h3 className={s.workflow_box__item__heading}>Замер</h3>
                    <p className={s.workflow_box__item__desc}>Встречаем на объекте, делаем точные замеры и составляем детальную смету с фиксированной ценой.</p>
                </div>
                <div className={s.workflow_box__item}>
                    <div className={s.workflow_box__item__starBox}>
                        <img className={s.workflow_box__item__starBox__star} src={star} alt='Звезда'/>
                        <img className={s.workflow_box__item__starBox__star} src={star} alt='Звезда'/>
                        <img className={s.workflow_box__item__starBox__star} src={star} alt='Звезда'/>
                    </div>
                    <h3 className={s.workflow_box__item__heading}>Ремонт</h3>
                    <p className={s.workflow_box__item__desc}>Выполняем все работы по графику: от черновых до чистовых. Берем на себя закупку материалов.</p>
                </div>
                <div className={s.workflow_box__item}>
                    <div className={s.workflow_box__item__starBox}>
                        <img className={s.workflow_box__item__starBox__star} src={star} alt='Звезда'/>
                        <img className={s.workflow_box__item__starBox__star} src={star} alt='Звезда'/>
                        <img className={s.workflow_box__item__starBox__star} src={star} alt='Звезда'/>
                        <img className={s.workflow_box__item__starBox__star} src={star} alt='Звезда'/>
                    </div>
                    <h3 className={s.workflow_box__item__heading}>Приемка</h3>
                    <p className={s.workflow_box__item__desc}>Вы проверяете качество работ, получаете гарантийный сертификат и заезжаете в чистую квартиру.</p>
                </div>

            </div>
        </>
    )
}