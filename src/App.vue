<script setup lang="ts">
import Girl from "./components/Girl.vue"
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
</script>

<template>
  <div class="description">
    <h3>
      Demo by <a href="https://github.com/Vincent-the-gamer">Vincent-the-gamer</a>
    </h3>
  </div>
  <div class="model">
    <TresCanvas shadows alpha>
      <TresPerspectiveCamera :position="[2, 4, 7]" 
                             :look-at="[0, 2, 0]"
      />
      <OrbitControls :target="[0, 2, 0]"/>
      <Suspense>
        <Girl />
      </Suspense>
      <TresGridHelper />
    </TresCanvas>
  </div>
</template>

<style scoped>
.description {
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: fit-content;
  left: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(50, 50, 50, 0.5);
  color: white;
}

a {
  text-decoration: none;
  color: pink;
}

.model {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
</style>
