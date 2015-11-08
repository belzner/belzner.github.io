React = require 'react'
D = React.DOM

Router = require 'react-router'
Link = React.createFactory Router.Link

Home = React.createClass
  render: ->
    D.div {className: 'home'},
      D.div {className: 'intro'},
        D.h2 {},
          'I am '
          D.span {className: 'highlight'}, 'Megan'
          '.'
        D.p {},
          "I'm a web developer, amateur graphic designer, even-more-amateur linguist, "
          "and full-time student at the Massachusetts Institute of Technology where I'm "
          "working on my bachelor's degree in Computer Science and Engineering. In my "
          "'spare time', I "
          Link {to: 'classes'}, 'teach'
          " weekend enrichment classes to middle and high school students, "
          Link {to: 'projects'}, 'work'
          " on a variety of projects, and read things on the internet."

module.exports = Home
