<style></style>
<template>
  <div>
    <left-menu></left-menu>
    <top-nav></top-nav>
    <teacher-list></teacher-list>
  </div>
</template>
<script>
  module.exports = {
    components: {
      'left-menu': LeftMenu,
      'top-nav': TopNav,
      'teacher-list': TeacherList
    },
  }
</script>
