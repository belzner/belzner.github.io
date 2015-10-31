React = require 'react'
D = React.DOM

Home = React.createClass
  render: ->
    D.div {className: 'body'},
      D.p {},
        "Hi! This site is still a work in progress. "
        "For now, you can see my old site at "
        D.a {href: 'http://belzner.me/'}, "belzner.me"
        "."

module.exports = Home
