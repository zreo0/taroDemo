import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        {/* 这里应该显示组件的节点 但是结果没有 */}
        <router-view />
        {/* 这里应该是组件包着child但是最终渲染结果没有 */}
        <router-view>
          <view>im inside</view>
        </router-view>
      </View>
    )
  }
}
