import type { Reducer } from "react";

import { TAction, TActionTypes, TStore } from "./types";

const reducer: Reducer<TStore, ReturnType<TAction>> = (store, { payload, type }) => {
  const actions: Record<TActionTypes, () => TStore> = {
    [TActionTypes.CREATE_FORM]: () => ({
      ...store,
      forms: [...store.forms, payload as TForm],
    }),

    [TActionTypes.UPDATE_FORM]: () => {
      const form = payload as TForm;
      const newForms: TForm[] = [...store.forms];
      const foundIndex: number = newForms.findIndex(
        ({ id }): boolean => id === form.id
      );

      if (foundIndex !== -1) {
        newForms[foundIndex] = {
          ...newForms[foundIndex],
          ...form,
        };
      }

      return {
        ...store,
        forms: newForms,
      };
    },

    [TActionTypes.DELETE_FORM]: () => ({
      ...store,
      forms: [...store.forms].filter(
        ({ id }: TForm): boolean => id !== (payload as TForm["id"])
      ),
    }),

    [TActionTypes.DELETE_ALL]: () => ({
      ...store,
      forms: [],
    }),

    [TActionTypes.DEFAULT]: () => store,
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
