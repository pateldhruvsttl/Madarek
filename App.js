/**
 *
 * @Maker
 * @flow SliverTouch..
 */
 import React, { Component } from 'react'
 import { View } from 'react-native'
 import Loader from './src/component/Loader'
 import AppRoute from './src/route'
 
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
       <View style={{ width: '100%', height: '100%'}}>
         <AppRoute />
         {this.state.isLoading && <Loader />}
       </View>
 
     )
   }
 }
 
 