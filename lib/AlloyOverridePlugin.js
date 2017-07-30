const path = require('path');
const fs = require('fs');
const resolvePackage = require('resolve-package');
const pkg = require('../package.json');

class AlloyOverridePlugin {
  constructor() {
    this.id = pkg.name;
    this.version = pkg.version;
    this.cliVersion = '>=3.x';

    this.handlePreConstruct = this.handlePreConstruct.bind(this);
  }

  init(logger, config, cli) {
    this.logger = logger;
    this.config = config;
    this.cli = cli;

    this.addHooks();
  }

  addHooks() {
    this.cli.on('build.pre.construct', {
      priority: 100,
      pre: this.handlePreConstruct
    });
  }

  handlePreConstruct(event, next) {
    const cwd = this.cli.argv['project-dir'];
    resolvePackage('alloy', { cwd })
      .then(alloy => {
        const alloyBinPath = path.resolve(path.dirname(alloy) + '/../bin/alloy');
        if (!fs.existsSync(alloyBinPath)) {
          return Promise.reject('Unable to resolve path to Alloy executable');
        }

        process.env.ALLOY_PATH = alloyBinPath;
        this.log(`Found Alloy executable at '${alloyBinPath}'`);
        next();
      })
      .catch(() => {
        this.log('Unable to resolve path to Alloy executable', 'warn');
        next();
      });
  }

  log(message, level = 'info') {
    level = this.logger[level] ? level : 'info';
    this.logger[level](message);
  }
}

module.exports = AlloyOverridePlugin;
