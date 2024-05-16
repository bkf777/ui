import React, { useEffect, useState } from "react"
import type { RadioChangeEvent, TableProps } from "antd"
import {
    Button,
    Flex,
    Form,
    Input,
    InputNumber,
    Modal,
    Pagination,
    Popconfirm,
    Radio,
    Select,
    Space,
    Table,
    Tag,
    Typography,
    notification,
} from "antd"
import axios from "../myAxios"
import { PlusCircleOutlined, RedoOutlined } from "@ant-design/icons"
import { render } from "react-dom"
import styled from "styled-components"
import MySearch from "./search"
import MySteps from "./Steps"
import Item from "antd/es/list/Item"
import { useLocation } from "react-router-dom"
import moment from "moment"

interface Item {
    key: string
    name: string
    age: number
    address: string
}

const originData: Item[] = []
for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    })
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean
    dataIndex: string
    title: any
    inputType: "number" | "text"
    record: Item
    index: number
    children: React.ReactNode
}

const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    )
}
const MyTableStyle = styled.div``
const MyTable: React.FC = () => {
    const [total, setTotal] = useState(100)
    const [form] = Form.useForm()
    const [option, setOption] = useState<any>([])
    const orderColumns: TableProps["columns"] = [
        {
            title: "id",
            dataIndex: "id",
            // width: "25%",
            key: "id",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "发货地址",
            dataIndex: "deliveryAddress",
            key: "deliveryAddress",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "收货地址",
            dataIndex: "destinationAddress",
            key: "destinationAddress",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "产品名",
            key: "productName",
            dataIndex: "productName",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "数量",
            key: "count",
            dataIndex: "count",
        },
        {
            title: "总金额",
            key: "totalAmount",
            dataIndex: "totalAmount",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "创建时间",
            key: "createAt",
            dataIndex: "createAt",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return moment(value).format("YYYY-MM-DD HH:mm:ss")
            },
        },
        {
            title: "最近一次更新时间",
            key: "updateAt",
            dataIndex: "updateAt",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return moment(value).format("YYYY-MM-DD HH:mm:ss")
            },
        },
    ]
    const productColumns: TableProps["columns"] = [
        {
            title: "id",
            dataIndex: "id",
            // width: "25%",
            key: "id",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "产品名",
            key: "name",
            dataIndex: "name",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "价格",
            key: "price",
            dataIndex: "price",
        },
        {
            title: "仓库编号",
            key: "wareId",
            dataIndex: "wareId",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "创建时间",
            key: "createAt",
            dataIndex: "createAt",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return moment(value).format("YYYY-MM-DD HH:mm:ss")
            },
        },
        {
            title: "最近一次更新时间",
            key: "updateAt",
            dataIndex: "updateAt",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return moment(value).format("YYYY-MM-DD HH:mm:ss")
            },
        },
    ]
    const wareColumns: TableProps["columns"] = [
        {
            title: "id",
            dataIndex: "id",
            // width: "25%",
            key: "id",
            // editable: true,
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "库存",
            dataIndex: "stock",
            key: "stock",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "产品名",
            key: "name",
            dataIndex: "name",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return <a>{value}</a>
            },
        },
        {
            title: "创建时间",
            key: "createAt",
            dataIndex: "createAt",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return moment(value).format("YYYY-MM-DD HH:mm:ss")
            },
        },
        {
            title: "最近一次更新时间",
            key: "updateAt",
            dataIndex: "updateAt",
            render: (value: any) => {
                if (!value) return <a>-</a>
                return moment(value).format("YYYY-MM-DD HH:mm:ss")
            },
        },
    ]
    const columns = {
        order: orderColumns,
        product: productColumns,
        ware: wareColumns,
    }
    const type = useLocation().pathname.split("/")[2]
    const getData = async () => {
        await axios
            .post(`/${type}/${type}/page`, {
                currentPage: 1,
                pageSize: 2,
            })
            .then(res => {
                setData(res.data.data)
                setTotal(res.data.totalCount)
            })
    }
    const [data, setData] = useState([])
    const [myForm] = Form.useForm()
    const [product, setProduct] = useState<any>({})

    const getOption = async () => {
        await axios
            .post("/product/product/page", {
                currentPage: 1,
                pageSize: 10,
            })
            .then(res => {
                setOption(
                    res.data.data.map((item: any) => {
                        const { name, ...rest } = item
                        return {
                            label: name,
                            value: name,
                            ...rest,
                        }
                    })
                )
            })
    }
    useEffect(() => {
        getData()
        if (type === "order") {
            getOption()
        }
    }, [type])
    useEffect(() => {
        myForm.setFieldsValue(product)
    }, [product])
    useEffect(() => {
        if (!myForm.getFieldValue("count")) return
        myForm.setFieldsValue({
            totalAmount:
                Number(myForm.getFieldValue("count")) * Number(product.price),
        })
    }, [myForm.getFieldValue("productName"), myForm.getFieldValue("count")])
    return (
        <MyTableStyle>
            <Form form={form} component={false}>
                <Space direction="vertical" style={{ width: "100%" }}>
                    <Table
                        pagination={false}
                        key={1}
                        bordered
                        title={() => (
                            <Flex
                                style={{ width: "100%" }}
                                justify="space-between"
                            >
                                <Typography.Title level={4}>
                                    {
                                        {
                                            order: "订单",
                                            product: "产品",
                                            ware: "仓库",
                                        }[type]
                                    }
                                    列表
                                </Typography.Title>
                                <Space>
                                    {type === "order" && (
                                        <Button
                                            type="primary"
                                            onClick={() => {
                                                Modal.confirm({
                                                    icon: " ",
                                                    title: "添加订单",
                                                    width: 800,
                                                    cancelText: "取消",
                                                    okText: "确定",
                                                    content: (
                                                        <Form
                                                            form={myForm}
                                                            labelCol={{
                                                                span: 4,
                                                            }}
                                                            wrapperCol={{
                                                                span: 16,
                                                            }}
                                                        >
                                                            <Form.Item
                                                                label="产品名"
                                                                name="productName"
                                                                rules={[
                                                                    {
                                                                        required:
                                                                            true,
                                                                        message:
                                                                            "请输入产品名",
                                                                    },
                                                                ]}
                                                            >
                                                                <Select
                                                                    options={
                                                                        option
                                                                    }
                                                                    onChange={value => {
                                                                        setProduct(
                                                                            option.find(
                                                                                (
                                                                                    item: any
                                                                                ) =>
                                                                                    item.label ===
                                                                                    value
                                                                            )
                                                                        )
                                                                    }}
                                                                />
                                                            </Form.Item>
                                                            <Form.Item
                                                                label="单价"
                                                                required
                                                            >
                                                                <Form.Item
                                                                    name={
                                                                        "price"
                                                                    }
                                                                    noStyle
                                                                >
                                                                    <InputNumber
                                                                        readOnly
                                                                    />
                                                                </Form.Item>{" "}
                                                                件数:
                                                                <Form.Item
                                                                    noStyle
                                                                    name="count"
                                                                    rules={[
                                                                        {
                                                                            required:
                                                                                true,
                                                                            message:
                                                                                "请输入件数",
                                                                        },
                                                                    ]}
                                                                >
                                                                    <InputNumber
                                                                        min={1}
                                                                        defaultValue={
                                                                            1
                                                                        }
                                                                        onChange={value => {
                                                                            if (
                                                                                !value
                                                                            )
                                                                                return
                                                                            myForm.setFieldsValue(
                                                                                {
                                                                                    totalAmount:
                                                                                        Number(
                                                                                            value
                                                                                        ) *
                                                                                        Number(
                                                                                            product.price
                                                                                        ),
                                                                                }
                                                                            )
                                                                        }}
                                                                    />
                                                                </Form.Item>{" "}
                                                                总价:
                                                                <Form.Item
                                                                    name="totalAmount"
                                                                    noStyle
                                                                >
                                                                    <InputNumber
                                                                        readOnly
                                                                    />
                                                                </Form.Item>
                                                            </Form.Item>
                                                            <Form.Item
                                                                label="发货地址"
                                                                name="deliveryAddress"
                                                                rules={[
                                                                    {
                                                                        required:
                                                                            true,
                                                                        message:
                                                                            "请输入发货地址",
                                                                    },
                                                                ]}
                                                            >
                                                                <Input />
                                                            </Form.Item>
                                                            <Form.Item
                                                                label="收货地址"
                                                                name="destinationAddress"
                                                                rules={[
                                                                    {
                                                                        required:
                                                                            true,
                                                                        message:
                                                                            "请输入收货地址",
                                                                    },
                                                                ]}
                                                            >
                                                                <Input />
                                                            </Form.Item>
                                                        </Form>
                                                    ),
                                                    onOk: () => {
                                                        myForm
                                                            .validateFields()
                                                            .then(values => {
                                                                const {
                                                                    price,
                                                                    ...rest
                                                                } = values
                                                                axios
                                                                    .post(
                                                                        "/order/order/createOrder",
                                                                        {
                                                                            ...rest,
                                                                            userId: 1,
                                                                            productId:
                                                                                product.id,
                                                                        }
                                                                    )
                                                                    .then(
                                                                        res => {
                                                                            notification.success(
                                                                                {
                                                                                    message:
                                                                                        "添加成功",
                                                                                }
                                                                            )
                                                                            myForm.resetFields()
                                                                            getData()
                                                                        }
                                                                    )
                                                            })
                                                    },
                                                })
                                            }}
                                        >
                                            <PlusCircleOutlined />
                                        </Button>
                                    )}
                                    <Button
                                        type="primary"
                                        onClick={() => {
                                            getData().then(() => {
                                                notification.success({
                                                    message: "刷新成功",
                                                })
                                            })
                                        }}
                                    >
                                        <RedoOutlined />
                                    </Button>
                                </Space>
                            </Flex>
                        )}
                        dataSource={data}
                        // @ts-ignore
                        columns={columns[type]}
                        rowClassName="editable-row"
                    />
                    <Pagination defaultCurrent={1} 
                    pageSize={10}
                            total={total} 
                            showTotal={total => `共 ${total} 条`} 
                            onChange={async (page: number) => {
                                await axios
                                    .post(`/${type}/${type}/page`, {
                                        currentPage: page,
                                        pageSize: 10,
                                    })
                                    .then(res => {
                                        setData(res.data.data)
                                        setTotal(res.data.totalCount)
                                    })
                            }
                        } />
                </Space>
            </Form>
        </MyTableStyle>
    )
}

export default MyTable
