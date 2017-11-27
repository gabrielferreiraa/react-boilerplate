import React, { PureComponent } from 'react'
import { Table as DataTable } from 'antd'
import axios from 'axios'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

class Table extends PureComponent {
  constructor(props){
      super(props)

      this.state = {
        data: [],
        pagination: {},
        loading: true,
        title: () => 'Lista de participantes',
        locale: {
            filterConfirm: 'Ok',
            filterReset: 'Sem filtro',
            emptyText: 'Sem registro'
        }
      }
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    })
  }

  fetch = (params = {}) => (
    axios.get('https://randomuser.me/api', {
        params: {
            results: 100,
            ...params
        }
    })
        .then(result => result.data)
        .then(data => data.results)
        .then(data => this.setState({ data, loading: false }))
  )

  componentDidMount () {
    this.fetch()
  }

  render() {
    return (
      <DataTable
        {...this.state}
        columns={columns}
        rowKey={record => record.registered}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default Table
