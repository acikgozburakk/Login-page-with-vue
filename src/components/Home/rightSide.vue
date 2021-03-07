<template>
  <div class="rightside">
    <div class="choose">
      <h3>SİLAHINI SEÇ</h3>
      <choose :img="awp" :weapontype="`AWP`" />
      <h3>TABANCANI SEÇ</h3>
      <choose :img="pistol" :weapontype="`DESERT EAGLE`" />
      <h3>BIÇAĞINI SEÇ</h3>
      <choose :img="knife" :weapontype="`KARAMBİT`" />
      <h3>KARAKTERİNİ SEÇ</h3>
      <choose :img="character" :weapontype="`ŞAHİN KILIÇ`" />
    </div>
  </div>
</template>
<script>
import choose from "../Home/rightSide/choose";
export default {
  data() {
    return {
      awp:
        "https://cdn.itemsatis.com/uploads/images/5164b87f77c7bc94cc0edf1ce3d373d2338ad3aa.png",
      pistol:
        "http://img2.wikia.nocookie.net/__cb20130519091344/combatarms/images/6/68/Desert_Eagle.png",
      knife:
        "https://www.idcgames.com/images/resources/Zula/116_2/Newyearhuntsman.png",
      character: "https://i.hizliresim.com/l4zqbl.png",
    };
  },
  components: {
    choose,
  },
};
</script>
<style lang="scss" scoped>
.rightside {
  max-width: 400px;
  width: 100%;
  .choose {
    margin-left: 5rem;
    * {
      padding-top: 8px;
    }
    h3 {
      color: white;
      font-weight: bold;
    }
  }
}
</style>