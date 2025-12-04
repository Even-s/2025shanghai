<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next';

const props = defineProps({
  spot: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['close']);

const { t } = useI18n();

const currentIndex = ref(0);
const images = Array.isArray(props.spot.image) ? props.spot.image : [props.spot.image];

const next = () => {
  if (currentIndex.value < images.length - 1) {
    currentIndex.value++;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

</script>

<template>
  <div @click.self="emit('close')" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
      <header class="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10">
        <h2 class="text-lg font-bold">{{ t(spot.titleKey) }}</h2>
        <button @click="emit('close')" class="p-1 rounded-full hover:bg-slate-100">
          <X :size="20" />
        </button>
      </header>
      
      <div class="overflow-y-auto">
        <div class="relative bg-slate-100">
          <!-- Slider Viewport -->
          <div class="overflow-hidden">
            <!-- Slider Track -->
            <div 
              class="flex transition-transform duration-300 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <div v-for="(img, index) in images" :key="index" class="w-full flex-shrink-0">
                <img :src="img" :alt="`${t(spot.titleKey)} ${index + 1}`" class="w-full h-64 object-cover">
              </div>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <button v-if="images.length > 1" @click="prev" :disabled="currentIndex === 0" class="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/30 text-white rounded-full hover:bg-black/50 disabled:opacity-20 disabled:cursor-not-allowed">
            <ChevronLeft :size="24" />
          </button>
          <button v-if="images.length > 1" @click="next" :disabled="currentIndex === images.length - 1" class="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/30 text-white rounded-full hover:bg-black/50 disabled:opacity-20 disabled:cursor-not-allowed">
            <ChevronRight :size="24" />
          </button>

          <!-- Pagination Dots -->
          <div v-if="images.length > 1" class="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            <button v-for="(_, index) in images" :key="index" @click="currentIndex = index" :class="['w-2 h-2 rounded-full transition-all', currentIndex === index ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80']"></button>
          </div>
        </div>

        <div class="p-6">
          <div class="prose max-w-none">
            <p v-for="(p, index) in t(spot.longDescKey).split('\\n')" :key="index" class="mb-4 last:mb-0">
              {{ p }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.prose p {
  text-indent: 2em;
}
</style>