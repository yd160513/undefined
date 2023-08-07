import os from 'os'

export const getPlatform = () => {
  return os.platform()
}

export const isWindowsPlatform = () => {
  return getPlatform() === 'win32'
}