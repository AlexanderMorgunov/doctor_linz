import { FC } from "react"
import styles from './BannerCarouselItem.module.scss'

interface Props {
    mainText: JSX.Element,
    subText: JSX.Element,
    image: string,
    onClick: () => void
}

export const BannerCarouselItem: FC<Props> = ({ mainText, subText, image, onClick }) => {
    return (
        <div className={styles.carousel_item_container}></div>
    )
}
