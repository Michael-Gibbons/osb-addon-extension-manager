import { Command } from 'commander';
const program = new Command();

import devCommand from './dev.js';
import buildCommand from './build.js';

const themeCommands =

program.command('theme')
  .description('Entry point to theme extension commands')

themeCommands.addCommand(devCommand)
themeCommands.addCommand(buildCommand)

export default themeCommands