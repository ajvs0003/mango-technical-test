export interface RangeComponentProviderProps {
  children: ReactNode;
}

export interface State {
  data: number[];
  mode: 'normal' | 'fixed';
  width: number;
  minValue: number;
  maxValue: number;
}

export interface RangeComponentStore {
  state: State;
  dispatch: Dispatch<Action>;
}

export type Action =
  | { type: 'SET_DATA'; payload: State }
  | {
      type: 'SET_MIN';
      payload: {
        min: number;
      };
    }
  | { type: 'SET_MAX'; payload: { max: number } };

export interface RangeProps {
  staticData?: Record<string, any>;
  data?: number[];
  width?: number;
  mode?: 'normal' | 'fixed';
}

export interface RangeComponentProps extends RangeProps {
  staticData: Record<string, number>;
  data: number[];
  width: number;
}
