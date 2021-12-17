import React, { memo } from 'react'
import { Layout } from 'antd'
import { Link } from 'remix'

const { Header } = Layout

const AppHeader: React.FC = () => {
  return (
    <Header>
      <Link to="/">AwesomeTools</Link>
    </Header>
  )
}

export default memo(AppHeader)
