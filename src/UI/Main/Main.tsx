import { BannerCarousel } from './BannerCarousel/BannerCarousel'
import styles from './Main.module.scss'

export const Main = () => {
    return (
            <div className={styles.main_container}>
            <BannerCarousel/>
            </div>
        
    )
}
