How to replicate:

Run:

```
 yarn nx workspace-schematic data-access-lib 
```

It will not add the new library config changes to `angular.json`.

If you remove `formatFiles()` from `tools/generators/data-access-lib/index.ts` it will start doing it.
