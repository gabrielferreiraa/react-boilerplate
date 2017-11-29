import React, { PureComponent } from 'react'
import { Table as DataTable, Input, Button, Icon } from 'antd'
import axios from 'axios'

class Table extends PureComponent {
  constructor(props){
      super(props)

      this.state = {
        data: [],
        pagination: {},
        loading: true,
        searchText: '',
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
      loading: true
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

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: this.state.data.map((record) => {
        const name = `${record.name.first} ${record.name.last}`

        const match = name.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    })
  }

  componentDidMount () {
    this.fetch()
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: name => `${name.first} ${name.last}`,
      width: '20%',
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        });
      }
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

    return (
      <DataTable
        {...this.state}
        columns={columns}
        rowKey={record => record.registered}
        dataSource={this.state.data}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default Table
