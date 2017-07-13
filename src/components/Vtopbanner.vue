<template>
<div class="topbanner">
  <div class="bannerbg">
    <img src="../assets/promotion_bg.jpg" class="img">
  </div>
  <div class="bannerwrapper">
    <div class="bannerinner">
      <div class="bannertitle">
        <span class="bannertitletext">用 App 打开</span><br>
        <span class="bannertitletext">关注影评人</span>
      </div>
      <div class="buttonwrapper">
        <a href="https://www.douban.com/doubanapp/app?model=B&copy=1&page=movie&channel=card_movie&direct_dl=1" class="buttonapp downloadapp">极速下载</a>
        <a href="https://www.douban.com/doubanapp/dispatch?from=mdouban&download=1&model=B&copy=1&page=movie&channel=card_movie&uri=%2Fmovie%2F26387939" class="buttonapp openapp">打开</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Vtopbanner',
  data() {
    return {


    }
  },
  components: {

  }
}
</script>

<style scoped>
.topbanner {
  margin-top: 47px;
  margin-bottom: 0;
  max-width: 100%;
  overflow: hidden;
  text-align: left;
  position: relative;
  display: block;
}

.topbanner .bannerbg {
  font-size: 0;
  padding-bottom: 21.33333%;
  position: relative;
}

.topbanner .bannerbg .img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.topbanner .bannerwrapper {
  position: absolute;
  left: 18px;
  top: 0;
  bottom: 0;
  right: 10px;
}

.topbanner .bannerwrapper .bannerinner {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.topbanner .bannerwrapper .bannerinner .bannertitle {
  margin: 0;
}

.topbanner .bannertitletext {
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  color: #2CA532;
}

.topbanner .bannerwrapper .bannerinner .buttonwrapper {
  font-size: 0;
  padding-left: 12px;
}

.topbanner .bannerwrapper .bannerinner .buttonwrapper .buttonapp {
  display: inline-block;
  border-radius: 3px;
  font-size: 13px;
  font-weight: bold;
  width: auto;
  padding: 0 14px;
  position: relative;
  line-height: 2;
}

.topbanner .bannerwrapper .bannerinner .buttonwrapper .downloadapp {
  color: #fff;
  border: 1px solid #42bd56;
  background: #42bd56;
}

.topbanner .bannerwrapper .bannerinner .buttonwrapper .buttonapp::after {
  content: '';
  position: absolute;
  left: -4px;
  right: -4px;
  top: -10px;
  bottom: -10px;
}

.topbanner .bannerwrapper .bannerinner .buttonwrapper .openapp {
  margin-right: 0;
  margin-left: 8px;
  color: #42bd56;
  border: 1px solid #42bd56;
}
</style>
