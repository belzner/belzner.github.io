React = require 'react'
D = React.DOM

cx = require 'classnames'

classesList = require './classesList'

SingleClass = React.createFactory React.createClass
  render: ->
    D.div {className: 'entry'}

Classes = React.createClass
  render: ->
    D.div {className: 'body block-display'},
      (
        for c in classesList
          SingleClass {data: c}
      )...
      (
        for i in [1..3]
          D.div {className: 'filler'}
      )...

module.exports = Classes
