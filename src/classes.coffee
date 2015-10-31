React = require 'react'
D = React.DOM

cx = require 'classnames'

classesList = require './classesList'

SingleClass = React.createFactory React.createClass
  getInitialState: ->
    collapsed: true

  render: ->
    D.div {className: cx {
      'body-circle': true
    }}

Classes = React.createClass
  render: ->
    D.div {className: 'body'},
      (
        for c in classesList
          SingleClass {data: c}
      )...
      (
        for i in [1..3]
          D.div {className: 'filler'}
      )...

module.exports = Classes
