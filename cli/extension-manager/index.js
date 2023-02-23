import { Command } from 'commander';
const program = new Command();

import themeCommands from './commands/theme';

const extensionManager =

program.command('extension-manager')
  .description('Entry point to extension manager commands')

extensionManager.addCommand(themeCommands)

export default extensionManager