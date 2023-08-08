export enum TActionTypes {
  CREATE_FORM = "CREATE_FORM",
  DEFAULT = "DEFAULT",
  DELETE_ALL = "DELETE_ALL",
  DELETE_FORM = "DELETE_FORM",
  UPDATE_FORM = "UPDATE_FORM",
}

export interface TStore {
  forms: TForm[];
}

export interface TAction<P = unknown> {
  (payload: P): {
    payload: P;
    type: TActionTypes;
  };
}

export interface TContext {
  dispatch: React.Dispatch<ReturnType<TAction>>;
  store: TStore;
}
