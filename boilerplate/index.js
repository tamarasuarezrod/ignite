// This is the first JavaScript file that ReactNative will run when it starts up.
// You won't usually need to edit this file.

import App from "./app/app.tsx"
import { AppRegistry } from "react-native"

AppRegistry.registerComponent("HelloWorld", () => App)

// We export this for testing purposes.
export default App
