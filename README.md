# Read Me

This is a TypeScript project for NodeJS, with sane defaults for code style and linting. Just clone and go!

There are a few defaults that should be changed however, like package `name`, `cmd-name`, and `author`. You can find those in the [package.json](/package.json). Depending on your project, you may also want to change the `license` property as well. By default, this project is [MIT](/LICENSE) licensed.

## Commit Syntax

You may or may not like the syntax guidelines outlined in the [Commit Syntax](/docs/commit_syntax.md) Doc file. These guidelines are specific to my own projects, but you're free to adopt whatever you deem appropriate for your own project.

## Opinionated Folder Structure

Too much flexibility can be a bad thing, so I've created a pre-defined folder structure that I think works very well for most projects:

- **/** _ROOT DIR_ should contain all configuration files
- **/src** should contain all source code
- **/src/lib** should contain all source code that contributes to `main.ts`
- **/bin** should contain all compiled source and assets - _the dist directory_

## Get Started

### Install

`npm i`

**Important!!**

After installation, make sure you create or execute a TypeScript build task using the root [tsconfig](/tsconfig.json) file. The `./bin` directory needs to be populated before any of the following commands will work.

VSCODE users can simply execute the `Run Build Task` command (or by using the corresponding keyboard shortcut) and it should automatically popup with an option to build or watch the `tsconfig` file. The default keybinding is `Ctrl+Shift+B`.

### Run in dev mode

`npm run dev`

### Test typescript source map support

`npm run dev throw`

### Run in production mode

`node . <args>`

### Install Globally

`npm -g i .`

### Run using global command

`cmd-name <args>`
