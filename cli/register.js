import extensionManager from './extension-manager/index.js'

const register = ({ program }) => {
  program.addCommand(extensionManager)
}

export {
  register
}