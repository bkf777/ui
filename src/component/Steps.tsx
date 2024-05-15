import React, { useEffect } from "react"
import { Divider, Input, Pagination, Steps } from "antd"

const MySteps: React.FC<any> = ({ data }: any) => {
    const [currentMsg, setCurrentMsg] = React.useState("")
    useEffect(() => {
        console.log("data", currentMsg)
        setCurrentMsg(data)
    }, [data])
    return (
        <>
            
        </>
    )
}

export default MySteps
