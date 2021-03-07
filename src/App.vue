<template>
  <div class="container"><router-view /></div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: inherit;
}

#app {
  font-family: "Times New Roman", Times, serif;
  min-height: 100vh;
}
.container {
  max-width: 950px;
  margin: 50px auto;
}
:root {
  background-image: url("./assets/images/background.png");
  background-size: cover;
}
</style>
