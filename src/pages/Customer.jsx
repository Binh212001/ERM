import { CloseCircleOutlined, FileAddOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Typography } from "antd";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

import CustomerTable from "../component/CustomerTable";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/CustomerSlice";

function Customer() {
  const [showFrom, setShowFrom] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      name: "",
      phone: "",
      location: "",
      email: "",
      total_spend: 0,
      total_orders: 0,
    },
    onSubmit: (values) => {
      dispatch(addUser(values));

      formik.resetForm();
    },
  });
  return (
    <div className="customer">
      <Typography.Title level={4}>Customer</Typography.Title>
      <div className="customer__add">
        <Button
          onClick={() => {
            setShowFrom(true);
          }}
          type="primary"
        >
          <FileAddOutlined />
          Add Customer
        </Button>
      </div>
      <Row className="customer__from" gutter={24}>
        {showFrom ? (
          <Col className="customer__from__list" span={8}>
            <form className="from" onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <label htmlFor="email">Email Address</label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label htmlFor="location">Location Address</label>
              <Input
                id="location"
                name="location"
                type="location"
                onChange={formik.handleChange}
                value={formik.values.location}
              />
              <label htmlFor="phone">phone</label>
              <Input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <label htmlFor="total_spend">total_spend</label>
              <Input
                id="total_spend"
                name="total_spend"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.total_spend}
              />
              <label htmlFor="toatal_order">Total order</label>
              <Input
                id="total_orders"
                name="total_orders"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.total_orders}
              />

              <button type="submit">Submit</button>
            </form>
            <span
              onClick={() => {
                setShowFrom(false);
              }}
              className="customer__from__list__close"
            >
              <CloseCircleOutlined style={{ color: "red" }} />
            </span>
          </Col>
        ) : (
          <div></div>
        )}

        <Col span={showFrom ? 16 : 24}>
          <CustomerTable />
        </Col>
      </Row>
    </div>
  );
}

export default Customer;
