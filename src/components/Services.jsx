import s from './Services.module.scss'
import deconstruction from '../assets/deconstruction.svg'
import plastering from '../assets/plastering.svg'
import framing from '../assets/framing.svg'
import wiring from '../assets/wiring.svg'
import plumbing from '../assets/plumbing.svg'
import tiling from '../assets/tiling.svg'
import finishing from '../assets/finishing.svg'

export default function Services() {
  const servicesData = [
    { img: deconstruction, title: 'Демонтаж и перепланировка', alt: 'Демонтаж' },
    { img: plastering, title: 'Черновое выравнивание', alt: 'Черновое выравнивание' },
    { img: framing, title: 'Возведение перегородок', alt: 'Возведение перегородок' },
    { img: wiring, title: 'Инженерная электрика', alt: 'Инженерная электрика' },
    { img: plumbing, title: 'Сантехника и отопление', alt: 'Сантехника и отопление' },
    { img: tiling, title: 'Укладка плитки и керамогранита', alt: 'Укладка плитки' },
    { img: finishing, title: 'Финишная отделка', alt: 'Финишная отделка' },
  ];

  return (
    <>
      <h2 id='services' className={s.heading}>Наши Услуги</h2>
      <div className={s.pic_line}>
        {servicesData.map((service, index) => (
          <div key={index} className={s.service_item}>
            <div className={s.pic_line__img_wrapper}>
              <img src={service.img} alt={service.alt} />
              <p className={s.pic_line__img_wrapper__heading}>{service.title}</p>
              <p className={s.pic_line__img_wrapper__overlay_text}>Узнать больше</p>
            </div>
            <div className={s.desc_container}>
              <p>Описание услуги для мобильной версии</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}