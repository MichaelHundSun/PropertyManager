import React from 'react';
import { Button, Tooltip, Dropdown, Menu, Input, Popconfirm, message } from 'antd';
import {
  EllipsisOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
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
import styles from './index.less';
import { history } from '@/.umi/core/history';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  createdAt: number;
  org: string;
  reportName: string;
  phone: string;
  reportTitle: string;
  status: string;
  name: string;
  title: string;
  // name: string;
  // containers: number;
  // creator: string;
  // status: string;

  // progress: number;
  // money: number;
  // memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    org: '天津高新技术有限公司',
    reportName: '张三',
    phone: '17702254320',
    reportTitle:
      '门禁失效,门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效门禁失效',
    status: valueEnum[i % 4],
    name: '李四',
    title:
      '处理成功,处理成功处理成功处理成功处理成功处理成功处理成功处理成功处理成功处理成功处理成功处理成功处理成功',
    // containers: Math.floor(Math.random() * 20),
    // creator: creators[Math.floor(Math.random() * creators.length)],
    // status: valueEnum[Math.floor(Math.random() * 10) % 4],

    // money: Math.floor(Math.random() * 2000) * i,
    // progress: Math.ceil(Math.random() * 100) + 1,
    // memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
  });
}

export default () => {
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 48,
    },
    {
      title: '反馈时间',
      width: 140,

      dataIndex: 'createdAt',
      valueType: 'date',
    },
    {
      title: '反馈企业',
      // width: 140,

      dataIndex: 'org',
    },
    {
      title: '反馈人',
      // width: 140,

      dataIndex: 'reportName',
    },
    {
      title: '反馈人联系方式',
      dataIndex: 'phone',
    },
    {
      title: '反馈内容',
      dataIndex: 'reportTitle',
      ellipsis: true,
      search: false,
    },
    {
      title: '处理状态',
      dataIndex: 'status',
      initialValue: 'all',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        close: { text: '待处理', status: 'Error' },
        running: { text: '已上报', status: 'Processing' },
        online: { text: '费用待审批', status: 'Processing' },
        error: { text: '已完成', status: 'Success' },
      },
    },
    {
      title: '处理内容',
      dataIndex: 'title',
      ellipsis: true,
      search: false,
    },
    {
      title: '操作',
      width: 200,
      key: 'option',
      valueType: 'option',
      render: (_, entity) => {
        return [
          <Button
            className={styles.button}
            style={{ padding: 0, margin: 0 }}
            size="small"
            disabled={entity.status === 'error'}
            type="link"
            key="link"
          >
            派单
          </Button>,
          <Button
            style={{ padding: 0, margin: 0 }}
            disabled={
              entity.status === 'error' || entity.status === 'running' || entity.status === 'online'
            }
            type="link"
            key="link2"
          >
            上报
          </Button>,
          <Popconfirm
            disabled={entity.status === 'error'}
            key="popconfirm"
            title={`确认结单吗?`}
            okText="是"
            cancelText="否"
          >
            <Button
              style={{ padding: 0, margin: 0 }}
              disabled={entity.status === 'error'}
              type="link"
            >
              结单
            </Button>
          </Popconfirm>,
          <Button
            style={{ padding: 0, margin: 0 }}
            type="link"
            key="link3"
            onClick={() => {
              history.push('/repair/profilebasic');
            }}
          >
            详情
          </Button>,
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
    // {
    //   title: '反馈时间',
    //   dataIndex: 'name',
    //   render: (_) => <a>{_}</a>,
    //   // 自定义筛选项功能具体实现请参考 https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
    //   filterDropdown: () => (
    //     <div style={{ padding: 8 }}>
    //       <Input style={{ width: 188, marginBottom: 8, display: 'block' }} />
    //     </div>
    //   ),
    //   filterIcon: (filtered) => (
    //     <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    //   ),
    // },
    // {
    //   title: '创建者',
    //   dataIndex: 'creator',
    //   valueEnum: {
    //     all: { text: '全部' },
    //     付小小: { text: '付小小' },
    //     曲丽丽: { text: '曲丽丽' },
    //     林东东: { text: '林东东' },
    //     陈帅帅: { text: '陈帅帅' },
    //     兼某某: { text: '兼某某' },
    //   },
    // },
    // {
    //   title: '状态',
    //   dataIndex: 'status',
    //   initialValue: 'all',
    //   filters: true,
    //   onFilter: true,
    //   valueEnum: {
    //     all: { text: '全部', status: 'Default' },
    //     close: { text: '关闭', status: 'Default' },
    //     running: { text: '运行中', status: 'Processing' },
    //     online: { text: '已上线', status: 'Success' },
    //     error: { text: '异常', status: 'Error' },
    //   },
    // },
    // {
    //   title: (
    //     <>
    //       创建时间
    //       <Tooltip placement="top" title="这是一段描述">
    //         <QuestionCircleOutlined style={{ marginLeft: 4 }} />
    //       </Tooltip>
    //     </>
    //   ),
    //   width: 140,
    //   key: 'since',
    //   dataIndex: 'createdAt',
    //   valueType: 'date',
    //   sorter: (a, b) => a.createdAt - b.createdAt,
    // },
    // {
    //   title: '备注',
    //   dataIndex: 'memo',
    //   ellipsis: true,
    //   copyable: true,
    // },
    // {
    //   title: '操作',
    //   width: 180,
    //   key: 'option',
    //   valueType: 'option',
    //   render: () => [
    //     <a key="link">链路</a>,
    //     <a key="link2">报警</a>,
    //     <a key="link3">监控</a>,
    //     <TableDropdown
    //       key="actionGroup"
    //       menus={[
    //         { key: 'copy', name: '复制' },
    //         { key: 'delete', name: '删除' },
    //       ]}
    //     />,
    //   ],
    // },
  ];
  return (
    <ProTable<TableListItem>
      bordered={true}
      cardBordered={{ search: true, table: true }}
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        layout: 'vertical',
        defaultCollapsed: false,
      }}
      dateFormatter="string"
      // toolBarRender={false}
      toolBarRender={() => [
        <ModalForm
          labelWidth="auto"
          trigger={
            <Button type="primary">
              <PlusOutlined />
              新建上报
            </Button>
          }
          onFinish={async (values: any) => {
            await waitTime(2000);
            console.log(values);
            message.success('提交成功');
          }}
          initialValues={{
            name: '',
            useMode: '',
            createTime: new Date(),
          }}
        >
          {/* <ProForm.Group> */}
          <ProFormText
            width="md"
            name="name"
            label="反馈企业"
            tooltip="最长为 24 位"
            placeholder="请输入反馈企业"
          />
          <ProFormText width="md" name="company" label="反馈人" placeholder="请输反馈人" />
          {/* </ProForm.Group> */}
          {/* <ProForm.Group> */}
          <ProFormText
            name={['contract', 'name']}
            width="md"
            label="反馈人联系方式"
            placeholder="请输入反馈人联系方式"
          />
          <ProFormDateTimePicker width="md" name={['createTime']} label="反馈时间" />
          {/* </ProForm.Group> */}

          <ProFormText width="sm" name="id" label="主合同编号" />
          <ProFormTextArea name="project" width="md" label="反馈内容" initialValue="" />
          <ProFormUploadButton
            extra="支持扩展名：.jpg .png"
            label="上传图片"
            name="file"
            title="上传图片"
          />
        </ModalForm>,
      ]}
      options={false}
      // toolbar={{
      //   title: '高级表格',
      //   tooltip: '这是一个标题提示',
      // }}
      // toolBarRender={() => [
      //   <Button key="danger" danger>
      //     危险按钮
      //   </Button>,
      //   <Button key="show">查看日志</Button>,
      //   <Button type="primary" key="primary">
      //     创建应用
      //   </Button>,
      //   <Dropdown key="menu" overlay={menu}>
      //     <Button>
      //       <EllipsisOutlined />
      //     </Button>
      //   </Dropdown>,
      // ]}
    />
  );
};
