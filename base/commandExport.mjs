import botinfo from '../commands/botinfo.mjs';
import prefix from '../commands/prefix.mjs';
import help from '../commands/help.mjs';
import debug from '../commands/eval.mjs';

const commands = {
  botinfo: botinfo,
  prefix: prefix,
  help: help,
  debug: debug,
}

export default commands;
