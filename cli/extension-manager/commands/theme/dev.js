import { Command } from 'commander';
const program = new Command();

import fs from 'fs'
import path from 'path'
import shell from 'shelljs'

const EXTENSIONS_PATH = path.resolve(process.cwd(), 'web', 'extensions', 'addons');

// For every theme extension in web/extensions
// run dev concurrently

const devCommand =

program.command('dev')
  .description('Watches all addons with a shopify.theme.toml file in the web/extensions/addons folder')
  .action(() => {
    const results = fs.readdirSync(EXTENSIONS_PATH)
    const folders = results.filter(res => fs.lstatSync(path.resolve(EXTENSIONS_PATH, res)).isDirectory())

    const devCommandsToRun = []
    for(const folder of folders){
      const extensionPath = path.join(EXTENSIONS_PATH, folder)
      const themeExtensionTomlFilePath = path.join(extensionPath, 'src', 'shopify.theme.extension.toml')
      if(fs.existsSync(themeExtensionTomlFilePath)){
        devCommandsToRun.push(`cd ${extensionPath} && npm run dev`)
      }
    }

    const devCommandsToRunFormatted = devCommandsToRun.map(command => `"${command}"`).join(" ")
    shell.exec(`concurrently --kill-others --raw ${devCommandsToRunFormatted}`)

  });

export default devCommand