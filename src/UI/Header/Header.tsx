import styles from './Header.module.scss'

import { HeaderInfo } from "./HeaderInfo/HeaderInfo"
import { HeaderNavbar } from "./HeaderNavbar/HeaderNavbar"
import { SearchPanel } from "./SearchPanel/SearchPanel"

export const Header = () => {
    return (
        <header className={styles.header}>
            <SearchPanel/>
            <HeaderInfo/>
            <HeaderNavbar/>
        </header>
    )
}
