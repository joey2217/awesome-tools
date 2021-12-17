import { Card, Col, Row } from 'antd'
import type { MetaFunction } from 'remix'
import  { Link } from 'remix'

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'AwesomeTools',
    description: 'awesome tools',
  }
}

interface ToolItem {
  url: string
  title: string
  desc: string
}

const tools: ToolItem[] = [
  {
    url: '/pass',
    title: 'PasswordGenerator',
    desc: 'simple password generator',
  },
]

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <Row>
      {tools.map((tool) => (
        <Col key={tool.url} xs={24} sm={12} md={8} lg={6} xl={4}>
          <Link key={tool.url} to={tool.url} title={tool.title}>
            <Card>
              <Card.Meta title={tool.title} description={tool.desc} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  )
}
