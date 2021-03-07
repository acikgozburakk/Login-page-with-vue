<template>
  <div class="main">
    <left-side />
    <right-side />
  </div>
</template>

<script>
import LeftSide from "../components/Home/leftSide.vue";
import RightSide from "../components/Home/rightSide.vue";
export default {
  data() {
    return {};
  },
  components: { LeftSide, RightSide },
};
</script>
    LeftSide

<style lang="scss" scoped>
.main {
  display: flex;
  overflow-wrap: break-word;
}

@media screen and (max-width: 600px) {
  .main {
    display: flex;
    flex-direction: column-reverse;
    margin-left: auto;
  }
}
</style>
