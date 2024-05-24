<script setup lang="ts">
import InputDebouncer from './components/InputDebouncer.vue'
</script>

<template>
  <div>
    <InputDebouncer />
    <div>
      <button>click me!</button>
    </div>
    <div class="d-flex align-center">
      <div class="btn-group">
        <button>btn 0</button>
        <button>btn 1</button>
        <button>btn 2</button>
        <button>btn 3</button>
        <button>btn 4</button>
        <button>btn 5</button>
        <button>btn 6</button>
        <button>btn 7</button>
        <button>btn 8</button>
      </div>
      <div>
        <p class="mx-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptates quas adipisci
          cupiditate, odit tenetur sunt odio quod quis numquam eum veniam ullam repellat vitae ipsum
          dolorem earum. Expedita, fuga!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mx-10{
  margin-left: 10px;
  margin-right: 10px;
}
.btn-group {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.btn-group button {
  margin-top: 10px;
  width: 200px;
}
.align-center{
  align-items: center;
}
</style>
