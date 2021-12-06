import { useEffect, useState } from 'react'
import { IFaq } from '../../interfaces/Faq.interface'
import { HomeService } from '../../services/HomeService'
import HomeCaracteristicas from './components/HomeCaracteristicas'
import HomeFAQ from './components/HomeFAQ'
import HomeNoticias from './components/HomeNoticias'
import HomeSlider from './components/HomeSlider'
import { Footer } from '../../components/Footer/Footer'
import './HomeView.scss'

interface Props {}

const HomeView = (props: Props) => {
  const [faqs, setFaqs] = useState<Array<IFaq>>([])

  const init = () => {
    const faqsData = HomeService.getFAQ()
    setFaqs(faqsData)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div
      className="page-padding"
      style={{ position: 'relative', margin: '0 auto', maxWidth: '1200px' }}
    >
      <HomeSlider />
      {/* <HomeCaracteristicas /> */}
      {/* <HomeNoticias /> */}
      <HomeFAQ faqs={faqs} />
      <Footer />
    </div>
  )
}

export default HomeView
