import React, { createContext, Dispatch, SetStateAction } from 'react'
import { IRegion } from '../../../interfaces/Region.interface'

export interface IResultsContext {
  processId: number
  regionsData: Array<IRegion>
  setRegionsData: Dispatch<SetStateAction<Array<IRegion>>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

export interface Props extends IResultsContext {
  children: any
}

export const ResultsRegionsContext = createContext({} as IResultsContext)

export const ResultsRegionsContextProvider = ({
  processId,
  regionsData,
  setRegionsData,
  loading,
  setLoading,
  children,
}: Props) => {
  return (
    <ResultsRegionsContext.Provider
      value={{
        processId,
        regionsData,
        setRegionsData,
        loading,
        setLoading,
      }}
    >
      {children}
    </ResultsRegionsContext.Provider>
  )
}
