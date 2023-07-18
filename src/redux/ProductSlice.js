import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  wishListData: []
}

export const productSlice = createSlice({
  name: "ecom",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id)

      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.productData.push(action.payload)
      }
    },

    deleteFromCart: (state, action) => {
      state.productData = state.productData.filter((item) => item._id !== action.payload)
    },

    resetCart: (state) => {
      state.productData = []
    },

    incrementQuantity: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id)
      if (item) {
        item.quantity++;
      }
    },
    decrementQantity: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id)
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },

    addToWishList: (state, action) => {
      const item = state.wishListData.find((item) => item._id === action.payload._id)
      if (item) {
        return null
      } else {
        state.wishListData.push(action.payload)
      }
    },

    deleteFromWishList: (state, action) => {
      state.wishListData = state.wishListData.filter((item) => item._id !== action.payload)
    },

  }
}
)

export const
  {
     addToCart,
    deleteFromCart,
    resetCart,
    incrementQuantity,
    decrementQantity,
    addToWishList,
    deleteFromWishList
   } = productSlice.actions;

