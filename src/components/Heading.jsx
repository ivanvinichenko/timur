import s from './Heading.module.scss'

export default function Heading(){
    return(
        <>
            <h1 className={s.main_heading}>Ваш идеальный дом без лишних нервов</h1>
            <h2 className={s.secondary_heading}>Профессиональный ремонт под ключ с гарантией сроков</h2>
        </>
    )
}