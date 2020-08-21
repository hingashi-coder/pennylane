<template>
  <div>
    <topImage></topImage>
    <div id="welcome">
      <p>ペニーレーンへようこそ</p>
    </div>
    <div class="msg">
      <span>
        インターネットに接続されました。
      </span>
    </div>
    <div class = "info">
      <a class="twitter-timeline" data-heigt="500" href="https://twitter.com/pennylane_Sugi?ref_src=twsrc%5Etfw">Tweets by pennylane_Sugi</a>
      <div is="script" async src="https://platform.twitter.com/widgets.js" charset="utf-8"></div>
    </div>
  </div>
</template>
<script>
import topImage from './topImage.vue'
export default {
  components: {
    topImage
  }
}
</script>
<style scoped>
#welcome{
  background:white;
  border-radius: 1em;
  margin:10px;
  padding:20px 0;
  display: flex;
  align-items: center;
}
#welcome > p {
  margin: 0 auto;
  font-size:20px;
}
.info{
  margin:10px;
  display: flex;
  align-items: center;
}
.msg{
  margin:10px;
  background:rgb(233, 255, 136);
  padding:10px;
  border-radius: 0.5em;
}
</style>
