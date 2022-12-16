import { Table } from 'antd';
import { axiosJSONPost } from './request';
import React from 'react';

// 封装了但没完全封装的Table
// pageSize可选 默认为10 url必选
export default function MyTable(props) {

    // 每页数据量
    const [pageSize, setPageSize] = React.useState(props.pageSize ? props.pageSize : 30);
    // 总数据量
    const [total, setTotal] = React.useState(0);
    // 当前页数
    const [current, setCurrent] = React.useState(1);
    // 数据源
    const [data, setData] = React.useState([]);
    // 列头
    const [title, setTitle] = React.useState([]);
    // 列描述数据对象
    const [columns, setColumns] = React.useState([]);

    // 请求数据
    React.useEffect(() => {
        axiosJSONPost(props.url, { current: current, pageSize: pageSize })
            .then(
                response => {
                    // 设置数据源
                    setData(response.data.data);
                    // 设置总条数
                    setTotal(response.data.total);
                    // 设置列头
                    setTitle(Object.keys(response.data.data[0]));
                },
                error => { }
            )
    }, [current]);

    // 设置列配置
    React.useEffect(() => {
        // 列描述数据对象
        setColumns(
            title.map((i) => {
                return {
                    // 列头显示文字
                    title: i,
                    // 列数据对应的标识
                    dataIndex: i,
                    // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
                    key: i,
                    align: 'center',
                }
            }));
    }, [title])

    // 处理分页
    function handleChange(page, pageSize) {
        setCurrent(page);
        setPageSize(pageSize);
    }

    return (
        <>
            {/* 默认是可以换行显示的 还行 */}
            <Table
                // 列的配置项
                columns={columns}
                // 数据数组
                dataSource={data}
                // 分页设置
                pagination={{
                    pageSize: pageSize,
                    total: total,
                    current: current,
                    onChange: handleChange,
                }}
            />
        </>
    );
}