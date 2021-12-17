import {
  Checkbox,
  Card,
  Typography,
  Button,
  InputNumber,
  Input,
  Space,
} from 'antd'
import React, { memo, useEffect, useState } from 'react'
import type {  MetaFunction } from 'remix'
import { ReloadOutlined } from '@ant-design/icons'
import { metaData, MetaType, generatePass } from '../utils'


export let meta: MetaFunction = () => {
  return {
    title: 'PasswordGenerator-AwesomeTools',
    description: 'password generator',
  }
}

const Pass: React.FC = () => {
  const [passMeta, setPassMeta] = useState<MetaType[]>([
    MetaType.UPPERCASE,
    MetaType.LOWERCASE,
    MetaType.NUMBER,
    MetaType.SPECIAL,
  ])

  const [pass, setPass] = useState<string>('')
  const [extraMate, setExtraMate] = useState<string>('!@#$%^&*')
  const [num, setNum] = useState<number>(10)

  useEffect(() => {
    const pass = generatePass(passMeta, num, extraMate)
    setPass(pass)
  }, [num, passMeta, extraMate])

  return (
    <Card title="PasswordGenerator">
      <Card className="text-center">
        <Typography.Title level={4}>Pass Element</Typography.Title>
        <Checkbox.Group
          defaultValue={passMeta}
          onChange={(checkedValue) => setPassMeta(checkedValue as MetaType[])}
        >
          {metaData.map((m) => (
            <Checkbox key={m.value} value={m.value}>{m.label}</Checkbox>
          ))}
          <Checkbox value={MetaType.SPECIAL}>
            <Space>
              <span>special characters(like !@#$%^&* )</span>
              <Input
                value={extraMate}
                onChange={(e) => setExtraMate(e.target.value)}
                allowClear
              />
            </Space>
          </Checkbox>
        </Checkbox.Group>
        <Typography.Title level={4}>Pass Length</Typography.Title>
        <InputNumber min={1} max={32} defaultValue={num} onChange={setNum} />
      </Card>
      <Card className="text-center">
        <Typography.Title level={2} copyable>
          {pass}
        </Typography.Title>
        <Button
          icon={<ReloadOutlined />}
          onClick={() => setPass(generatePass(passMeta, num, extraMate))}
        >
          Regenerate
        </Button>
      </Card>
    </Card>
  )
}

export default memo(Pass)
