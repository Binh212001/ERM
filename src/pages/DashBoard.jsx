import {
  MoneyCollectOutlined,
  PicRightOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import "chart.js/auto";
import React from "react";
import { Chart } from "react-chartjs-2";
import TableList from "../component/TableList";

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
function DashBoard() {
  const data = {
    labels: ["Janulary", "Februlary", "Match", "April", "May", "June"],
    datasets: [
      {
        label: "deverlop",
        data: [12, 19, 3, 5, 2, 3],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const saleinf = [
    {
      icon: <ShoppingOutlined />,
      amount: 1996,
      des: "Total",
    },
    {
      icon: <ShoppingCartOutlined />,
      amount: 2001,
      des: "Daily Visits",
    },
    {
      icon: <MoneyCollectOutlined />,
      amount: 2345,
      des: "Total Income",
    },
    {
      icon: <PicRightOutlined />,
      amount: 1711,
      des: "Total Order",
    },
  ];

  return (
    <div className="inf">
      <Typography.Title
        level={4}
        style={{ color: "#365571", alignItems: "center", marginBottom: "30px" }}
      >
        DashBoard
      </Typography.Title>
      <div>
        <Row style={{ alignItems: "center" }}>
          <Col span={12}>
            <Row gutter={16}>
              {saleinf.map((data, index) => (
                <Col className="inf__list" key={index} span={12}>
                  <Row
                    style={{
                      background: "#fff",

                      cursor: "pointer",
                      borderRadius: "20px",
                    }}
                    className="inf__list__item"
                    gutter={8}
                  >
                    <Col
                      style={{
                        alignItems: "center",
                        fontSize: "30px",
                        textAlign: "center",
                        margin: "15px 0",
                      }}
                      span={8}
                    >
                      {data.icon}
                    </Col>

                    <Col span={16} style={{ margin: "15px 0" }}>
                      <Typography.Title level={4}>
                        {data.amount}
                      </Typography.Title>
                      <div className="infor__des">{data.des}</div>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Col>
          <Col span={12}>
            <Chart type="line" data={data} options={options} />
          </Col>
        </Row>
        <TableList />
      </div>
    </div>
  );
}

export default DashBoard;
