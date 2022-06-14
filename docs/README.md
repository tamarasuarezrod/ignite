# Welcome to Ignite documentation!

Check out this list of topics:

- [Generators](./Generators.md) - Everything you need to know about Ignite generators
- [Folder-Structure](./Folder-Structure.md) - An explanation of the Ignite folder structure
- [Why MobX-State-Tree?](./MobX-State-Tree.md) - All about MobX-State-Tree, and why we use it instead of Redux
- [TypeScript](./TypeScript.md) - An explanation of TypeScript in Ignite and lots of resources
- [Upgrading](./Upgrading.md) - How to keep your app up to date
- [Tour of Ignite (in progress)](./Tour-of-Ignite.md) - Tour of the Ignite code base for interested contributors

## Ignite CLI

The Ignite CLI is generally run with `npx ignite-cli <command>`. You can run `npx ignite-cli help` to get a list of options.

### ignite-cli new

```
npx ignite-cli new MyApp --package=com.myorg.myapp --expo
```

This will spin up a new React Native app with all of Ignite's features. You can use `--expo` to make it an [Expo managed app](https://docs.expo.dev/introduction/managed-vs-bare/#managed-workflow) (which you'd run in Expo Go).

We are working on all-new documentation for Ignite, but you can find help [in our Slack community](https://community.infinite.red).

### ignite-cli generate

```
npx ignite-cli generate component AwesomeView
```

Ignite's generators are very useful! Check out the [Generators](./Generators.md) documentation for more.

### ignite-cli doctor

```
npx ignite-cli doctor
```

Displays useful environment information for debugging issues with Ignite.

### ignite-cli rename

```
npx ignite-cli rename MyNewAppName --bundle=com.org.mynewappname
```

Renames your app to the new name and bundle identifier. Make sure to have a clean git working tree
before running this, as it's experimental.
