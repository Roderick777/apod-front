export const useDownload = () => {
  const download = (url: string) => {
    const a = document.createElement('a')
    a.href = url
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return { download }
}
