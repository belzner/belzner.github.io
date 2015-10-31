React = require 'react'
D = React.DOM

Router = require 'react-router'
Route = React.createFactory Router.Route
DefaultRoute = React.createFactory Router.DefaultRoute
RouteHandler = React.createFactory Router.RouteHandler

Header = require './header'
Home = require './home'
Classes = require './classes'
Projects = require './projects'

About = React.createClass
  render: ->
    D.p {}, 'About'

Inbox = React.createClass
  render: ->
    D.p {}, 'Inbox'

App = React.createClass
  render: ->
    D.div {},
      React.createElement Header, {}
      RouteHandler()

routes = (
  Route {path: '/', handler: App},
    DefaultRoute {name: 'home', handler: Home}
    Route {name: 'classes', path: 'classes', handler: Classes}
    Route {name: 'projects', path: 'projects', handler: Projects}
)

Router.run(routes, Router.HashLocation, (Root) =>
  React.render(
    React.createElement Root
    document.getElementById 'app'
  )
)
