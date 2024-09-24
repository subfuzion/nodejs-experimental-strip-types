#!/usr/bin/env node --experimental-strip-types --disable-warning=ExperimentalWarning
import {argv} from 'node:process';

import {Cli} from '../lib/cli.ts';
import {IO} from '../lib/io.ts';

try {
  await Cli.run(argv);
} catch (err) {
  // ALL early CLI exceptions (until a command runs) surface here.
  IO.abort(err);
  process.exitCode = 1;
}