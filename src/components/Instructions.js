import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

const Instructions = ({ text1, text2, text3 }) => {
  var counter = 0
  setInterval(()=>{
    counter ++
    //console.warn(counter)
  }, 1000)
  return (
    <View>
      <Text>
        {text1 + ' ' + text2 + ' ' + text3}
      </Text>
      <Text>
        {counter /*No funcionarán los cambios por ser stateless*/}
      </Text>
    </View>
  )
}

Instructions.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string
}

Instructions.defaultProps = {
  text1: 'Texto1',
  text2: 'Texto2',
  text3: 'Texto3'
}

export default Instructions
