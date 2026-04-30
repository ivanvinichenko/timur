import { Drawer } from 'vaul';
import { useState } from 'react';
import s from './CustomDrawer.module.scss';
import burger from '../assets/burger.svg'
import close from '../assets/close.svg'
import wa_icon from '../assets/wa_icon.svg'
import tg_icon from '../assets/tg_icon.svg'
import inst_icon from '../assets/inst_icon.svg'
import call from '../assets/call.svg'

export default function CustomDrawer({ className }) {

        const menu_links = {
            'Услуги': 'services',
            'Портфолио': 'portfolio',
            'О нас': 'about_us'
        };

        const[open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} direction="left" dismissible={true} onOpenChange={setOpen} >
      <Drawer.Trigger asChild>
        {/* Добавляем внешний className к кнопке */}
        <button className={`${s.burgerBtn} ${className}`}>
            <img src={burger} />
        </button>
      </Drawer.Trigger>
      
      <Drawer.Portal>
        <Drawer.Overlay className={s.overlay} />
        <Drawer.Content className={s.content} onCloseAutoFocus={(e) => e.preventDefault()}>
            <div>
                <Drawer.Close  asChild>
                    <button className={s.close}><img src={close} /></button>
                </Drawer.Close>
                <nav className={s.nav}>
                <ul className={s.navbar__list}>
                    {Object.entries(menu_links).map(([label, value]) => (
                        <li key={value}>
                            <a className={s.navbar__list__item} href={`#${value}`} onClick={()=> setOpen(false)}>
                                {label} 
                            </a>
                        </li>
                    ))}
                </ul>
                </nav>
          </div>
          <div className={s.content__getContact}>
            <div className={s.content__getContact__socials}>
                <img className={s.content__getContact__socials__item} src={wa_icon} alt="WhatsApp"></img>
                <img className={s.content__getContact__socials__item} src={tg_icon} alt="Telegram"></img>
                <img className={s.content__getContact__socials__item} src={inst_icon} alt="Instagram"></img>
            </div>
            <a href='#callback' className={s.content__getContact__callButton} onClick={()=> setOpen(false)}>
                <img src={call} />
            </a>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}