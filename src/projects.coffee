React = require 'react'
D = React.DOM

cx = require 'classnames'

projectsList = require './projectsList'

SingleProject = React.createFactory React.createClass

  render: ->
    D.div {className: cx {
      'body-circle': true
    }}

Projects = React.createClass
  render: ->
    D.div {className: 'body'},
      (
        for p in projectsList
          SingleProject {data: p}
      )...
      (
        for i in [1..3]
          D.div {className: 'filler'}
      )...

module.exports = Projects
