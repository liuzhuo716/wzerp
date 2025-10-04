<template>
  <span @click="show = true" class="image-viewer-wrap">
    <b class="check">点击查看{{ text }}</b>
  </span>
  <transition name="fade">
    <div v-if="show" class="image-viewer-overlay" @click="show = false">
      <b class="image-viewer-close">点击关闭{{ text }}</b>
      <img :src="src" class="image-viewer-img" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ShowImg',
  props: {
    src: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: '图片'
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>

.image-viewer-wrap {
  display: inline-block;
  cursor: pointer;
  color: var(--c-brand);
  color:#3eaf7c ;
  text-decoration: none;
  margin: 5px 0;
}
.image-viewer-wrap:hover {
text-decoration: underline;
}


.image-viewer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.image-viewer-close {
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
}

.image-viewer-img {
  max-width: 90%;
  max-height: 80%;
  background:white;
  border: 2px solid white;
  border-radius: 8px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>