const projectsList = [
  {
    title: 'JSim Netlist Expander',
    desc: `I designed this small web app in fall 2014 to help students in MIT's 6.004 Computation Structures class understand the syntax of the circuit description language (JSim) that the class used for labs. It showed how iterators (a shorthand for adding multiple components in one line) expanded to create the full component list, so students could understand how the wires were connected in a large circuit.`,
    link: `<a href='https://github.com/belzner/jsimTools'>Git Repo</a>`
  },
  {
    title: 'Pixelicity',
    desc: `"As you explore your city in the real world, you're building it in Pixelicity. Construct buildings, collect achievements, meet residents, and get to know the place you live." I created this website over the course of January 2014 as part of MIT's 6.470 Web Programming Competition, and received an honorable mention as well as the Most Unique Concept award.`,
    link: `<a href='https://pixelicity.herokuapp.com/'>Website</a>, <a href='https://github.com/belzner/pixelicity'>Git Repo</a>`
  },
  {
    title: 'Language Acquisition in Computers',
    desc: `As part of the 2011-2012 New Mexico Supercomputing Challenge, I worked in a team of two to design and implement algorithms for self-directed natural language learning and processing in AI systems. We were named finalists, and received the Creativity and Innovation award and the Best Written Report award.`,
    link: `<a href='http://arxiv.org/abs/1206.0042'>Report</a>, <a href='http://web.mit.edu/belzner/www/scc/'>Website</a>`
  },
  {
    title: 'Object Recognition on the iPhone',
    desc: `As part of the 2010-2011 New Mexico Supercomputing Challenge, I worked in a team of two to design a proof-of-concept system for efficient object recognition on the Apple iPhone.`,
    link: `<a href='http://www.supercomputingchallenge.org/archive/10-11/finalreports/34.pdf'>Report</a>`
  },
  {
    title: 'Arbitrary Precision Integers on the Cell Processor',
    desc: `As part of the 2009-2010 New Mexico Supercomputing Challenge, I worked in a team of three to design a partial arbitrary-precision integer library optimized for the multi-core Cell microprocessor used in many supercomputing applications. We were named finalists, and received the High Performance Computing award.`,
    link: `<a href='http://www.supercomputingchallenge.org/archive/09-10/finalreports/36.pdf'>Report</a>`
  },
  {
    title: 'Pokémon Squared',
    desc: `I designed and built this website in 2009 and 2010 as a personal project, publishing various articles on Pokémon and other topics.`,
    link: `<a href='https://web.archive.org/web/20110208052256/http://pokemonsquared.com/'>Website Archive</a>`
  }
];

Vue.component('project-section', {
  template: `
    <div class='section static projects'>
      <div class='head'>
        <h3><span class="fa fa-angle-double-right"></span> {{ project.title }}</h3>
        <div class='links'><span class="fa fa-link"></span> <span v-html='project.link'></span></div>
      </div>
      <div class='description'>{{ project.desc }}</div>
    </div>
  `,
  props: [ 'project', 'idx' ]
});

Vue.component('page-projects', {
  template: `
    <div class='page projects'>
      <project-section
        v-for='(project, idx) in projects'
        v-bind:project='project'
        v-bind:idx='idx'
      ></project-section>
    </div>
  `,
  data: function () {
    return {
      projects: projectsList
    };
  }
});
