<template>
  <div class="box">
    <img :src="props.image" alt="" class="photo" />
  </div>
</template>


<style scoped>
.box {
  width: 400px;
  break-inside: avoid;
  margin-bottom: 15px;
  background-color: #20b2aa;
  overflow: hidden;
  display: block;
}

.photo {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>