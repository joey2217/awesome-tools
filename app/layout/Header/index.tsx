import React, { memo } from 'react'
import { Layout } from 'antd'

const { Header } = Layout

const AppHeader: React.FC = () => {
    return (
        <Header>AppHeader</Header>
    )
}

export default memo(AppHeader)
