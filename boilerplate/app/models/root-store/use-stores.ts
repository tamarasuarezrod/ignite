import { createContext, useContext } from "react"
import { Environment } from "../environment"
import { RootStore, RootStoreModel } from "./root-store"
import { setupRootStore } from "./setup-root-store"

// instantiate a clean rootStore with a brand new environment
const rootStore = RootStoreModel.create({}, new Environment())

/**
 * Create a context we can use to hold the root store instance.
 * This allows us to access it anywhere using the useContext helper
 * below called `useStores`.
 */
const RootStoreContext = createContext<RootStore>(rootStore)

/**
 * A hook that screens can use to gain access to the MST stores and models.
 *
 * const rootStore = useStores()
 * const { someStore, someOtherStore } = useStores()
 */
export function useStores() {
  const _rootStore = useContext(RootStoreContext)

  // The first time useStores is called, the RootStore will be rehydrated
  // from AsyncStorage. If you want this to be rehydrated earlier,
  // just call `await rehydrateRootStoreFromAsyncStorage()` anytime before
  // using this hook.
  rehydrateRootStoreFromAsyncStorage(_rootStore)

  return _rootStore
}

let _rehydrated = false
export async function rehydrateRootStoreFromAsyncStorage(_rootStore: RootStore = rootStore) {
  // if we've already rehydrated, then just bail early
  if (_rehydrated) return _rootStore

  _rehydrated = true

  // now we'll kick off a process to rehydrate the root store
  return setupRootStore(_rootStore)
}

/**
 * You can use this provider to wrap any components that need a
 * different root store instance.
 *
 * This is pretty rare in your app itself, but it's useful for testing.
 * If you use useStores() without this provider, it'll return
 * the default rootStore defined above.
 *
 * const otherStore = RootStoreModel.create({})
 * <RootStoreProvider value={otherStore}>
 *   <SomeComponent />
 * </RootStoreProvider>
 */
export const RootStoreProvider = RootStoreContext.Provider
