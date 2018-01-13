<style></style>
<template>
  <div>
    <left-menu></left-menu>
    <top-nav></top-nav>
    <teacher-list></teacher-list>
  </div>
</template>
<script>
  import LeftMenu from'./LeftMenu.vue'
  import TopNav from'./TopNav.vue'
  import TeacherList from'./TeacherList.vue'
  // module.exports = {
  //   components: {
  //     'left-menu': LeftMenu,
  //     'top-nav': TopNav,
  //     // 'teacher-list': TeacherList
  //   },
  // }
  export default {
    components: {
      'left-menu': LeftMenu,
      'top-nav': TopNav,
      'teacher-list': TeacherList
    },
  }
</script>
