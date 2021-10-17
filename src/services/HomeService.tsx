import { IFaq } from '../interfaces/Faq.interface'
import { Service } from './Service'

export class HomeService extends Service {
  public static async getContent() {}

  public static getFAQ(): Array<IFaq> {
    return [
      {
        question: '¿Qué es APOD?',
        ask: 'APOD es una plataforma para gestionar y centralizar los votos en los procesos electorales?',
      },
      {
        question:
          '¿Quién puede ver la información asociada a los votos recopilados?',
        ask: 'La información base generada en los procesos de votación con APOD es pública',
      },
      {
        question: '¿Como puedo participar como apoderado en la plataforma?',
        ask: 'Crea una cuenta desde la app APOD, luego contacta a uno de los apoderados principales del partido en el cual deseas participar',
      },
    ]
  }
}
