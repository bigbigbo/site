export interface Action {
  type: string;
  payload?: {
    [propName: string]: any;
  };
}

export interface StoreState {
  loading: {
    global: boolean;
    effects: {
      [propName: string]: boolean;
    };
  };
}

export interface StateSelect {
  (state: StoreState): any;
}

export interface DvaHelper {
  call(fn: any, ...restParams: any[]): any;
  put(action: Action): any;
  select(fn: StateSelect): any;
}
