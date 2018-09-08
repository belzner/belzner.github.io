Vue.component('menu-item', {
  template: `<li><a :href='item.link' :class='item.classes'>{{ item.title }}</a></li>`,
  props: [ 'item' ]
});

Vue.component('page-header', {
  template: `
    <div class='page-header'>
      <h1>Megan Belzner</h1>
      <ul class='menu'>
        <menu-item
          v-for='item in menuItems'
          v-bind:item='item'
        ></menu-item>
      </ul>
    </div>
  `,
  data: function () {
    return {
      menuItems: [
        { title: 'About', link: '#about', classes: '' },
        { title: 'Work', link: '#work', classes: '' },
        { title: 'Teaching', link: '#teaching', classes: '' },
        { title: 'Projects', link: '#projects', classes: '' },
        { title: '', link: 'mailto:megan.belzner@gmail.com', classes: 'fa fa-envelope-o' },
        { title: '', link: 'https://www.linkedin.com/in/meganbelzner', classes: 'fa fa-linkedin' },
        { title: '', link: 'https://github.com/belzner', classes: 'fa fa-github' },
        { title: '', link: 'https://twitter.com/belznering', classes: 'fa fa-twitter' }
      ]
    };
  }
});

Vue.component('carousel-section', {
  template: `
    <div class='section'>
      <h3 class='carousel-head'><span class="fa fa-angle-double-right"></span> {{ title }}</h3>
      <div class='carousel-wrapper'>
        <div class='arrows'>
          <div class='arrow fa fa-angle-left' v-on:click='moveLeft' v-bind:style='"visibility: " + (this.page > 0 ? "visible" : "hidden")'></div>
          <div class='arrow fa fa-angle-right' v-on:click='moveRight' v-bind:style='"visibility: " + (this.page < this.panelData.length - 1 ? "visible" : "hidden")'></div>
        </div>
        <div class='carousel' v-bind:style='"transform: translateX(-" + (this.page * 100) + "%)"'>
          <component
            v-for='(panel, idx) in panelData'
            v-bind:is='childComponent'
            v-bind:panel='panel'
            v-bind:idx='idx'
          ></component>
        </div>
      </div>
    </div>
  `,
  props: [ 'panelData', 'title', 'childComponent' ],
  data: function () {
    return {
      page: 0
    }
  },
  methods: {
    moveLeft: function(e) {
      if (this.page > 0) {
        this.page -= 1;
      }
    },
    moveRight: function(e) {
      if (this.page < this.panelData.length - 1) {
        this.page += 1;
      }
    }
  }
});
