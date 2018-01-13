var ChatList = Vue.component('chat-list', {
  template: `
  <ul>
    <li><img src="./img/chat01.jpg" alt="" /></li>
    <li><img src="./img/chat02.jpg" alt="" /></li>
    <li><img src="./img/chat03.jpg" alt="" /></li>
    <li><img src="./img/chat04.jpg" alt="" /></li>
    <li><img src="./img/chat05.jpg" alt="" /></li>
    <li><img src="./img/chat06.jpg" alt="" /></li>
    <li><img src="./img/chat07.jpg" alt="" /></li>
    <li><img src="./img/chat08.jpg" alt="" /></li>
  </ul>
  `,
  data: function () {
    return {
      imgs: [
        './img/chat01.jpg',
        './img/chat02.jpg',
        './img/chat03.jpg',
        './img/chat04.jpg',
        './img/chat05.jpg',
        './img/chat06.jpg',
        './img/chat07.jpg',
        './img/chat08.jpg',
      ]
    }
  },
  methods: {
    
  }
})
