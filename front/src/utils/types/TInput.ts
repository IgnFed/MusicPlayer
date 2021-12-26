import { HTMLInputTypeAttribute } from 'react';
import { TPropsExtra } from './index';

export type TInput = {
  label?:{
    position:'after' | 'before',
    cssProps: TPropsExtra,
    attrs?:{
      htmlFor?: string,
      content?: any,
    }
    // attrs?: LabelHTMLAttributes<HTMLElement>
  },

  input?:{
    cssProps: TPropsExtra,
    attrs?:{
      type?: HTMLInputTypeAttribute,
      name?: string,
    }
    // attrs?: InputHTMLAttributes<HTMLElement>    
  }
}