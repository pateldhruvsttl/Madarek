/**
 *
 * @Maker
 * @flow SliverTouch..
 */
import React, { Component } from 'react'
import { View } from 'react-native'
import Loader from './src/component/Loader'
// import AppRoute from './src/route/AppRoute'
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux'
import { store } from './src/redux/store/Store'
import AppRoute from './src/route/AppRoute';

var self;
export const onLoding = (status) => {
  self.setState({ isLoading: status })
}

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { isLoading: false }
  }

  componentDidMount() {
    self = this;
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ width: '100%', height: '100%' }}>
          <MenuProvider>
            {/* <AppRoute /> */}
            <AppRoute />
          </MenuProvider>
          {this.state.isLoading && <Loader />}
        </View>
      </Provider>
    )
  }
}


