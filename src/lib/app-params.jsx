const isNode = typeof window === 'undefined';
const windowObj = isNode ? { localStorage: new Map() } : window;
const storage = windowObj.localStorage;

const toSnakeCase = (str) => {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

const getAppParamValue = (paramName, { defaultValue = undefined, removeFromUrl = false } = {}) => {
    if (isNode) return defaultValue;

    const storageKey = `base44_${toSnakeCase(paramName)}`;
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get(paramName);

    // 1. Ambil dari URL jika ada (Prioritas tertinggi)
    if (searchParam) {
        storage.setItem(storageKey, searchParam);
        if (removeFromUrl) {
            urlParams.delete(paramName);
            const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""}${window.location.hash}`;
            window.history.replaceState({}, document.title, newUrl);
        }
        return searchParam;
    }

    // 2. Ambil dari LocalStorage jika sudah tersimpan
    const storedValue = storage.getItem(storageKey);
    if (storedValue) return storedValue;

    // 3. Gunakan Default Value jika tidak ada di URL maupun Storage
    if (defaultValue) {
        storage.setItem(storageKey, defaultValue);
        return defaultValue;
    }

    return null;
}

const getAppParams = () => {
    if (!isNode && getAppParamValue("clear_access_token") === 'true') {
        storage.removeItem('base44_access_token');
        storage.removeItem('base44_token');
    }

    return {
        appId: getAppParamValue("app_id", { defaultValue: import.meta.env.VITE_BASE44_APP_ID }),
        token: getAppParamValue("access_token", { removeFromUrl: true }),
        fromUrl: getAppParamValue("from_url", { defaultValue: !isNode ? window.location.href : '' }),
        functionsVersion: getAppParamValue("functions_version", { defaultValue: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION }),
        appBaseUrl: getAppParamValue("app_base_url", { defaultValue: import.meta.env.VITE_BASE44_APP_BASE_URL }),
    }
}

// Langsung ekspor hasil eksekusi fungsinya
export const appParams = getAppParams();