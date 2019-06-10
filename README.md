This project is created coding along with ["Typscript Crash Course"](https://www.youtube.com/watch?v=rAy_3SIqT-E&list=PL52XxXHByCJm34yznFtjPlfTsEDEcEd-x&index=3).

Steps -> After `npm install -g typescript`, create the project (`mkdir tssandbox`). Then create the typescript and index files `touch index.html types.ts`. Run `tsc types.ts`. This compiles to (and creates) a new .js file.
You'd have to run `tsc types.ts` every time you save in order to see the changes; however, you can also run tsc in "watchmode" (which will compile it on every save) by running `tsc types.ts -w`. (`message TS6042: Compilation complete. Watching for file changes.`)
