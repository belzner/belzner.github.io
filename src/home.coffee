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
          "I'm a web developer, amateur graphic designer, and even-more-amateur linguist. "
          "In 2016, I graduated from the Massachusetts Institute of Technology where I "
          "got my bachelor's degree in Computer Science and Engineering. Now, I work at "
          D.a {href: 'https://www.skillshare.com'}, 'Skillshare'
          " as a software engineer. In my 'spare time', I "
          Link {to: 'classes'}, 'teach'
          " weekend enrichment classes to middle and high school students, "
          Link {to: 'projects'}, 'work'
          " on a variety of projects, and read things on the internet."

module.exports = Home
