import {useState} from 'react'
import s from './Services.module.scss'
import deconstruction from '../assets/deconstruction.webp'
import plastering from '../assets/plastering.webp'
import framing from '../assets/framing.webp'
import wiring from '../assets/wiring.webp'
import plumbing from '../assets/plumbing.webp'
import tiling from '../assets/tiling.webp'
import finishing from '../assets/finishing.webp'



const ServiceItem = ({ service }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`${s.service_item} ${flipped ? s.is_flipped : ''}`} 
      onClick={() => setFlipped(!flipped)}
    >
      <div className={s.pic_line__inner}>
        <div className={s.pic_line__img_wrapper}>
          <img src={service.img} alt={service.alt}  loading="lazy"/>
          <p className={s.pic_line__img_wrapper__heading}>{service.title}</p>
        </div>
        <div className={s.desc_container_back}>
          <ul className={s.desc_container_back__list}>
            {service.desc_list.map((item, index)=>(
              <li className={s.desc_container_back__list__item} key={index}>{item}</li>
            ))}
          </ul>
          <p className={s.desc_container_back__feature}>{service.feature}</p>
        </div>
      </div>
      <div className={s.desc_container}>
        <p classname={s.desc_container__item}>{service.feature}</p>
      </div>
    </div>
  );
};

export default function Services() {
  const servicesData = [
    { img: deconstruction, title: 'Демонтаж и перепланировка', alt: 'Демонтаж', desc_list: ["Снос ненужных стен и перегородок","Очистка поверхностей от старых материалов", "Расширение проемов"], feature:"Делаем строго по СНиП (без риска для несущих конструкций) + собираем и вывозим весь строительный мусор."},
    { img: plastering, title: 'Черновое выравнивание', alt: 'Черновое выравнивание', desc_list: ["Штукатурка стен по маякам","Заливка идеальной стяжки пола", "Шпаклевка под финишные покрытия"], feature:"Геометрия комнат с углами ровно 90° (чтобы мебель встала без щелей). Контроль лазерным уровнем."},
    { img: framing, title: 'Возведение перегородок', alt: 'Возведение перегородок',desc_list: ["Строительство межкомнатных стен из пазогребневых плит (ПГП), пеноблоков или гипсокартона (ГКЛ) с шумоизоляцией"], feature:"Ровные и прочные стены, готовые к финишной отделке, с высокой шумоизоляцией между комнатами."},
    { img: wiring, title: 'Инженерная электрика', alt: 'Инженерная электрика', desc_list: ["Штробление стен", "Сборка надежного электрощита", "Разводка под розетки и выключатели"], feature:"Грамотный расчет нагрузок (автоматы не будут выбивать от одновременного включения чайника и стиралки)" },
    { img: plumbing, title: 'Сантехника и отопление', alt: 'Сантехника и отопление', desc_list: ["Разводка труб водоснабжения","Монтаж систем защиты от протечек", "Установка радиаторов и инсталляций"], feature:"Скрытый монтаж труб, проверка системы под давлением и официальная гарантия от протечек." },
    { img: tiling, title: 'Укладка плитки и керамогранита', alt: 'Укладка плитки', desc_list: ["Облицовка стен и полов","Запил углов под 45° (минималистичные стыки)", "Гидроизоляция мокрых зон", "Аккуратная затирка швов"], feature:"Работаем с любыми форматами (включая крупноформатный керамогранит). Идеально ровные швы и совпадение рисунка." },
    { img: finishing, title: 'Финишная отделка', alt: 'Финишная отделка', desc_list: ["Поклейка обоев","Покраска стен и потолков", "Паркета или кварцвинила", "Монтаж плинтусов"], feature:"Финальный лоск вашего ремонта. Никаких стыков на обоях и видимых мазков краски — всё готово к расстановке мебели."},
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