import { create } from "zustand";
const itialState = { count: 0 };

const useCounterStore = create((set) => ({
  ...itialState,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(itialState),
}));

export default useCounterStore;
