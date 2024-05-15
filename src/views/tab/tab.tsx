import { Tabs } from "antd"
import type { TabsProps } from "antd"
import Tab1 from "./tabs/tab1"



const onChange = (key: string) => {
    console.log(key)
}

const items: TabsProps["items"] = [
    {
        key: "1",
        label: "提供者列表",
        children: <Tab1/>,
    },
    {
        key: "2",
        label: "消费者",
        children: "Content of Tab Pane 2",
    },
    {
        key: "3",
        label: "应用",
        children: "Content of Tab Pane 3",
    },
]

const MyTabs: React.FC = () => (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
)
export default MyTabs