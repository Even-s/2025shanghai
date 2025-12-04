<script setup>
import { useI18n } from 'vue-i18n';
import { X } from 'lucide-vue-next';
import GoogleMapsIcon from './icons/GoogleMapsIcon.vue';
import AmapIcon from './icons/AmapIcon.vue';
import BaiduMapsIcon from './icons/BaiduMapsIcon.vue';

const props = defineProps({
  restaurants: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: '推薦列表'
  },
  city: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['close']);

const { t } = useI18n();

const getGmapUrl = (resto) => {
  const query = resto.gmapQuery;
  if (!query) return null;
  if (query.startsWith('http')) return query;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

const getAmapUrl = (resto) => {
  const query = resto.amapQuery;
  if (!query) return null;
  if (query.startsWith('http')) return query;
  return `https://www.amap.com/search?query=${encodeURIComponent(query)}`;
};

const getBaiduUrl = (resto) => {
  const query = resto.baiduQuery || resto.nameKey;
  if (!query) return null;
  return `https://map.baidu.com/search/${encodeURIComponent(t(query))}`;
};
</script>

<template>
  <div @click.self="emit('close')" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[80vh] flex flex-col">
      <header class="p-4 border-b flex justify-between items-center">
        <h2 class="text-lg font-bold">{{ title }}</h2>
        <button @click="emit('close')" class="p-1 rounded-full hover:bg-slate-100">
          <X :size="20" />
        </button>
      </header>
      
      <div class="overflow-y-auto p-4">
        <ul class="space-y-1">
          <li v-for="(resto, index) in restaurants" :key="index" class="p-3 rounded-lg hover:bg-slate-50 transition-colors">
            <div class="flex justify-between items-start">
              <div class="flex-1">
                <h3 class="font-semibold text-slate-800">{{ t(resto.nameKey) }}</h3>
                <div v-if="resto.locationKey" class="mt-1.5">
                  <span class="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">{{ t(resto.locationKey) }}</span>
                </div>
                <p class="text-sm text-slate-500 mt-1">{{ t(resto.descKey) }}</p>
              </div>
              <div class="flex items-center space-x-2 z-10 ml-2 mt-1">
                <a v-if="city === 'hongkong' || city === 'taiwan'" :href="getGmapUrl(resto)" target="_blank" rel="noopener noreferrer" class="p-1 rounded-full hover:bg-slate-200 transition-colors">
                  <GoogleMapsIcon class="w-4 h-4" />
                </a>
                <template v-if="city === 'shanghai'">
                  <a :href="getAmapUrl(resto)" target="_blank" rel="noopener noreferrer" class="p-1 rounded-full hover:bg-slate-200 transition-colors">
                    <AmapIcon class="w-4 h-4" />
                  </a>
                  <a :href="getBaiduUrl(resto)" target="_blank" rel="noopener noreferrer" class="p-1 rounded-full hover:bg-slate-200 transition-colors">
                    <BaiduMapsIcon class="w-4 h-4" />
                  </a>
                </template>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>