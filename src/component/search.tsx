import React, { useState } from "react"
import { AutoComplete, Input } from "antd"
import type { SelectProps } from "antd"

const getRandomInt = (max: number, min = 0) =>
    Math.floor(Math.random() * (max - min + 1)) + min

// const searchResult = (query: string) =>
//   new Array(getRandomInt(5))
//     .join('.')
//     .split('.')
//     .map((_, idx) => {
//       const category = `${query}${idx}`;
//       return {
//         value: category,
//         label: (
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <span>
//               Found {query} on{' '}
//               <a
//                 href={`https://s.taobao.com/search?q=${query}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {category}
//               </a>
//             </span>
//             <span>{getRandomInt(200, 100)} results</span>
//           </div>
//         ),
//       };
//     });

const MySearch: React.FC<any> = ({ onSearch }) => {
    const [options, setOptions] = useState<SelectProps<object>["options"]>([])

    const handleSearch = (value: string) => {
        onSearch && onSearch(value)
    }

    // const onSelect = (value: string) => {
    //     console.log("onSelect", value)
      
    // }

    return (
        <AutoComplete
            popupMatchSelectWidth={252}
            style={{ width: 300 }}
            options={options}
            // onSelect={onSelect}
            onSearch={handleSearch}
            size="large"
        >
            <Input.Search size="large" placeholder="input here" enterButton onSearch={handleSearch} />
        </AutoComplete>
    )
}

export default MySearch
