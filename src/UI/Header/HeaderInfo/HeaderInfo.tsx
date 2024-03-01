import doctorLinz from '../../../assets/images/drlinz_logo.png'
import { UIButton } from '../../UIButton/UIButton'
import styles from './HeaderInfo.module.scss'
import telegram from '../../../assets/svg/Telegram.svg'
import whatsapp from '../../../assets/svg/whatsapp.svg'

export const HeaderInfo = () => {
    return (
        // <div className={styles.headerInfo_main_container}>
            <div className={styles.headerInfo_container}>
                <img src={doctorLinz} alt="container" />
                <UIButton variant="gradient">Записаться онлайн</UIButton>
                <div className={styles.schedule_container}>
                Ежедневно  09:00 – 21:00
                </div>
                <div className={styles.connect_container}>
                    <div className={styles.BackCall_container}>
                        <span className={styles.BackCall_tel}>(383) 209-17-18</span>
                        <span className={styles.BackCall_title}>Обратный звонок</span>
                    </div>
                    <div className={styles.connect_container}>
                        <a href="sdsa"><img src={whatsapp} alt="whatsapp" /></a>
                        <a href="sdsa"><img src={telegram} alt="telegram" /></a>
                    </div>
                </div>
            </div>
            // <hr className={styles.hr}/>
        // </div>
    )
}