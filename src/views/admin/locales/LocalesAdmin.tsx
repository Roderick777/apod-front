import { useContext, useEffect, useState } from 'react'
import { AdminWrapper } from '../../../components/AdminWrapper/AdminWrapper'
import { IPollingPlace } from '../../../interfaces/PollingPlace.interface'
import { PollingPlaceService } from '../../../services/PollingPlaceService'
import { FiltroLocalesAdmin } from './components/FiltroLocalesAdmin'
import {
  LocalesAdminContext,
  LocalesAdminProvider,
} from './context/LocalesAdminContextProvider'

const LocalesAdmin = () => {
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState([])
  const [pollingPlaces, setPollingPlaces] = useState<Array<IPollingPlace>>([])

  const init = async () => {
    const pollingPlacesData: any = await PollingPlaceService.getPollingPlaces()
    setPollingPlaces(pollingPlacesData.locales)
    setLoading(false)
  }

  const onFilter = () => {}

  useEffect(() => {
    init()
  }, [])

  return (
    <AdminWrapper>
      <LocalesAdminProvider
        filters={filters}
        setFilters={setFilters}
        loading={loading}
        setLoading={setLoading}
        pollingPlaces={pollingPlaces}
        setPollingPlaces={setPollingPlaces}
      >
        <>
          <FiltroLocalesAdmin onFilter={onFilter} />
        </>
        <>
          <div className="page-content">
            {!loading &&
              pollingPlaces.map((e) => <div>{e.local_votacion}</div>)}
          </div>
        </>
      </LocalesAdminProvider>
    </AdminWrapper>
  )
}

export default LocalesAdmin
