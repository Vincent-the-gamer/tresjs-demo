<template>
    <primitive :object="model" />
</template>

<script setup lang="ts">
import { ref } from "vue"
// @ts-ignore
import { useAnimations, useGLTF } from '@tresjs/cientos'

const { scene: model, animations } = await useGLTF("/run-tres-demo/models/elaina_anim_model/scene.gltf")

const { actions } = useAnimations(animations, model)

const currentAction = ref(actions["rigAction.001"])

currentAction.value.play()
</script>

<style scoped></style>