import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
export class Service {
  // public static baseUrl = 'http://localhost:3333/';
  public static baseUrl = 'http://147.182.25git 5.212/'

  public static async get<T>(url: string) {
    const data: AxiosResponse<T> = await axios.get(
      this.baseUrl + url,
      this.getHeader(url)
    )
    return data.data
  }

  public static async post<T, T2>(url: string, body: T2) {
    const data: AxiosResponse<T> = await axios.post(
      this.baseUrl + url,
      body,
      this.getHeader(url)
    )
    return data.data
  }

  public static async put<T, T2>(url: string, body: T2) {
    const data: AxiosResponse<T> = await axios.put(
      this.baseUrl + url,
      body,
      this.getHeader(url)
    )
    return data.data
  }

  public static async delete<T>(url: string) {
    const data: AxiosResponse<T> = await axios.delete(
      this.baseUrl + url,
      this.getHeader(url)
    )
    return data.data
  }

  public static getHeader(url: string) {
    const excludeUrls = ['login']
    if (!excludeUrls.includes(url)) {
      return {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      } as AxiosRequestConfig
    } else {
      return {}
    }
  }
}
