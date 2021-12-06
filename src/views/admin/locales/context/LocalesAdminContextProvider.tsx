import React, { createContext, useState } from 'react'
import { IFilter } from '../../../../interfaces/Filter.interface'
import { IPollingPlace } from '../../../../interfaces/PollingPlace.interface'

export interface ILocalesAdminContext {
  loading: boolean
  setLoading: any
  filters: Array<IFilter>
  setFilters: any
  pollingPlaces: Array<IPollingPlace>
  setPollingPlaces: any
}

export interface IProps extends ILocalesAdminContext {
  children: any
}

export const LocalesAdminContext = createContext<ILocalesAdminContext>(
  {} as ILocalesAdminContext
)

export const LocalesAdminProvider = ({
  loading,
  setLoading,
  filters,
  setFilters,
  pollingPlaces,
  setPollingPlaces,
  children,
}: IProps) => {
  return (
    <LocalesAdminContext.Provider
      value={{
        loading,
        setLoading,
        filters,
        setFilters,
        pollingPlaces,
        setPollingPlaces,
      }}
    >
      {children}
    </LocalesAdminContext.Provider>
  )
}
