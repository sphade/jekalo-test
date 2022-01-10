import React from "react";
import "../app.css";
import { Space, Divider } from "antd";
import {
  HomeFilled,
  WalletOutlined,
  ScanOutlined,
  ProfileOutlined,
  BookOutlined,
} from "@ant-design/icons";

function Nav() {
  return (
    <div className="nav">
      <Divider>
        <ScanOutlined
          className="roundedIcon"
          style={{ padding: "15px", color: "#fff", background: "#45399d" }}
        />
      </Divider>
      <div
        style={{
          margin: "0px auto",
          display: "flex",
          maxWidth: "500px",
          width: "100%",
          justifyContent: "space-between",
          padding: "0 20px",
          marginTop: "-20px",
        }}
      >
              <Space size={50}>
                  <div className="flex">
                  <HomeFilled style={{ color: "#45399d", fontSize: "20px" }} />
                  <p style={{ color: "#45399d" }}>Home</p>
                  </div>

                  <div className="flex">
                  <WalletOutlined style={{ color: "rgb(172, 170, 170)", fontSize: "20px" }} />
                  <p style={{ color: "rgb(172, 170, 170)" }}>Wallet</p>
                  </div>
        </Space>
              <Space size={50}>
              <div className="flex">
              <BookOutlined style={{ color: "rgb(172, 170, 170)", fontSize: "20px" }} />
              <p style={{ color: "rgb(172, 170, 170)" }}>Resources</p>
                  </div>
                  


                  <div className="flex">
                  <ProfileOutlined style={{ color: "rgb(172, 170, 170)", fontSize: "20px" }} />
                  <p style={{ color: "rgb(172, 170, 170)" }}>Profile</p>
                  </div>
        </Space>
      </div>
    </div>
  );
}

export default Nav;
