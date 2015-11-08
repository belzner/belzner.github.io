React = require 'react'
D = React.DOM

cx = require 'classnames'

projectsList = require './projectsList'

SingleProject = React.createFactory React.createClass
  render: ->
    D.div {className: 'block'},
      D.div {className: 'inner'},
        D.h3 {}, @props.data.title
        D.p {}, @props.data.desc
        D.p {}, 'Made in ', @props.data.time, '.'
        (
          if @props.data.link
            D.p {},
              D.b {}, 'Links: '
              D.span {dangerouslySetInnerHTML: {__html: @props.data.link}}
        )

Projects = React.createClass
  render: ->
    D.div {className: 'projects'},
      D.div {className: 'intro'},
        D.h2 {},
          'I '
          D.span {className: 'highlight'}, 'make'
          ' things.'
        D.p {},
          "Since I started teaching myself how to program at the beginning of high school, "
          "I've worked on several small projects at various times and in various contexts. "
          "The examples listed below represent some of these projects, ranging from client "
          "websites to personal websites to research-focused and competition-focused projects."
      D.div {className: 'border'}
      D.div {className: 'body block-display'},
        (
          for p in projectsList
            SingleProject {data: p}
        )...
        (
          for i in [1..3]
            D.div {className: 'filler'}
        )...

module.exports = Projects
