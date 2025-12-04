<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-vue-next';

const props = defineProps({
  qrCodes: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: 'QR Code'
  },
  recommendations: {
    type: Array,
    default: () => []
  },
  recommendationTitle: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);

const { t } = useI18n();

const currentIndex = ref(0);

const next = () => {
  if (currentIndex.value < props.qrCodes.length - 1) {
    currentIndex.value++;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const getGmapUrl = (query) => {
  if (!query) return null;
  if (query.startsWith('http')) {
    return query;
  }
  // For simplicity, this example defaults to Google Maps. 
  // A more robust solution would pass the date and determine the map provider.
  const encodedQuery = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
};
</script>

<template>
  <div @click.self="emit('close')" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-sm max-h-[90vh] flex flex-col">
      <header class="p-4 border-b flex justify-between items-center">
        <h2 class="text-lg font-bold">{{ title }}</h2>
        <button @click="emit('close')" class="p-1 rounded-full hover:bg-slate-100">
          <X :size="20" />
        </button>
      </header>
      
      <div class="relative p-6">
        <!-- Slider Viewport -->
        <div class="overflow-hidden">
          <!-- Slider Track -->
          <div 
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="(qr, index) in qrCodes" 
              :key="index" 
              class="w-full flex-shrink-0 text-center"
            >
              <h3 class="font-semibold text-slate-800 mb-2">{{ qr.nameKey ? t(qr.nameKey) : `換票碼` }}</h3>
              <img :src="qr.path" :alt="'QR Code for Passenger ' + (index + 1)" class="w-64 h-64 mx-auto border rounded-lg p-2 bg-white">
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button @click="prev" :disabled="currentIndex === 0" class="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full disabled:opacity-20 disabled:cursor-not-allowed">
          <ChevronLeft :size="24" />
        </button>
        <button @click="next" :disabled="currentIndex === qrCodes.length - 1" class="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full disabled:opacity-20 disabled:cursor-not-allowed">
          <ChevronRight :size="24" />
        </button>
      </div>

      <!-- Recommendations / Instructions -->
      <div v-if="recommendations.length > 0" class="overflow-y-auto p-4 border-t">
        <h3 v-if="recommendationTitle" class="font-bold text-md mb-3 px-2">{{ recommendationTitle }}</h3>
        <ul class="space-y-2">
          <li v-for="(item, index) in recommendations" :key="index">
            <a :href="getGmapUrl(item.gmapQuery)" target="_blank" rel="noopener noreferrer" class="block p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <h4 class="font-semibold text-slate-800 text-sm">{{ t(item.nameKey) }}</h4>
                  <p class="text-xs text-slate-500 mt-1">{{ t(item.descKey) }}</p>
                </div>
                <MapPin v-if="item.gmapQuery" :size="16" class="text-slate-400 ml-3 mt-0.5 flex-shrink-0" />
              </div>
            </a>
          </li>
        </ul>
      </div>

      <!-- Pagination Dots -->
      <div v-if="qrCodes.length > 1" class="flex justify-center items-center space-x-2 pb-6">
        <button 
          v-for="(_, index) in qrCodes" 
          :key="index" 
          @click="currentIndex = index"
          :class="['w-2 h-2 rounded-full transition-colors', currentIndex === index ? 'bg-slate-800' : 'bg-slate-300 hover:bg-slate-400']"
        ></button>
      </div>
    </div>
  </div>
</template>