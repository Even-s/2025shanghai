<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Plane, Utensils, MapPin, Car, Hotel, Ship, Ticket, Train } from 'lucide-vue-next';
import GoogleMapsIcon from './icons/GoogleMapsIcon.vue';
import AmapIcon from './icons/AmapIcon.vue';

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  isLast: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['open-recommendations', 'open-qr-codes']);

const { t } = useI18n();

const typeMap = {
  flight: { icon: Plane, color: 'bg-blue-500', emoji: '✈️' },
  food: { icon: Utensils, color: 'bg-orange-500', emoji: '🍽️' },
  spot: { icon: MapPin, color: 'bg-green-500', emoji: '📍' },
  transport: { icon: Car, color: 'bg-purple-500', emoji: '🚗' },
  hotel: { icon: Hotel, color: 'bg-slate-500', emoji: '🏨' },
  cruise: { icon: Ship, color: 'bg-cyan-500', emoji: '🚢' },
  ticket: { icon: Ticket, color: 'bg-lime-500', emoji: '🎟️' },
  train: { icon: Train, color: 'bg-red-500', emoji: '🚆' },
};

const itemType = computed(() => typeMap[props.event.type] || typeMap.spot);

const formattedTime = computed(() => {
  if (!props.event.endTime) {
    return props.event.time;
  }
  return `${props.event.time} - ${props.event.endTime}`;
});

const googleMapUrl = computed(() => {
  const query = props.event.gmapQuery;
  if (!query) return null;
  if (query.startsWith('http')) return query;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
});

const amapUrl = computed(() => {
  const query = props.event.amapQuery;
  if (!query) return null;
  if (query.startsWith('http')) return query;
  return `https://www.amap.com/search?query=${encodeURIComponent(query)}`;
});

const getSubEventGoogleMapUrl = (sub) => {
  if (!sub.gmapQuery) return null;
  if (sub.gmapQuery.startsWith('http')) return sub.gmapQuery;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sub.gmapQuery)}`;
};

const getSubEventAmapUrl = (sub) => {
  if (!sub.amapQuery) return null;
  if (sub.amapQuery.startsWith('http')) return sub.amapQuery;
  return `https://www.amap.com/search?query=${encodeURIComponent(sub.amapQuery)}`;
};

const handleClick = () => {
  if (props.event.recommendations) {
    emit('open-recommendations', { 
      recommendations: props.event.recommendations,
      titleKey: props.event.recommendationTitleKey
    });
  } else if (props.event.qrCodes) {
    emit('open-qr-codes', {
      qrCodes: props.event.qrCodes,
      titleKey: props.event.qrCodeModalTitleKey
    });
  } else if (props.event.appLink) {
    window.location.href = props.event.appLink;
  } else if (props.event.pdfLink) {
    window.open(props.event.pdfLink, '_blank');
  }
};

const handleSubEventClick = (subEvent) => {
  if (subEvent.qrCodes) {
    emit('open-qr-codes', {
      qrCodes: subEvent.qrCodes,
      titleKey: subEvent.qrCodeModalTitleKey,
      recommendations: subEvent.recommendations,
      recommendationTitleKey: subEvent.recommendationTitleKey
    });
  } else if (subEvent.appLink) {
    window.location.href = subEvent.appLink;
  } else if (subEvent.recommendations) {
    emit('open-recommendations', { 
      recommendations: subEvent.recommendations,
      titleKey: subEvent.recommendationTitleKey
    });
  }
};
</script>

<template>
  <div class="relative flex pb-8">
    <!-- Vertical line -->
    <div v-if="!isLast" class="absolute left-5 top-5 h-full w-0.5 bg-slate-200"></div>

    <!-- Icon -->
    <div class="relative z-10">
      <div :class="[itemType.color, 'rounded-full w-10 h-10 text-white flex items-center justify-center']">
        <component :is="itemType.icon" :size="20" />
      </div>
    </div>

    <!-- Content -->
    <div class="pl-6 flex-1 relative group">
      <!-- Clickable overlay for recommendations -->
      <div v-if="event.recommendations || event.qrCodes || event.appLink || event.pdfLink" @click="handleClick" class="absolute inset-0 z-10 rounded-lg cursor-pointer">
        <span class="sr-only">Show details</span>
      </div>
      
      <!-- Background for hover effect -->
      <div v-if="event.recommendations || event.qrCodes || event.appLink || event.pdfLink" class="absolute inset-0 -left-6 -right-6 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
      
      <!-- Actual Content -->
      <div class="relative flex justify-between items-start">
        <div class="flex-1">
          <p class="text-sm font-semibold text-slate-500">{{ formattedTime }}</p>
          <h3 class="font-bold text-slate-900">{{ itemType.emoji }} {{ t(event.titleKey || '') }}</h3>
          <p v-if="event.descKey && !event.subEvents" class="text-sm text-slate-600 mt-1">{{ t(event.descKey) }}</p>
          
          <!-- Sub Events -->
          <div v-if="event.subEvents" class="mt-2 space-y-2">
            <div 
              v-for="(sub, index) in event.subEvents" 
              :key="index"
              class="flex justify-between items-start text-sm p-2 -m-2 rounded-lg transition-colors"
              :class="{ 'cursor-pointer hover:bg-slate-100': sub.qrCodes || sub.appLink || sub.recommendations }"
              @click="handleSubEventClick(sub)"
            >
              <div class="flex items-start">
                <span class="font-semibold text-slate-500 w-12 flex-shrink-0 text-right mr-2">{{ sub.time }}</span>
                <div class="flex-1">
                  <p class="font-medium text-slate-700">{{ t(sub.titleKey || '') }}</p>
                  <p v-if="sub.descKey" class="text-xs text-slate-500">{{ t(sub.descKey) }}</p>
                </div>
              </div>
              <!-- Map Links for Sub-event -->
              <div class="flex items-center space-x-2 z-10 ml-2">
                <a v-if="getSubEventGoogleMapUrl(sub)" :href="getSubEventGoogleMapUrl(sub)" @click.stop target="_blank" rel="noopener noreferrer" class="p-1 rounded-full hover:bg-slate-200 transition-colors">
                  <GoogleMapsIcon class="w-4 h-4" />
                </a>
                <a v-if="getSubEventAmapUrl(sub)" :href="getSubEventAmapUrl(sub)" @click.stop target="_blank" rel="noopener noreferrer" class="p-1 rounded-full hover:bg-slate-200 transition-colors">
                  <AmapIcon class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Map Links for Main Event -->
        <div class="flex items-center space-x-2 z-10 ml-4" v-if="!event.recommendations && !event.appLink && !event.pdfLink">
            <a v-if="googleMapUrl" :href="googleMapUrl" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full hover:bg-slate-100 transition-colors" @click.stop>
              <GoogleMapsIcon class="w-5 h-5" />
            </a>
            <a v-if="amapUrl" :href="amapUrl" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full hover:bg-slate-100 transition-colors" @click.stop>
              <AmapIcon class="w-5 h-5" />
            </a>
        </div>
      </div>
    </div>
  </div>
</template>
