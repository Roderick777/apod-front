import { notification } from 'antd'

export const useNotification = () => {
  const notify = (
    title: string,
    description: string,
    callback: any = undefined,
    duration: number = 5
  ) => {
    notification.open({
      message: title,
      description,
      onClick: () => {
        if (callback) callback()
      },
      duration,
      className: 'notification',
    })
  }

  const notifyError = (
    title: string,
    description: string,
    callback: any = undefined,
    duration: number = 5
  ) => {
    notification.error({
      message: title,
      description,
      onClick: () => {
        if (callback) callback()
      },
      duration,
      className: 'notification',
    })
  }

  const notifySuccess = (
    title: string,
    description: string,
    callback: any = undefined,
    duration: number = 5
  ) => {
    notification.success({
      message: title,
      description,
      onClick: () => {
        if (callback) callback()
      },
      duration,
      className: 'notification',
    })
  }

  return {
    notify,
    notifyError,
    notifySuccess,
  }
}
