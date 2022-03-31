import { Table, Tag, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../redux/OrderSlice";

function TableOrder() {
  const columns = [
    {
      title: "OrderId",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Total Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: " Status",
      dataIndex: "status",

      render: (value) => (
        <>
          {value.map((tag) => (
            <Tag
              color={tag === "refund" ? "#cd201f" : "#108ee9"}
              key={tag}
              style={{ textAlign: "center", margin: "auto" }}
            >
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
  ];
  const order = useSelector((state) => state.Order.order);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <div>
      <Typography.Title level={4}>Latest Orders</Typography.Title>
      <Table
        columns={columns}
        dataSource={order}
        pagination={{ pageSize: 5 }}
        rowKey="oid"
      />
    </div>
  );
}

export default TableOrder;
