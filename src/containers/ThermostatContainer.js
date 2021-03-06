import { connect } from 'react-redux';
import Thermostat from "../components/Thermostat";

function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

var otherFunction = connect(mapStateToProps);
var ThermostatContainer = otherFunction(Thermostat);
export default ThermostatContainer;


