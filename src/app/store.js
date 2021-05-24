import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';

// Export the store, so that it can be used in the Provider.
// The state isn't defined here, because it is defined in the productsSlice.
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
