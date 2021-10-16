import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    Products: "",
    Weight: "KG",
    Quantity: 0,
    SupllierLocation: "USA",
    TransportMode: "",
    Europeanstandard: "Average"

  },
  reducers: {
    chooseWeight: (state, action) => { state.Weight = action.payload },
    chooseProducts: (state, action) => { state.Products = action.payload },
    chooseQuantity: (state, action) => { state.Quantity = action.payload },
    chooseSupllierLocation: (state, action) => { state.SupllierLocation = action.payload },
    chooseTransportMode: (state, action) => { state.TransportMode = action.payload },
    chooseEuropeanstandard: (state, action) => { state.Europeanstandard = action.payload },
  }
})

export const reducer = rootSlice.reducer;

export const { chooseProducts, chooseWeight, chooseQuantity, chooseSupllierLocation, chooseTransportMode, chooseEuropeanstandard } = rootSlice.actions