const fs = require('fs')
const path = require('path')
const { NodeSSH } = require('node-ssh')
const ssh = new NodeSSH()
const dirLocal = path.join(__dirname, '/build')
const dirRemote = '/var/www/html/front'

const sshConfig = {
  host: '147.182.255.212',
  username: 'root',
  password: 'Apod1Apod',
}

const putBuildDir = async () => {
  let counter = 0
  try {
    const status = await ssh.putDirectory(dirLocal, dirRemote, {
      recursive: true,
      concurrency: 10,
      tick: (_localPath, _remotePath, _error) => {
        counter++
        console.log(`Archivos cargados: ${counter}`)
      },
    })

    console.log('La transferencia fue: ', status ? 'exitosa' : 'fallida')
  } catch (e) {
    console.log('Error al copiar carpeta')
  }
}

const init = async () => {
  try {
    await ssh.connect(sshConfig)
    await putBuildDir()
  } catch (e) {
    console.log('Error al conectar vía SSH', e)
  }
}

init()
