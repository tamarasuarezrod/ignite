import { applySnapshot, getEnv, onSnapshot } from "mobx-state-tree"
import { RootStore } from "./root-store"
import { Environment } from "../environment"
import * as storage from "../../utils/storage"

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = "root"

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
  const env = new Environment()
  await env.setup()
  return env
}

/**
 * Setup the root state.
 */
export async function setupRootStore(rootStore: RootStore) {
  let data: any

  try {
    // load data from storage, if available
    data = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {}
    applySnapshot(rootStore, data)

    // environment has to be loaded too
    const env = getEnv(rootStore)
    await env.load()

    // once the environment is loaded, set the root store
    if (__DEV__) {
      env.reactotron.setRootStore(rootStore, data)
    }
  } catch (e) {
    // if there are any problems rehydrating, then inform us what happened
    if (__DEV__) {
      console.tron.error(e.message, null)
    }
  }

  // track changes & save to storage
  onSnapshot(rootStore, (snapshot) => storage.save(ROOT_STATE_STORAGE_KEY, snapshot))

  return rootStore
}
