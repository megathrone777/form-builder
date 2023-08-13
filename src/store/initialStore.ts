import { TStore } from "./types";

const currentStore = localStorage.getItem("formBuilderStorage");
const initialStore: TStore = currentStore
  ? JSON.parse(currentStore)
  : {
      forms: [],
    };

export { initialStore };
