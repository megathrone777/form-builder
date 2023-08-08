import { TAction, TActionTypes } from "./types";

export const createForm: TAction<TForm> = (form) => ({
  payload: form,
  type: TActionTypes.CREATE_FORM,
});

export const deleteForm: TAction<TForm["id"]> = (formId) => ({
  payload: formId,
  type: TActionTypes.DELETE_FORM,
});

export const updateForm: TAction<Omit<TForm, "name">> = (form) => ({
  payload: form,
  type: TActionTypes.UPDATE_FORM,
});

export const deleteAll: TAction = () => ({
  payload: null,
  type: TActionTypes.DELETE_ALL,
});
