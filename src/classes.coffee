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
    colors = ['#b3eacb', '#b2d4e4', '#ddf8be']
    colors[@props.id % 3]

  render: ->
    D.span {className: 'large', style: {backgroundColor: @getColor()}},
      D.div {className: 'large-inner'},
        D.h3 {}, @props.data.title
        D.p {}, @props.data.desc
        D.p {},
          'Taught in ', @props.data.semester, ' for ', @props.data.grade
          ' students at ', @props.data.type, '.'
        (
          if @props.data.excerpt
            D.p {},
              D.b {}, 'Fun Fact: '
              @props.data.excerpt
        )
        (
          if @props.data.materials
            D.p {},
              D.b {}, 'Materials: '
              D.span {dangerouslySetInnerHTML: {__html: @props.data.materials}}
        )
      D.p {className: 'exit', onClick: => @props.cb -1}, D.i {className: 'fa fa-close fa-2x'}

Classes = React.createClass
  getInitialState: ->
    openID: -1

  setOpenID: (id) ->
    @setState {openID: id}

  render: ->
    D.div {className: 'classes'},
      D.div {className: 'intro'},
        D.h2 {},
          'I '
          D.span {className: 'highlight'}, 'teach'
          ' things.'
        D.p {},
          'Freshman year at MIT, I joined the '
          D.a {href: 'https://esp.mit.edu/about/index.html'}, 'Educational Studies Program'
          ' (ESP), and have since developed taught over 50 hours of classes to hundreds of middle '
          'and high school students from the Boston area and beyond. My classes, like my interests, '
          'cover a wide range of topics from linguistics to web design to computer networking and systems. '
          'I\'ve also taught a handful of classes outside of ESP, through the '
          D.a {href: 'http://www.cee.org/research-science-institute'}, 'Research Science Institute'
          ' (RSI) and the '
          D.a {href: 'https://sipb.mit.edu/iap/'}, 'Student Information Processing Board'
          ' (SIPB).'
        D.p {},
          "Click on 'more' below each class to learn more about it!"
      D.div {className: 'border'}
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
