# Contributing to Ignite CLI

We welcome all contributors to Ignite CLI! This contributing guide will help you get up and running to submit your first pull request.

Before submitting a pull request, you will want to make sure that your branch meets the following requirements:

_Working on Ignite CLI requires Yarn v1._

- Everything works on iOS/Android
- Jest tests pass in the root folder (`yarn test`)
- New tests are included for any new functionality
- Code is compliant with our linter and prettier (`yarn format && yarn lint`)
- Branch has already been [synced with the upstream repo](https://help.github.com/articles/syncing-a-fork/) and any merge-conflicts have been resolved.

## Requirements

- Node (reasonably recent version)
- Yarn (while you can use Ignite CLI without Yarn, we require it for contributors)

## Getting Started

1. Fork and then clone the repo (`git clone git@github.com:<YOURGITHUBUSER>/ignite.git`)
2. CD into the directory (`cd ignite`)
3. Uninstall npm version (`yarn global remove ignite-cli`)
4. Pull all package dependencies (`yarn`)
5. Link the local binary (`yarn link`)

Test it out:

```sh
$ ignite --version
<current version here>
$ which ignite
/usr/local/bin/ignite
$ ignite new UberForHeadLice
...
```

Now you're ready to check out a new branch and get hacking on Ignite CLI!

## Source Code

To get familiarized with Ignite CLI's source code, read the [Tour of Ignite CLI's source code](../docs/Tour-of-Ignite.md).

## How to Build and Run App

```sh
$ cd ~/your/projects
$ ignite new HackingOnIgnite
```

## Testing the App

We use Jest for testing.

To run tests from the ignite folder:

```sh
$ yarn test
```

**To Run Lint** from ignite:

```sh
$ yarn lint
```

### Why are there 3 lockfiles?

This is to speed up `ignite-cli new`. You'll want to make sure that the lockfiles are all up-to-date before
you push them up to CI. You can do that like this:

```
yarn refresh-lockfiles
```

This should update all three lockfiles.
