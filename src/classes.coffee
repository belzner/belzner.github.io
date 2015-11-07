React = require 'react'
D = React.DOM

cx = require 'classnames'

classesList = require './classesList'

DisplayBlock = React.createFactory React.createClass
  render: ->
    D.div {className: 'entry'},
      D.div {className: 'entry-inner'},
        D.h3 {}, @props.data.title
        D.p {}, @props.data.desc
      D.p {className: 'more', onClick: => @props.cb @props.id}, 'More'

DisplayFull = React.createFactory React.createClass
  getColor: ->
    colors = ['#54b980', '#5089a5', '#aee86a']
    colors[@props.id % 3]

  render: ->
    D.span {className: 'large', style: {backgroundColor: @getColor()}},
      D.div {className: 'large-inner'},
        D.h3 {}, @props.data.title
        D.p {}, @props.data.desc
        D.p {}, 'Taught in ', @props.data.semester, ' for ', @props.data.grade, ' grade students.'
      D.p {className: 'exit', onClick: => @props.cb -1}, D.i {className: 'fa fa-close fa-2x'}

Classes = React.createClass
  getInitialState: ->
    openID: -1

  setOpenID: (id) ->
    @setState {openID: id}

  render: ->
    D.div {className: 'body block-display'},
      (
        for i in [0..classesList.length-1]
          (
            if @state.openID is i
              [
                DisplayBlock {id: i, data: classesList[i], cb: @setOpenID}
                DisplayFull {id: @state.openID, data: classesList[@state.openID], cb: @setOpenID}
              ]
            else
              [
                DisplayBlock {id: i, data: classesList[i], cb: @setOpenID}
              ]
          )
      )...
      (
        for i in [1..3]
          D.div {className: 'filler'}
      )...

module.exports = Classes
