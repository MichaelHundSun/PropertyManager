import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Badge, Button, Card, Descriptions, Divider, Space, Popconfirm, message } from 'antd';
import {
  EllipsisOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import React from 'react';
import { history, useRequest } from 'umi';
import { queryBasicProfile } from './service';
import styles from './style.less';
import ProForm, {
  ModalForm,
  DrawerForm,
  QueryFilter,
  LightFilter,
  StepsForm,
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormRadio,
  ProFormDateTimePicker,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-form';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const ProfileBasic = () => {
  const { data, loading } = useRequest(() => {
    return queryBasicProfile();
  });
  const progressColumns = [
    {
      title: '电工',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '时间',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: '出工时长',
      dataIndex: 'length',
      key: 'length',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      width: 200,
      key: 'option',
      valueType: 'option',
      render: () => {
        return [
          <ModalForm
            title="修改记录"
            onFinish={async (values) => {
              await waitTime(2000);
              console.log(values);
              message.success('修改记录成功');
              return true;
            }}
            trigger={
              <Button
                className={styles.button}
                style={{ padding: 0, margin: 0 }}
                size="small"
                type="link"
                key="link"
              >
                修改
              </Button>
            }
          >
            <ProFormSelect
              width="md"
              name="name"
              label={`出工人`}
              options={[
                {
                  value: 'sjw',
                  label: '孙建伟',
                },
                {
                  value: 'lq',
                  label: '李强',
                },
              ]}
            />
            <ProFormDateTimePicker width="md" name="startTime" label={`开始时间`} />
            <ProFormDateTimePicker width="md" name="endTime" label={`结束时间`} />
            <ProFormSelect
              width="md"
              name="statues"
              label={`状态`}
              options={[
                {
                  value: 'sjw',
                  label: '已完成',
                },
                {
                  value: 'lq',
                  label: '未完成',
                },
              ]}
            />
          </ModalForm>,

          <Popconfirm key="popconfirm" title={`确认删除吗?`} okText="是" cancelText="否">
            <Button style={{ padding: 0, margin: 0 }} type="link">
              删除
            </Button>
          </Popconfirm>,

          // <TableDropdown
          //   key="actionGroup"
          //   menus={[
          //     { key: 'copy', name: '复制' },
          //     { key: 'delete', name: '删除' },
          //   ]}
          // />,
        ];
      },
    },
  ];
  const { basicGoods, basicProgress } = {
    basicGoods: [
      {
        time: '孙建伟',
        rate: '2021/07/05 09:00 ~ 2021/07/05 12:00',
        length: '3小时',

        status: '已完成',
      },
    ],
    basicProgress: [
      {
        time: '孙建伟',
        rate: '2021/07/05 09:00 ~ 2021/07/05 12:00',
        length: '3小时',
        endTime: '2021/07/05',
        status: '已完成',
      },
      {
        time: '孙建伟',
        rate: '2021/07/05 09:00 ~ 2021/07/05 12:00',
        length: '3小时',
        endTime: '2021/07/05',
        status: '已完成',
      },
    ],
  };
  const goodsData = [
    {
      id: '李强',
      name: '2021/07/5',
      barcode: '已完成',
      price: '30.00',
    },
    {
      id: '李强',
      name: '2021/07/5',
      barcode: '未完成',
      price: '28.00',
    },
    {
      id: '李强',
      name: '2021/07/5',
      barcode: '已完成',
      price: '30.00',
    },
  ];

  // if (basicGoods.length) {
  //   let num = 0;
  //   let amount = 0;
  //   basicGoods.forEach((item) => {
  //     num += Number(item.num);
  //     amount += Number(item.amount);
  //   });
  //   goodsData = basicGoods.concat({
  //     id: '总计',
  //     num,
  //     amount,
  //   });
  // }

  const renderContent = (value, _, index) => {
    const obj = {
      children: value,
      props: {},
    };

    if (index === basicGoods.length) {
      obj.props.colSpan = 0;
    }

    return obj;
  };

  const goodsColumns = [
    {
      title: '维修员',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '维修时间',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '维修状态',
      dataIndex: 'barcode',
      key: 'barcode',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '操作',
      width: 200,
      key: 'option',
      valueType: 'option',
      render: () => {
        return [
          <ModalForm
            title="修改记录"
            onFinish={async (values) => {
              await waitTime(2000);
              console.log(values);
              message.success('修改记录成功');
              return true;
            }}
            trigger={
              <Button
                className={styles.button}
                style={{ padding: 0, margin: 0 }}
                size="small"
                type="link"
                key="link"
              >
                修改
              </Button>
            }
          >
            <ProFormSelect
              width="md"
              name="name"
              label={`出工人`}
              options={[
                {
                  value: 'sjw',
                  label: '孙建伟',
                },
                {
                  value: 'lq',
                  label: '李强',
                },
              ]}
            />
            <ProFormDateTimePicker width="md" name="startTime" label={`开始时间`} />
            <ProFormDateTimePicker width="md" name="endTime" label={`结束时间`} />
            <ProFormSelect
              width="md"
              name="statues"
              label={`状态`}
              options={[
                {
                  value: 'sjw',
                  label: '已完成',
                },
                {
                  value: 'lq',
                  label: '未完成',
                },
              ]}
            />
          </ModalForm>,

          <Popconfirm key="popconfirm" title={`确认删除吗?`} okText="是" cancelText="否">
            <Button style={{ padding: 0, margin: 0 }} type="link">
              删除
            </Button>
          </Popconfirm>,

          // <TableDropdown
          //   key="actionGroup"
          //   menus={[
          //     { key: 'copy', name: '复制' },
          //     { key: 'delete', name: '删除' },
          //   ]}
          // />,
        ];
      },
    },
  ];
  return (
    <PageContainer>
      <Button
        type="primary"
        onClick={() => {
          history.goBack();
        }}
      >
        返回
      </Button>
      <Card bordered={false}>
        <Descriptions
          title="反馈信息"
          style={{
            marginBottom: 32,
          }}
        >
          <Descriptions.Item label="反馈人">孙建伟</Descriptions.Item>
          <Descriptions.Item label="反馈企业">天津高新技术有限公司</Descriptions.Item>
          <Descriptions.Item label="反馈人联系方式">1234123421</Descriptions.Item>
          <Descriptions.Item label="反馈时间">2021/07/5</Descriptions.Item>
          <Descriptions.Item label="反馈内容">
            门禁失效,门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效
          </Descriptions.Item>
        </Descriptions>
        <Divider
          style={{
            marginBottom: 32,
          }}
        />
        <Descriptions
          title="处理信息"
          style={{
            marginBottom: 32,
          }}
        >
          <Descriptions.Item label="处理状态">已完成</Descriptions.Item>
          <Descriptions.Item label="处理人">李强</Descriptions.Item>
          <Descriptions.Item label="处理时间">2021/07/5</Descriptions.Item>
          <Descriptions.Item label="处理内容">
            处理成功,处理成功处理成功处理成功处理成功处理成功处理成功处理成功处理成功处理成功处理成功处理成功处理成功
          </Descriptions.Item>
        </Descriptions>
        <Divider
          style={{
            marginBottom: 32,
          }}
        />
        <div className={styles.title}>维修记录</div>
        <ProTable
          style={{
            marginBottom: 24,
          }}
          pagination={false}
          search={false}
          loading={loading}
          options={false}
          toolBarRender={false}
          dataSource={goodsData}
          columns={goodsColumns}
          rowKey="id"
          toolBarRender={() => [
            <ModalForm
              title="新建记录"
              onFinish={async (values) => {
                await waitTime(2000);
                console.log(values);
                message.success('修改记录成功');
                return true;
              }}
              trigger={
                <Button type="primary">
                  <PlusOutlined />
                  新建记录
                </Button>
              }
            >
              <ProFormSelect
                width="md"
                name="name"
                label={`出工人`}
                options={[
                  {
                    value: 'sjw',
                    label: '孙建伟',
                  },
                  {
                    value: 'lq',
                    label: '李强',
                  },
                ]}
              />
              <ProFormDateTimePicker width="md" name="startTime" label={`开始时间`} />
              <ProFormDateTimePicker width="md" name="endTime" label={`结束时间`} />
              <ProFormSelect
                width="md"
                name="statues"
                label={`状态`}
                options={[
                  {
                    value: 'sjw',
                    label: '已完成',
                  },
                  {
                    value: 'lq',
                    label: '未完成',
                  },
                ]}
              />
            </ModalForm>,
          ]}
        />
        <div className={styles.title}>电工出工记录</div>
        <ProTable
          style={{
            marginBottom: 16,
          }}
          pagination={false}
          loading={loading}
          search={false}
          options={false}
          toolBarRender={false}
          dataSource={basicProgress}
          columns={progressColumns}
          toolBarRender={() => [
            <ModalForm
              title="新建记录"
              onFinish={async (values) => {
                await waitTime(2000);
                console.log(values);
                message.success('修改记录成功');
                return true;
              }}
              trigger={
                <Button type="primary">
                  <PlusOutlined />
                  新建记录
                </Button>
              }
            >
              <ProFormSelect
                width="md"
                name="name"
                label={`出工人`}
                options={[
                  {
                    value: 'sjw',
                    label: '孙建伟',
                  },
                  {
                    value: 'lq',
                    label: '李强',
                  },
                ]}
              />
              <ProFormDateTimePicker width="md" name="startTime" label={`开始时间`} />
              <ProFormDateTimePicker width="md" name="endTime" label={`结束时间`} />
              <ProFormSelect
                width="md"
                name="statues"
                label={`状态`}
                options={[
                  {
                    value: 'sjw',
                    label: '已完成',
                  },
                  {
                    value: 'lq',
                    label: '未完成',
                  },
                ]}
              />
            </ModalForm>,
          ]}
        />
      </Card>
    </PageContainer>
  );
};

export default ProfileBasic;
