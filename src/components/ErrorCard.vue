<template>
  <div
    className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-xl shadow-md w-full max-w-md mx-auto mt-6"
  >
    <div className="flex items-center space-x-3">
      <span className="text-xl">🚫</span>
      <div>
        <p className="font-semibold">{{ reason }}</p>
        <p className="text-sm text-red-700">{{ message }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
const { reason, message } = defineProps<{
  reason: string
  message: string | undefined
}>()
</script>
