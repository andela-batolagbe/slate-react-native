import React from 'react'
import { View, Text } from 'react-native'

export class Output extends React.Component {

  render() {
    return (
      <View data-slate-editor={ true } contenteditable={ true } role={ "textbox" }>
        <View style={{ position: 'relative' }}>
          <View>
            <Text>word</Text>
          </View>
        </View>
      </View>
    )
  }
}