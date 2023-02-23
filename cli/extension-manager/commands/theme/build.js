import { Command } from 'commander';
const program = new Command();

const buildCommand =

program.command('build')
  .description('Builds all addons with a shopify.theme.toml file in the web/extensions/addons folder')
  .action(() => {
    console.log('Extension manager theme build command')
  });

export default buildCommand