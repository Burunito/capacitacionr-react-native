import React, { Component } from 'react'
import AppNavigator from '../components/app-navigator'
import NavigationService from '../components/navigation-service'
class AppNavigatorState extends Component {
  render() {
    return (
      <AppNavigator ref={ref => NavigationService.setTopLevelNavigator(ref)} />
    )
  }
}
export default AppNavigatorState