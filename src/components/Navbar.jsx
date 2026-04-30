import s from './Navbar.module.scss'
import wa_icon from '../assets/wa_icon.svg'
import tg_icon from '../assets/tg_icon.svg'
import inst_icon from '../assets/inst_icon.svg'


export default function Navbar(){

    const menu_links = {
            'Услуги': 'services',
            'Портфолио': 'portfolio',
            'О нас': 'about_us'
        };

    return(
        <>
            <nav className={s.navbar}>
                <div className={s.navbar__left}>

                    <ul className={s.navbar__left__list}>
                        {Object.entries(menu_links).map(([label, value]) => (
                                <li key={value}>
                                    <a className={s.navbar__left__list__item} href={`#${value}`}>
                                        {label}
                                    </a>
                                </li>
                            ))}
                    </ul>
               </div>
               <p className={s.navbar__center_text}>Имя Фамилия</p>
               <div className={s.right}>
                    <div className={s.right__icon_container}>
                        <img className={s.right__icon_container__item} src={wa_icon} alt="WhatsApp"></img>
                        <img className={s.right__icon_container__item} src={tg_icon} alt="Telegram"></img>
                        <img className={s.right__icon_container__item} src={inst_icon} alt="Instagram"></img>
                    </div>
               
                    <a className={s.right__number} href='tel:+8888888888'>8(800) 888 88 88</a>
                    <a href='#callback' className={s.right__callButton}>Заказать звонок</a>
               </div>
            </nav>
        </>
    )
}