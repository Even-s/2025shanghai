<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import TimelineItem from './components/TimelineItem.vue';
import RestaurantModal from './components/RestaurantModal.vue';
import QRCodeModal from './components/QRCodeModal.vue';
import { Hotel } from 'lucide-vue-next';

const { t, locale } = useI18n();
locale.value = 'zh-TW'; // 預設為中文

const itinerary = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/api/itinerary');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    itinerary.value = await response.json();
  } catch (e) {
    console.error('Failed to fetch itinerary:', e);
    error.value = 'Failed to load data. Please try again later.';
  } finally {
    isLoading.value = false;
  }
});


// Modal state
const isModalOpen = ref(false);
const modalRestaurants = ref([]);
const modalTitle = ref('');
const isQRCodeModalOpen = ref(false);
const modalQRCodes = ref([]);
const qrCodeModalTitle = ref('');
const modalRecommendations = ref([]);
const recommendationModalTitle = ref('');

const selectedDay = ref(1);

const selectDay = (day) => {
  selectedDay.value = day;
};

const selectedItinerary = computed(() => {
  if (itinerary.value.length === 0) return null;
  return itinerary.value.find(item => item.day === selectedDay.value);
});

const hotelGmapUrl = computed(() => {
  if (!selectedItinerary.value?.hotelGmapQuery) {
    return null;
  }
  if (selectedItinerary.value.hotelGmapQuery.startsWith('http')) {
    return selectedItinerary.value.hotelGmapQuery;
  }
  
  // 根據日期判斷使用哪個地圖
  const isShanghai = ['12/07', '12/08', '12/09', '12/10', '12/11'].includes(selectedItinerary.value.date);
  const query = encodeURIComponent(selectedItinerary.value.hotelGmapQuery);
  
  return isShanghai ? `https://www.amap.com/search?query=${query}` : `https://www.google.com/maps/search/?api=1&query=${query}`;
});

const openRestaurantModal = (payload) => {
  modalRestaurants.value = payload.recommendations;
  modalTitle.value = t(payload.titleKey || '餐廳推薦');
  isModalOpen.value = true;
};

const closeRestaurantModal = () => {
  isModalOpen.value = false;
};

const openQRCodeModal = (payload) => {
  modalQRCodes.value = payload.qrCodes;
  qrCodeModalTitle.value = t(payload.titleKey || 'QR Code');
  modalRecommendations.value = payload.recommendations || [];
  recommendationModalTitle.value = payload.recommendationTitleKey ? t(payload.recommendationTitleKey) : '';
  isQRCodeModalOpen.value = true;
};

const closeQRCodeModal = () => {
  isQRCodeModalOpen.value = false;
};

// 當語言變更時，同步更新網頁的 <title>
watch(locale, () => {
  document.title = t('pageTitle');
}, { immediate: true });
</script>

<template>
  <div class="bg-slate-50 min-h-screen font-sans text-slate-900">
    <header class="sticky top-0 bg-white/80 backdrop-blur-lg shadow-sm z-20">
      <div class="max-w-3xl mx-auto px-4">
        <div class="flex justify-between items-center py-3">
          <h1 class="text-xl font-bold">{{ t('pageTitle') }}</h1>
          <div class="flex items-center gap-4">
            <!-- 語言切換器 -->
            <div class="language-switcher text-sm">
              <select v-model="locale" id="lang-select" class="border-0 bg-transparent rounded p-1 text-slate-600">
                <option value="zh-TW">繁體中文</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
        <nav v-if="itinerary.length > 0" class="overflow-x-auto -mx-4 px-4 pb-2">
          <ul class="flex space-x-2">
            <li v-for="dayItem in itinerary" :key="dayItem.day">
              <button
                @click="selectDay(dayItem.day)"
                :class="[
                  'w-full text-left px-4 py-2 rounded-lg transition-colors text-sm whitespace-nowrap',
                  selectedDay === dayItem.day
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                ]"
              >
                <span class="font-bold">{{ t('day', { day: dayItem.day }) }}</span>
                <span class="ml-2 text-xs opacity-80">{{ dayItem.date }} {{ dayItem.weekday }}</span>
              </button>
            </li>
          </ul>
        </nav>
        <div v-else-if="!isLoading" class="pb-2 text-sm text-slate-500">
           {{ t('loading') }}
        </div>
      </div>
    </header>

    <main class="max-w-3xl mx-auto p-4 md:p-6">
       <div v-if="isLoading" class="text-center text-slate-500">
        <p>{{ t('loading') }}</p>
      </div>
      <div v-else-if="error" class="text-center text-red-500">
        <p>{{ error }}</p>
      </div>
      <div v-else-if="selectedItinerary" class="bg-white p-6 rounded-2xl shadow-sm">
        <h2 class="text-2xl font-bold mb-2">{{ t(selectedItinerary.titleKey || '') }}</h2>
        <component 
          v-if="selectedItinerary.hotelKey"
          :is="hotelGmapUrl ? 'a' : 'div'"
          :href="hotelGmapUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-sm text-slate-500 mb-6"
          :class="{ 'hover:text-blue-600 transition-colors': hotelGmapUrl }"
        >
          <Hotel :size="16" />
          <span>{{ t('hotel') }} {{ t(selectedItinerary.hotelKey || '') }}</span>
        </component>
        
        <div>
          <TimelineItem
            v-for="(event, index) in selectedItinerary.events"
            :key="index"
            :event="event"
            :date="selectedItinerary.date"
            :is-last="index === selectedItinerary.events.length - 1"
            @open-recommendations="openRestaurantModal"
            @open-qr-codes="openQRCodeModal"
          />
        </div>
      </div>
    </main>

    <RestaurantModal 
      v-if="isModalOpen" 
      :restaurants="modalRestaurants" 
      :date="selectedItinerary.date"
      :title="modalTitle"
      @close="closeRestaurantModal" 
    />

    <QRCodeModal
      v-if="isQRCodeModalOpen"
      :qr-codes="modalQRCodes"
      :title="qrCodeModalTitle"
      :recommendations="modalRecommendations"
      :recommendation-title="recommendationModalTitle"
      @close="closeQRCodeModal"
    />
  </div>
</template>

<style>
/* For Webkit-based browsers (Chrome, Safari) */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}
.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #cbd5e1; /* slate-300 */
  border-radius: 20px;
}
.overflow-x-auto::-webkit-scrollbar-track {
  background: transparent;
}
/* For Firefox */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}
</style>
