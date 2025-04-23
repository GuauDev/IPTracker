<template>
  <div class="bento-box">
    <component :is="icons?.[icon]" class="w-5 h-5 mb-1 text-gray-700" />
    <div class="text-sm text-gray-600">{{ label }}</div>
    <div class="font-medium break-words">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
import {
  MapPin,
  Globe,
  Compass,
  LocateIcon,
  Clock,
  Server,
  Wifi,
  CreditCard,
  Phone,
  Languages,
} from 'lucide-vue-next'

const { icon, label, value } = defineProps<{ icon: IconType; label: string; value: string }>()
const icons = {
  MapPin,
  Globe,
  Compass,
  LocateIcon,
  Clock,
  Server,
  Wifi,
  CreditCard,
  Phone,
  Languages,
}
</script>
