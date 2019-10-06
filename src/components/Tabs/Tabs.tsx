import React, { FunctionComponent, ReactNode, useState } from 'react'
import cx from 'classnames'
import './Tabs.scss'

type theme = 'default' | 'primary' | 'secondary' | 'dark'
type size = 'small' | 'medium' | 'large'

type Props = {
    theme?: theme,
    size?: size,
    children: ReactNode
}
const Tabs: FunctionComponent<Props> = ({ theme = 'default', size = 'medium', children }) => {

    const [active, setActive] = useState(0)
    const className = cx(
        'c-tabs',
        {
            [`c-tabs--${theme}`]: theme,
            [`c-tabs--${size}`]: size,
        }
    )
    return (
        <div className={className}>
            <ul className="c-tabs__list">
                {React.Children.map(children, (child, index) => (
                    child && <li className={cx('c-tabs__list__list-item', { 'c-tabs__list__list-item--active': active === index })} onClick={() => setActive(index)}>{child.props.label}</li>
                ))}
            </ul>
            <div className="c-tabs__content">
                {React.Children.map(children, (child, index) => (
                    index === active && child
                ))}
            </div>
        </div>
    )
}

export default Tabs;