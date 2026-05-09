import { createClient } from '@base44/sdk';
import { appParams } from '../lib/app-params'; // Menggunakan path relatif agar lebih aman

const { appId, token, functionsVersion, appBaseUrl } = appParams;

// Log untuk mempermudah debugging kamu di console browser
if (!appId) {
    console.warn("Peringatan: appId tidak ditemukan. Pastikan file .env sudah benar.");
}

export const base44 = createClient({
  appId: appId || '',
  token: token || '',
  functionsVersion: functionsVersion || 'v1',
  serverUrl: 'https://api.base44.com', // Biasanya butuh URL server default
  requiresAuth: !!token, // Akan otomatis true jika token ada, false jika tidak ada
  appBaseUrl: appBaseUrl || ''
});