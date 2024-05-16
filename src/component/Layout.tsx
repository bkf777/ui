import React, { useEffect } from "react"
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Breadcrumb, Layout, Menu, theme } from "antd"

import { Outlet, useLocation, useNavigate } from "react-router-dom"


const { Header, Content, Sider } = Layout

const items1: MenuProps["items"] = ["展示页"].map(key => ({
    key,
    label: `${key}`,
}))

const items2: MenuProps["items"] = [
    { icon: UserOutlined, name: "订单",key:"order" },
    { icon: LaptopOutlined, name: "产品" ,key:"product"},
    { icon: NotificationOutlined, name: "库存",key:"ware" },
].map((item, index) => {
    return {
        key: item.key,
        icon: React.createElement(item.icon),
        label: item.name,
    }
})

const App: React.FC = () => {
    const navigator = useNavigate()
    const [activeKey, setActiveKey] = React.useState("order")
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()
    const path = useLocation().pathname.split("/")[2]
    useEffect(() => {
        setActiveKey(path)
    }, [])
    return (
        <Layout>
            <Header style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["展示页"]}
                    items={items1}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={[activeKey]}
                        style={{ height: "100%", borderRight: 0 }}
                        items={items2}
                        onClick={({ key }) => {
                            navigator(`/app/${key}`)
                        }}
                    />
                </Sider>
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: "calc(90vh - 64px)",
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default App
