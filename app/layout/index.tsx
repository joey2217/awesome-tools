import Header from './Header'
import { Layout } from 'antd'

const { Content } = Layout

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header/>
      <Content className='main'>{children}</Content>
    </Layout>
  )
}
