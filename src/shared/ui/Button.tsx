import React, { FC } from "react"

import style from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode
}

const Button: FC<ButtonProps> = ({children}) => {
    return <button className={style.btn}>{children}</button>
}
export default Button;