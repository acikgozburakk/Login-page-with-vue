<template>
  <div class="choosescreen">
    <i class="fas fa-chevron-left"></i>
    <div class="image">
      <img class="png" :src="img" alt="awp" />
      <div class="imagefooter">
        <p>{{ weapontype }}</p>
      </div>
    </div>
    <i class="fas fa-chevron-right"></i>
  </div>
</template>
<script>
export default {
  props: ["img", "weapontype"],
};
</script>

<style lang="scss" scoped>
.choosescreen {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  i {
    color: #ffb100;
    font-size: 30px;
    padding: 0 10px;
    cursor: pointer;
  }
  .image {
    background-image: linear-gradient(#464545, #000000);
    border: none;
    border-radius: 10px;
    width: 350px;

    img {
      margin-left: 10px;
      width: 80%;
      height: 80px;
    }
    .imagefooter {
      background-color: #5d635f;
      color: #ffb100;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
    }
    &:hover {
      border: 2px solid #ffb100;
      .imagefooter {
        background-color: #ffb100;
        color: #000000;
      }
    }
  }
}
</style>