import React, { createContext, useState, Dispatch, SetStateAction } from 'react'
import { IProcesoElectoral } from '../../../interfaces/ProcesoElectoral.interface'

export interface IResultsContext {
  electoralProcesses: Array<IProcesoElectoral>
  setElectoralProcesses: Dispatch<SetStateAction<IProcesoElectoral[]>>
  currentProcess: IProcesoElectoral | null
  setCurrentProcess: Dispatch<SetStateAction<IProcesoElectoral | null>>
  currentProcessData: Array<any> | null
  setCurrentProcessData: Dispatch<
    SetStateAction<Array<IProcesoElectoral> | null>
  >
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

export interface Props extends IResultsContext {
  children: any
}

export const ResultsContext = createContext({} as IResultsContext)

export const ResultsContextProvider = ({
  electoralProcesses,
  setElectoralProcesses,
  currentProcess,
  setCurrentProcess,
  currentProcessData,
  setCurrentProcessData,
  loading,
  setLoading,
  children,
}: Props) => {
  return (
    <ResultsContext.Provider
      value={{
        electoralProcesses,
        setElectoralProcesses,
        currentProcess,
        setCurrentProcess,
        currentProcessData,
        setCurrentProcessData,
        loading,
        setLoading,
      }}
    >
      {children}
    </ResultsContext.Provider>
  )
}
