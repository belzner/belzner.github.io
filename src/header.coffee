React = require 'react'
D = React.DOM

Router = require 'react-router'
Link = React.createFactory Router.Link

Header = React.createClass
  render: ->
    D.div {className: 'header-container'},
      D.div {className: 'header'},
        D.h1 {className: 'site-title'}, 'Megan Belzner'
        D.div {className: 'menubar'},
          Link {to: 'home', className: 'menubar-link'}, 'Home'
          Link {to: 'classes', className: 'menubar-link'}, 'Classes'
          Link {to: 'projects', className: 'menubar-link'}, 'Projects'
      D.div {className: 'header-border'}

module.exports = Header
