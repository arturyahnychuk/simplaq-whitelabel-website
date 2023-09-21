<template>
  <RouterView></RouterView>
</template>

<script lang="ts">
import EarnedPoints from '@/components/dashboard/points/EarnedPoints.vue'
export default {
  name: 'PointsTab',
  components: {
    EarnedPoints
  }
}
</script>
