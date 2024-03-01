import { FC } from 'react'
import styles from './Layout.module.scss'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
