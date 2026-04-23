import s from './Footer.module.scss'
import wa_icon from '../assets/wa_icon.svg'
import tg_icon from '../assets/tg_icon.svg'
import inst_icon from '../assets/inst_icon.svg'

export default function Footer(){

const menu_links = {
        'Услуги': 'services',
        'Портфолио': 'portfolio',
        'О нас': 'about_us'
    };

    return(
        <>
            <div className={s.footer}>
                <h2 className={s.footer__heading}>Имя Фамилия</h2>
                <ul className={s.footer__linkbox}>
                    {Object.entries(menu_links).map(([label, value]) => (
                            <li key={value}>
                                <a className={s.footer__linkbox__item} href={`#${value}`}>
                                    {label}
                                </a>
                            </li>
                        ))}
                </ul>
                <div className={s.footer__getContactBox}>
                    <div className={s.footer__getContactBox__socials}>
                        <img className={s.footer__getContactBox__socials__item} src={wa_icon} alt="WhatsApp"></img>
                        <img className={s.footer__getContactBox__socials__item} src={tg_icon} alt="Telegram"></img>
                        <img className={s.footer__getContactBox__socials__item} src={inst_icon} alt="Instagram"></img>
                    </div>
                    <a className={s.footer__getContactBox__number} href='tel:+8888888888'>8(800) 888 88 88</a>
                </div>
            </div>
        </>
    )
}