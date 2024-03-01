
import styles from './HeaderNavbar.module.scss'
import check from '../../../assets/svg/check.svg'

interface IElement {
    title: string,
    image?: string 
}

const elements: IElement[] = [
    { title: "О клинике" },
    { title: "Услуги", image: check },
    { title: "Ночные линзы" },
    { title: "Врачи" },
    { title: "Цены" },
    { title: "Отзывы" },
    { title: "Вопросы и ответы" },
    { title: "Контакты" },
]

export const HeaderNavbar = () => {
    return (
        <div className={styles.HeaderNavbar_main_container}>
            <hr className={styles.hr}/>
            <div className={styles.HeaderNavbar_container}>
               <nav className={styles.navbar}>
                   <ul className={styles.navbar_list}>
                   {elements.map((element, index) => <li key={index} className={styles.navbar_element}>{element.title}
                   {element?.image && <img src={element.image} alt="pic" />}</li>)}
                   </ul>
               </nav>
            </div>
        </div>
    )
}
