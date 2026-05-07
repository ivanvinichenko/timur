import {useState} from 'react'
import s from './Services.module.scss'
import deconstruction from '../assets/deconstruction.svg'
import plastering from '../assets/plastering.svg'
import framing from '../assets/framing.svg'
import wiring from '../assets/wiring.svg'
import plumbing from '../assets/plumbing.svg'
import tiling from '../assets/tiling.svg'
import finishing from '../assets/finishing.svg'



const ServiceItem = ({ service }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`${s.service_item} ${flipped ? s.is_flipped : ''}`} 
      onClick={() => setFlipped(!flipped)}
    >
      <div className={s.pic_line__inner}>
        <div className={s.pic_line__img_wrapper}>
          <img src={service.img} alt={service.alt} />
          <p className={s.pic_line__img_wrapper__heading}>{service.title}</p>
        </div>
        <div className={s.desc_container_back}>
          <p>Подробное описание для флипа</p>
        </div>
      </div>
      <div className={s.desc_container}>
        <p>Описание услуги для мобильной версии</p>
      </div>
    </div>
  );
};

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
          <ServiceItem key={index} service={service} /> 
        ))}
      </div>
    </>
  );
}