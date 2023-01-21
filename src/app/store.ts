import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import catalogSlice from "./features/catalog/catalogSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice,
		catalog: catalogSlice,
	}
})