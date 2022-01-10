import "./app.css";
import {
  BellOutlined,
  DollarCircleOutlined,
  EyeOutlined,
  SendOutlined,
  ScanOutlined,
} from "@ant-design/icons";
import { Typography, Avatar, Layout, Divider, Button, Space } from "antd";
import pic from "./punk.jpg";
import TransactionCard from "./components/TransactionCard";
import Nav from "./components/Nav";
const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;
const App = () => {
  const qAction = [
    {
      title: "Marketplace",
      Icon: SendOutlined,
      styles: { color: "#23108D", background: "#D2CEEA" },
      rotate: -50,
    },
    {
      title: "Recive",
      Icon: SendOutlined,
      styles: { color: "#40BF96", background: "#C4F5E7" },
      rotate: 150,
    },
    {
      title: "P2P",
      Icon: SendOutlined,
      styles: { color: "#40BF96", background: "#C4F5E7" },
    },
    {
      title: "More",
      Icon: SendOutlined,
      styles: { color: "#40BF96", background: "#C4F5E7" },
    },
  ];
  const transaction = [
    {
      Icon: BellOutlined,
      price: "200 ORV",
      desc: "wallet connect",
      goingUp: true,
    },
    {
      Icon: BellOutlined,
      price: "200 USD",
      desc: "bank Top up",
      goingUp: false,
    },
    {
      Icon: BellOutlined,
      price: "200 BNB",
      goingUp: true,
    },
    {
      Icon: BellOutlined,
      price: "200 USD",
      goingUp: false,
    },
    {
      Icon: BellOutlined,
      price: "200 ORV",
      goingUp: true,
    },
  ];
  return (
    <>
      <Layout>
        <Header className="header">
          <Avatar size="large" shape="circle" src={pic} />
          <div>
            <BellOutlined className="headerIcon" />
            <Divider type="vertical" />

            <ScanOutlined className="headerIcon" />
          </div>
        </Header>

        <Content style={{ padding: "0 7px" }} className="container">
          <div className="card">
            <div className="card__main">
              <p>TOTAL TOKEN BALANCE</p>
              <div className="card__price">
                <h1>50,000 ORV</h1>
                <EyeOutlined className="card__icon" />
              </div>
            </div>

            <Space size={50} className="btn__container">
              <Button className="btn" icon={<DollarCircleOutlined />}>
                Buy
              </Button>
              <Button className="btn" icon={<SendOutlined />}>
                Send
              </Button>
            </Space>
          </div>

          <div className="quickaction">
            <h2>quick actions</h2>
            <div className="quickaction__icon-contaner">
              {qAction.map(({ title, Icon, styles, rotate }) => (
                <div className="quickaction__icon">
                  <Icon
                    className="roundedIcon"
                    rotate={rotate}
                    style={styles}
                  />
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="transaction">
            <div className="transaction__title">
              <h4>Recent Transactions</h4>
              <a href="#">see all</a>
            </div>
            <Space direction="vertical" style={{ width: "100%" }}>
              {transaction.map(({ price, Icon, desc, goingUp }, key) => (
                <TransactionCard
                  price={price}
                  Icon={Icon}
                  goingUp={goingUp}
                  desc={desc}
                  key={key}
                />
              ))}
            </Space>
          </div>
        </Content>
        <Footer>
          <Nav />
        </Footer>
      </Layout>
    </>
  );
};

export default App;
