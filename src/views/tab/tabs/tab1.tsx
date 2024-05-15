import React from "react"
import { Segmented, Tabs } from "antd"
import type { TabsProps } from "antd"
import MyTable from "../../../component/Table"

const onChange = (key: string) => {
    console.log(key)
}

const items: TabsProps["items"] = [
    { key: "1", label: "应用", children: <MyTable/> },
    { key: "2", label: "提供者", children: "Content of Tab Pane 2" },
    { key: "3", label: "消费者", children: "Content of Tab Pane 3" },
]

type Align = "start" | "center" | "end"

const App: React.FC = () => {
    const [alignValue, setAlignValue] = React.useState<Align>("center")
    return (
        <>
            <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                // indicator={{ size: origin => origin - 20, align: alignValue }}
            />
        </>
    )
}

export default App
