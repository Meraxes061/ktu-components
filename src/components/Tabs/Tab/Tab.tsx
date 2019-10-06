import React, { FunctionComponent, ReactNode } from 'react'


type Props = {
    children: ReactNode,
    label: string
}
const Tab: FunctionComponent<Props> = ({ label, children }) => {
    return (
        <React.Fragment>{children}</React.Fragment>
    )
}

export default Tab;