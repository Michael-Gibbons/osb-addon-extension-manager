import { Command } from 'commander';
const program = new Command();

import fs from 'fs'
import path from 'path'
import shell from 'shelljs'

const EXTENSIONS_PATH = path.resolve(process.cwd(), 'web', 'extensions', 'addons');

// For every theme extension in web/extensions/addons
// run build

const buildCommand =

program.command('build')
  .description('Builds all addons with a shopify.theme.toml file in the web/extensions/addons folder')
  .action(() => {
    const results = fs.readdirSync(EXTENSIONS_PATH)
    const folders = results.filter(res => fs.lstatSync(path.resolve(EXTENSIONS_PATH, res)).isDirectory())

    for(const folder of folders){
      const extensionPath = path.join(EXTENSIONS_PATH, folder)
      const themeExtensionTomlFilePath = path.join(extensionPath, 'src', 'shopify.theme.extension.toml')
      if(fs.existsSync(themeExtensionTomlFilePath)){
        console.log(`Building Extension: ${folder}...`)
        shell.exec(`cd ${extensionPath} && npm run build`)
        console.log(`Extension: ${folder} built successfully`)
      }
    }
  });

export default buildCommand