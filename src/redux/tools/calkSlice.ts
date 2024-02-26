import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypeCalk {
  value: number;
}

const initialState: TypeCalk = {
  value: 0,
};

const calkSlice = createSlice({
  name: "calk",
  initialState,
  reducers: {
    addNum: (state, action: PayloadAction<{ valueInputs: number }>) => {
      state.value += action.payload.valueInputs;
    },
    minus: (state, action: PayloadAction<{ valueInputs: number }>) => {
      state.value -= action.payload.valueInputs;
    },
    multiplication: (state, action: PayloadAction<{ valueInputs: number }>) => {
      state.value *= action.payload.valueInputs;
    },
    division: (state, action: PayloadAction<{ valueInputs: number }>) => {
      state.value /= action.payload.valueInputs;
    },
  },
});

export const calkulate = calkSlice.reducer;
export const { addNum, division, multiplication, minus } = calkSlice.actions;
