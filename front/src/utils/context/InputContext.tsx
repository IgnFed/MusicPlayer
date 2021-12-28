import { useState, createContext, useContext, ChangeEvent } from 'react';
import { TProps } from '@utils/types';


interface IContextValue{
  value:string,
  onChange:((e?:ChangeEvent<HTMLInputElement>)=>void),
}
const InputContext = createContext<IContextValue>({} as IContextValue);

export function useInputCtx(){ return useContext(InputContext) };

export function InputContextProvider<ChildrenProps extends TProps>({children}:ChildrenProps){

  const [ value, setValue ] = useState("");

  function onChange(e?:ChangeEvent<HTMLInputElement>):void{
    setValue(e?.currentTarget.value || '');
  }

  return <InputContext.Provider value={{
    value,
    onChange,
  } as IContextValue}>
    {children}
  </InputContext.Provider>
}