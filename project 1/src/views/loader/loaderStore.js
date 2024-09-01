// loaderStore.js
import { reactive } from 'vue';

export const loaderStore = reactive({
  isVisible: false
});

export function showLoader() {
  loaderStore.isVisible = true;
}

export function hideLoader() {
  loaderStore.isVisible = false;
}
