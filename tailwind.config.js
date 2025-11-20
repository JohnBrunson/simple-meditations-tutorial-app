/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the app folder
        "./components/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the components folder]
        "./app/(tabs)/meditate.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                rmono: ["Roboto-Mono", "sans-serif"],
            },
        },
    },
    plugins: ["nativewind/babel"],
    // added as per referenced solution here: https://www.reddit.com/r/reactnative/comments/1hodso7/tailwindcss_not_working_in_my_react_native_expo/
    // This was due to the error message Error: Tailwind CSS has not been configured with the NativeWind preset
// Error: Tailwind CSS has not been configured with the NativeWind preset
//     at tailwindConfigV3 (/mnt/coldstorage/code-playgrounds/react-native/meditations/simple-meditation/node_modules/nativewind/src/metro/tailwind/v3/index.ts:97:11)
//     at tailwindConfig (/mnt/coldstorage/code-playgrounds/react-native/meditations/simple-meditation/node_modules/nativewind/src/metro/tailwind/index.ts:18:28)
//     at withNativeWind (/mnt/coldstorage/code-playgrounds/react-native/meditations/simple-meditation/node_modules/nativewind/src/metro/index.ts:45:39)
//     at Object.<anonymous> (/mnt/coldstorage/code-playgrounds/react-native/meditations/simple-meditation/metro.config.js:6:18)
//     at Module._compile (node:internal/modules/cjs/loader:1688:14)
//     at Object..js (node:internal/modules/cjs/loader:1820:10)
//     at Module.load (node:internal/modules/cjs/loader:1423:32)
//     at Function._load (node:internal/modules/cjs/loader:1246:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)

    presets: [require("nativewind/preset", "babel-preset-expo")],
};