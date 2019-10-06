import React, { FunctionComponent, ReactNode } from 'react'
import cx from 'classnames'

import './Button.scss'

type theme = 'default' | 'primary' | 'secondary'
type size = 'small' | 'medium' | 'large'

type Props = JSX.IntrinsicElements['button'] & {
    theme?: theme,
    size?: size,
    block?: boolean,
    children: ReactNode,
}
const Button: FunctionComponent<Props> = ({ children, theme = 'default', size = 'medium', block = false, ...rest }) => {
    const className = cx(
        'c-button',
        {
            [`c-button--${theme}`]: theme,
            [`c-button--${size}`]: size,
            [`c-button--block`]: block,
        }
    )
    return (
        <button className={className} {...rest}>{children}</button>
    )
}

export default Button;