import { Action } from '@/types/model';

declare global {
  interface Window {
    dispatch(action: Action): void;
    _currHref: string;
  }

  type FormOptions = {
    initialValue?: any;
    [propName: string]: any;
  };

  type Component = React.ComponentClass | React.SFC;

  interface Hoc {
    (Com: React.ReactElement<any>): Component;
  }

  interface RCForm {
    getFieldsValue(): Object;
    getFieldDecorator(fieldName: string, options: FormOptions): Hoc;
  }
}
