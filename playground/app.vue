<template>
  <div>
    Nuxt module playground! {{ testString }}
  </div>
</template>

<script setup>
const testString = useHttpHelper().test101();
</script>
