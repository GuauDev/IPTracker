<script setup lang="ts">
import { defineProps } from 'vue'
const { data } = defineProps<{ data: IpapiResponse | IpapiError }>()
import BentoItem from './BentoItem.vue'
</script>
<template>
  <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
    <BentoItem icon="MapPin" label="City" :value="data.city" v-if="'city' in data" />
    <BentoItem
      icon="Globe"
      label="Country"
      :value="`${data.country_name} (${data.country_code})`"
      v-if="'country' in data"
    />
    <BentoItem
      icon="Compass"
      label="Region"
      :value="`${data.region} (${data.region_code})`"
      v-if="'region' in data"
    />
    <BentoItem
      icon="LocateIcon"
      label="Lat/Lon"
      :value="`${data.latitude} / ${data.longitude}`"
      v-if="'latitude' in data && 'longitude' in data"
    />
    <BentoItem
      icon="Clock"
      label="Time Zone"
      :value="`${data.timezone} (UTC ${data.utc_offset})`"
      v-if="'timezone' in data && 'utc_offset' in data"
    />
    <BentoItem icon="Server" label="ISP" :value="data.org" v-if="'org' in data" />
    <BentoItem icon="Wifi" label="Public IP" :value="data.ip" v-if="'ip' in data" />
    <BentoItem
      icon="CreditCard"
      label="Currency"
      :value="`${data.currency_name} (${data.currency})`"
      v-if="'currency' in data && 'currency_name' in data"
    />
    <BentoItem
      icon="Phone"
      label="Telefonic Code"
      :value="data.country_calling_code"
      v-if="'country_calling_code' in data"
    />
    <BentoItem
      icon="Languages"
      label="Languages"
      :value="data.languages"
      v-if="'languages' in data"
    />
  </div>
</template>
