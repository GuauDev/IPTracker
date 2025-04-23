<script setup lang="ts">
import { ref } from 'vue'
import { Ipapi } from './service/ipapi'
const data = ref<IpapiResponse | IpapiError | null>(null)
const ipInput = ref<string>('')
const onSubmit = async () => {
  const response = await Ipapi(ipInput.value)
  data.value = response
}
import IpInfoBento from './components/IpInfoBento.vue'
import ErrorCard from './components/ErrorCard.vue'
</script>
<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center px-4 flex-col gap-10">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl flex flex-col items-center">
      <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">IP Tracker</h1>

      <form class="flex items-center gap-2 mb-6 max-w-md" @submit.prevent="onSubmit">
        <input
          id="ipInput"
          type="text"
          placeholder="Enter IP address"
          class="flex-1 px- 4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-md"
          v-model="ipInput"
        />
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>

    <IpInfoBento :data="data" v-if="data && 'error' in data && !data.error" />

    <ErrorCard
      v-if="data && 'error' in data && data.error"
      :reason="data.reason"
      :message="data.message"
    />
  </div>
</template>
<style>
@import 'tailwindcss';
</style>
