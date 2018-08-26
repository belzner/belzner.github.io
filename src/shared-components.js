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
