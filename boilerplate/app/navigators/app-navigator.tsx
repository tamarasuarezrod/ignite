/**
 * The app navigator is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import * as storage from "../utils/storage"
import { useFonts } from "expo-font"
import { navigationRef, useBackButtonHandler, useNavigationPersistence } from "./utilities"
import { MainStack } from "./main-stack"

export const AppNavigator = () => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)

  // Add your fonts here.
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  const [fontsLoaded, _fontError] = useFonts({
    // Montserrat: require("../assets/fonts/Montserrat.ttf"),
    // "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  })

  // load the navigation state from async storage
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, "NAVIGATION_STATE")

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // In Expo: https://docs.expo.dev/versions/latest/sdk/splash-screen
  // You can replace with your own loading component if you wish.
  if (!isNavigationStateRestored || !fontsLoaded) return null

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      initialState={initialNavigationState}
      onStateChange={onNavigationStateChange}
    >
      <MainStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
