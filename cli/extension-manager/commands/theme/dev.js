import { Command } from 'commander';
const program = new Command();

const devCommand =

program.command('dev')
  .description('Watches all addons with a shopify.theme.toml file in the web/extensions/addons folder')
  .action(() => {
    console.log('Extension manager theme dev command')
  });

export default devCommand