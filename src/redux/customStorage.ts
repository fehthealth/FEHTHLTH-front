import storage from "redux-persist/lib/storage"; // Keep this import
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Create a no-op storage for environments where localStorage is not available
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(value: any) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

// Rename this to avoid conflict with the imported storage
const customStorage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default customStorage;
