import React, { useEffect } from "react";
import { Table, Spin } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../redux/CustomerSlice";
function CustomerTable() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Total Spend",
      dataIndex: "total_spend",
      key: "total_spend",
    },
    {
      title: "Total Orders",
      dataIndex: "total_orders",
      key: "total_orders",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);

  const { customer, status } = useSelector((state) => state.Customer);

  return (
    <div>
      {status === "pending" ? (
        <span>
          <Spin />
        </span>
      ) : (
        <Table
          columns={columns}
          dataSource={customer}
          rowKey="id"
          pagination={{ pageSize: 7 }}
        />
      )}
    </div>
  );
}

export default CustomerTable;
