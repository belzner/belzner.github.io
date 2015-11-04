React = require 'react'
D = React.DOM

cx = require 'classnames'

classesList = require './classesList'

SingleClass = React.createFactory React.createClass
  render: ->
    D.div {className: 'entry'},
      D.div {className: 'entry-inner'},
        D.h3 {}, @props.data.title
        D.p {}, @props.data.desc

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
