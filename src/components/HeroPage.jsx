import s from './HeroPage.module.scss'
import flat_1 from '../assets/flat_1.svg'
import flat_2 from '../assets/flat_2.svg'
import flat_3 from '../assets/flat_3.svg'
import stars from '../assets/5_stars.svg'

export default function HeroPage(){
    return(
        <>
            <div className={s.bg_container}>
                <div className={s.pictures_container}>
                    <div >
                        <img src={flat_1} alt='Пример квартиры'></img>
                    </div>
                    <div >
                        <img src={flat_2} alt='Пример квартиры'></img>
                    </div>
                    <div >
                        <img src={flat_3} alt='Пример квартиры'></img>
                    </div>
                </div>
                <div className={s.features}>
                    <div className={s.feature_item}>
                        <img className={s.feature_item__img} src={stars} alt='Звезда'></img>
                        <p className={s.feature_item__heading}>Качество</p>
                        <p className={s.feature_item__description}>Только проверенные материалы от ведущих производителей</p>
                    </div>
                    <div className={s.feature_item}>
                        <img className={s.feature_item__img} src={stars} alt='Звезда'></img>
                        <p className={s.feature_item__heading}>Безопасность</p>
                        <p className={s.feature_item__description}>Соблюдение всех норм СНиП и пожарной безопасности</p>
                    </div>
                    <div className={s.feature_item}>
                        <img className={s.feature_item__img} src={stars} alt='Звезда'></img>
                        <p className={s.feature_item__heading}>Опыт</p>
                        <p className={s.feature_item__description}>Только проверенные материалы от ведущих производителей</p>
                    </div>
                    <div className={s.feature_item}>
                        <img className={s.feature_item__img} src={stars} alt='Звезда'></img>
                        <p className={s.feature_item__heading}>Профессионализм</p>
                        <p className={s.feature_item__description}>Ремонт любой сложности в оговорённые сроки</p>
                    </div>
                </div>
            </div>
        </>
    )
}