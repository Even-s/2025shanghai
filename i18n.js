import { createI18n } from 'vue-i18n';

// 匯入語言檔案
import en from './en.json';
import zhTW from './zh-TW.json';

const i18n = createI18n({
  legacy: false, // 使用 Vue 3 Composition API 模式
  locale: 'zh-TW', // 預設顯示的語言
  fallbackLocale: 'en', // 如果找不到對應的翻譯，則使用英文
  messages: {
    'en': en,
    'zh-TW': zhTW,
  },
});

export default i18n;