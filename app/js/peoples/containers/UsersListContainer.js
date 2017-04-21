import React, { Component, PropTypes } from 'react';
import UsersList from '../components/UsersList';

const FILTER_ALL = 0;
const FILTER_RESIGNING = 1;
const FILTER_NOT_RESIGNING = 2;


class UsersListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter : FILTER_ALL,
    };
    this.users = [];
    this.onFilterClick = this.onFilterClick.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  onFilterClick(filter) {
    this.setState({ filter });
  }

  getFilteredData(filter) {
    const data = [];
    switch (filter) {
      case FILTER_ALL :
        return this.users;
      case FILTER_RESIGNING :
        this.users.forEach((user) => { if (user.resigning) data.push(user); });
        return data;
      case FILTER_NOT_RESIGNING :
        this.users.forEach((user) => { if (!user.resigning) data.push(user); });
        return data;
      default :
        return data;
    }
  }

  loadData() {
    this.users = [
      {
        name : 'Olivier Cocray',
        resigning : false,
      },
      {
        name : 'Oli Clement',
        resigning : true,
      },
      {
        name : 'Olivier Legendre',
        resigning : false,
      },
      {
        name : 'Ludovic Szymalka',
        resigning : false,
      },
      {
        name : 'Morgan Auchedé',
        resigning : true,
      },
      {
        name : 'Laury Sorriaux',
        resigning : true,
      },
    ];
    this.forceUpdate();
  }

  render() {
    return (
      <UsersList
        filter = {this.state.filter}
        onFilter = {this.onFilterClick}
        users = {this.getFilteredData(this.state.filter)}
      />);
  }
}

module.exports = UsersListContainer;
