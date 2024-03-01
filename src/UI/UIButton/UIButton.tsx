import { FC } from "react"
import styles from "./UIButton.module.scss"
import clsx from "clsx"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSX.Element | JSX.Element[] | string ,
    variant: "main" | "gradient" | "secondary",
    isActive?: boolean,
    classNames?: string
}

export const UIButton: FC<Props> = ({ children, variant, isActive, classNames }) => {
    return (
        <div className={clsx(styles.btn_container,{
            [styles.btn_gradient]: variant === "gradient",
            [styles.btn_main]: variant === "main",
            [styles.btn_secondary]: variant === "secondary",
        },{
            [styles.btn_active]: isActive
        }, classNames)}>
            {children}
        </div>
    )
}
