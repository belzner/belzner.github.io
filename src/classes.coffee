React = require 'react'
D = React.DOM

cx = require 'classnames'

classesList = require './classesList'

SingleClass = React.createFactory React.createClass
  getInitialState: ->
    isOpen: false

  renderLarge: ->
    D.div {className: 'large'},
      D.div {className: 'large-inner'},
        D.h3 {}, @props.data.title
        D.p {}, @props.data.desc
      D.p {className: 'exit', onClick: => @switchOpen false}, D.i {className: 'fa fa-close fa-2x'}

  renderSmall: ->
    D.div {className: 'entry'},
      D.div {className: 'entry-inner'},
        D.h3 {}, @props.data.title
        D.p {}, @props.data.desc
      D.p {className: 'more', onClick: => @switchOpen true}, 'More'

  switchOpen: (to) ->
    @setState {isOpen: to}

  render: ->
    (
      if @state.isOpen
        @renderLarge()
      else
        @renderSmall()
    )

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
