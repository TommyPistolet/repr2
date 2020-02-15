import React from "react";

import AdminPageClientList from "../components/AdminPageClientList/AdminPageClientList";

class AdminPageClientListContainer extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        console.log(users);
        this.setState({ users: users });
      });
  };

  render() {
    return <AdminPageClientList users={this.state.users} />;
  }
}

export default AdminPageClientListContainer;
