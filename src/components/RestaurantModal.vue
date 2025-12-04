<script setup>
import { useI18n } from 'vue-i18n';
import { X, MapPin } from 'lucide-vue-next';

const props = defineProps({
  restaurants: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: '推薦列表'
  },
  date: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['close']);

const { t } = useI18n();

const getGmapUrl = (query) => {
  if (!query) return null;
  if (query.startsWith('http')) {
    return query;
  }
  
  const isShanghai = ['12/07', '12/08', '12/09', '12/10', '12/11'].includes(props.date);
  const encodedQuery = encodeURIComponent(query);
  return isShanghai ? `https://www.amap.com/search?query=${encodedQuery}` : `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
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
        <ul class="space-y-3">
          <li v-for="(resto, index) in restaurants" :key="index">
            <a :href="getGmapUrl(resto.gmapQuery)" target="_blank" rel="noopener noreferrer" class="block p-3 rounded-lg hover:bg-slate-50 transition-colors">
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <h3 class="font-semibold text-slate-800">{{ t(resto.nameKey) }}</h3>
                  <div v-if="resto.locationKey" class="mt-1.5">
                    <span class="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">{{ t(resto.locationKey) }}</span>
                  </div>
                  <p class="text-sm text-slate-500 mt-1">{{ t(resto.descKey) }}</p>
                </div>
                <MapPin v-if="resto.gmapQuery" :size="18" class="text-slate-400 ml-4 mt-1 flex-shrink-0" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>