import { Typography } from "antd";
import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTopCustomer } from "../redux/TopCustomerSlice";
import { useSelector } from "react-redux";
function TopCustomer() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Total Orders",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Total Spending",
      dataIndex: "spending",
      key: "spending",
    },
  ];
  const TopCus = useSelector((state) => state.TopCustomer.customer);

  const dispath = useDispatch();
  useEffect(() => {
    dispath(getTopCustomer());
  }, [dispath]);

  return (
    <div>
      <Typography.Title level={4}>Top Customers</Typography.Title>
      <Table
        columns={columns}
        pagination={{ pageSize: 5 }}
        dataSource={TopCus}
        rowKey="id"
      />
    </div>
  );
}

export default TopCustomer;
