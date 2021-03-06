import { connect } from 'react-redux';
import Users from "../components/Users";

function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

var otherFunction = connect(mapStateToProps);
var UsersContainer = otherFunction(Users);
export default UsersContainer;


