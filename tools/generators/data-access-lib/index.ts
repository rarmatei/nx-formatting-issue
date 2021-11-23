import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { formatFiles } from '@nrwl/workspace';

export default function (): Rule {
  return chain([
    externalSchematic('@nrwl/workspace', 'lib', {
      name: 'bla',
      directory: 'settings',
    }),
    formatFiles(),
  ]);
}
