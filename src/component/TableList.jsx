import { Col, Row } from "antd";
import React from "react";
import TableOrder from "./TableOrder";
import TopCustomer from "./TopCustomer";

function TableList() {
  return (
    <div>
      <Row gutter={24}>
        <Col span={8}>
          <TopCustomer />
        </Col>
        <Col span={16}>
          <TableOrder />
        </Col>
      </Row>
    </div>
  );
}

export default TableList;
