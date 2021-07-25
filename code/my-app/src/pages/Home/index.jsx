import { useState, useEffect } from 'react';
import { Layout, Button, Carousel, Row, Col, Tabs, List } from 'antd';
import BorderBox7 from '@jiaminghi/data-view-react/es/borderBox7';
import DigitalFlop from '@jiaminghi/data-view-react/es/DigitalFlop';
import { history } from '@/.umi/core/history';

import styles from './index.less';

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;
export default () => {
  const [totalDate, setTotalDate] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });
  const [listData, setListData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  useEffect(() => {
    setTotalDate({
      1: 3435,
      2: 555,
      3: 343,
      4: 6565,
    });
  }, []);

  const renderTotalView = (item, title) => {
    return (
      <Col span={5} className={styles.totalItem} flex>
        <BorderBox7>
          <DigitalFlop
            config={{
              style: { fill: '#333333' },
              number: [item],
              content: `{nt}${'个'}`,
            }}
          />
          <div style={{ color: '#666', textAlign: 'center', marginBottom: 20 }}>{title}</div>
        </BorderBox7>
      </Col>
    );
  };
  const renderList = () => {
    return (
      <List
        style={{ height: 240, overflow: 'auto' }}
        split
        itemLayout="horizontal"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={`标题${item}`}
              description="不忘初心,庆祝中国共产党成立100周年"
            />
          </List.Item>
        )}
      ></List>
    );
  };

  return (
    <Layout style={{ marginLeft: 10, marginRight: 10 }}>
      <Header className={styles.header}>
        <div>xxx物业</div>
        <Button  onClick={() => {
              history.push('/repair');
            }} type="primary" shape="round">
          前往管理系统
        </Button>
      </Header>
      <Content>
        <Carousel autoplay>
          <img
            className={styles.banner}
            src="http://47.104.19.238/gaochuang/source/uploads/admin/20210628/162485307819050.png"
            alt=""
          />
          <img
            className={styles.banner}
            src="http://47.104.19.238/gaochuang/source/uploads/admin/20180516/152646730926485.png"
            alt=""
          />
        </Carousel>
        <Row gutter={[0, 8]} style={{ marginTop: 10 }} justify="space-around">
          {renderTotalView(totalDate[1], '总上报数量')}
          {renderTotalView(totalDate[2], '已解决上报数量')}
          {renderTotalView(totalDate[3], '合作企业数量')}
          {renderTotalView(totalDate[4], '优秀员工数量')}
        </Row>
        <Row
          gutter={[8, 8]}
          style={{ marginTop: 10, backgroundColor: 'white', height: 300, overflow: 'hidden' }}
        >
          <Col span={16}>
            <Row gutter={[8, 8]}>
              <Col flex span={12}>
                <Carousel autoplay>
                  <img
                    className={styles.banner2}
                    src="http://47.104.19.238/gaochuang/source/uploads/admin/20210628/162485307819050.png"
                    alt=""
                  />
                  <img
                    className={styles.banner2}
                    src="http://47.104.19.238/gaochuang/source/uploads/admin/20180516/152646730926485.png"
                    alt=""
                  />
                </Carousel>
              </Col>
              <Col flex span={12}>
                <Tabs defaultActiveKey="1" animated>
                  <TabPane tab="园区动态" key="1">
                    {renderList()}
                  </TabPane>
                  <TabPane tab="企业新闻" key="2">
                    {renderList()}
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Tabs defaultActiveKey="1" animated>
              <TabPane tab="园区动态" key="1">
                {renderList()}
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
