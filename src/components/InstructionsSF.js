import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

export default class InstructionsSF extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Cualquier cosa',
      counter: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
      //console.warn(this.state.counter)
    }, 1000)
  }

  render() {
    const { text, counter } = this.state
    const { text1, text2, text3 } = this.props
    return (
      <View>
        <Text>
          {text1 + ' ' + text2 + ' ' + text3}
        </Text>
        <Text>
          {counter}
        </Text>
        <Text>
          {text}
        </Text>
      </View>
    )
  }
}

InstructionsSF.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string
}

InstructionsSF.defaultProps = {
  text1: 'Texto1',
  text2: 'Texto2',
  text3: 'Texto3'
}
