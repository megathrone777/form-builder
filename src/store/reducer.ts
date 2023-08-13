import type { Reducer } from "react";

import { TAction, TActionTypes, TStore } from "./types";

const setStoreToLocalStorage = (currentStore: TStore): TStore => {
  localStorage.setItem("formBuilderStorage", JSON.stringify(currentStore));

  return currentStore;
};

const reducer: Reducer<TStore, ReturnType<TAction>> = (store, { payload, type }) => {
  console.log(type);
  const actions: Record<TActionTypes, () => TStore> = {
    [TActionTypes.CREATE_FORM]: () =>
      setStoreToLocalStorage({
        ...store,
        forms: [...store.forms, payload as TForm],
      }),

    [TActionTypes.UPDATE_FORM]: () => {
      const form = payload as TForm;
      const newForms: TForm[] = [...store.forms];
      const foundIndex: number = newForms.findIndex(
        ({ id }): boolean => id === form.id
      );

      console.log(form);

      if (foundIndex !== -1) {
        newForms[foundIndex] = {
          ...newForms[foundIndex],
          ...form,
        };
      }

      return setStoreToLocalStorage({
        ...store,
        forms: newForms,
      });
    },

    [TActionTypes.DELETE_FORM]: () =>
      setStoreToLocalStorage({
        ...store,
        forms: [...store.forms].filter(
          ({ id }: TForm): boolean => id !== (payload as TForm["id"])
        ),
      }),

    [TActionTypes.DELETE_ALL]: () =>
      setStoreToLocalStorage({
        ...store,
        forms: [],
      }),

    [TActionTypes.DEFAULT]: () => store,
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
