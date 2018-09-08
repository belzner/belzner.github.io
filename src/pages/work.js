const workList = [
  {
    title: 'Skillshare',
    desc: `Skillshare is an online learning community with classes in design, business, and tech. I've worked at Skillshare as a full-stack software engineer since July 2016, and have been the technical lead for the Core Experience team, which focuses on product features for finding, taking, and creating classes, since April 2018. I've worked on a wide variety of projects, and led projects such as allowing subscription plans to display in international currencies, overhauling the logic behind our class search system, and creating external APIs for B2B clients. I also helped start the engineering apprenticeship program, and mentored our first apprentice.`,
    link: `<a href='https://www.skillshare.com/'>Website</a>`
  },
  {
    title: 'Luminoso',
    desc: `Luminoso is a text analytics company using artificial intelligence to gain insight from unstructured text. I interned at Luminoso in the summer of 2015 as a front-end engineer, working on a new data visualization product which integrated with their primary analytics platform. I worked on a team of 4 using React and D3 to create a tool which allowed clients to build custom visualizations from their data.`,
    link: `<a href='https://luminoso.com/get-to-know-us/about'>Website</a>`
  },
  {
    title: 'Tumblr',
    desc: `Tumblr is a social multimedia blogging platform. I interned at Tumblr in the summer of 2014 as a product engineer, working on the Creator Tools team to overhaul the interface for posting content. I worked on a team of 7 using Backbone to build a custom rich text editor and other key features.`,
    link: `<a href='https://www.tumblr.com/about'>Website</a>, <a href='https://engineering.tumblr.com/post/98050002584/megan-belzner-my-summer-at-tumblr-this-summer-i'>Blog Post</a>`
  }
];

const otherWork = [
  {
    title: 'Flourish Academic Enrichment',
    desc: `Flourish is a small startup organization which offers innovative educational programming for middle and high school students, primarily those in the Ohio area. In 2012 and 2013, I developed the initial outward-facing website for connecting with students and teachers, and created various internal tools for use by the program administrators.`,
    link: `<a href='https://web.archive.org/web/20140517134802/http://flourishacademics.org/'>Website Archive</a>`
  },
  {
    title: 'Research Science Institute',
    desc: `RSI is a prestigious summer program for high school students to do research with scientists and technologists in the Boston area. I worked as the Technical Director for the program in 2012 and 2013, managing and building tools for the students and staff and supporting the students in the technical aspects of preparing papers and presentations.`,
    link: `<a href='https://www.cee.org/research-science-institute'>Website</a>`
  },
  {
    title: 'Karen Marsh Architecture',
    desc: `This website was designed for a freelance architect in the New Mexico area in 2009. I worked in collaboration with the client to design and implement a simple, clean site to showcase her design talent and examples of her work.`,
    link: `<a href='http://karenmarsh.com/'>Website</a>`
  }
];

Vue.component('work-section', {
  template: `
    <div class='section static work'>
      <div class='head'>
        <h3><span class="fa fa-angle-double-right"></span> {{ work.title }}</h3>
        <div class='links'><span class="fa fa-link"></span> <span v-html='work.link'></span></div>
      </div>
      <div class='description'>{{ work.desc }}</div>
    </div>
  `,
  props: [ 'work', 'idx' ]
});

Vue.component('work-carousel-panel', {
  template: `
    <div class='panel work'>
      <div class='head'>
        <div class='title'>{{ panel.title }}</div>
        <div class='links'><span class="fa fa-link"></span> <span v-html='panel.link'></span></div>
      </div>
      <div class='description'>{{ panel.desc }}</div>
    </div>
  `,
  props: [ 'panel', 'idx' ]
});

Vue.component('page-work', {
  template: `
    <div class='page work'>
      <work-section
        v-for='(work, idx) in workList'
        v-bind:work='work'
        v-bind:idx='idx'
      ></work-section>
      <carousel-section
        v-bind:panelData='carouselData'
        v-bind:title='carouselTitle'
        v-bind:childComponent='carouselComponent'
      ></carousel-section>
    </div>
  `,
  data: function () {
    return {
      workList: workList,
      carouselData: otherWork,
      carouselTitle: 'Other Work',
      carouselComponent: 'work-carousel-panel'
    };
  }
});
