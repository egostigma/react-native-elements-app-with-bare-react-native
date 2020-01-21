# React Native Elements App with bare React Native

This is the Demo app for [React Native Elements](https://github.com/react-native-elements/react-native-elements). In this app you will find examples on on how to use various RNE components as well as production-ready screens.

![React Native Elements App with bare React Native](https://user-images.githubusercontent.com/5962998/37248832-a7060286-24b1-11e8-94a8-847ab6ded4ec.png)

This app also work on the `web` platform using [React Native Web](https://github.com/necolas/react-native-web). You can checkout the [live website here](https://egostigma.github.io/react-native-elements-app-with-bare-react-native/). If you are looking to build a React Native mobile app & also reuse the code to deploy on web, this repo can be used as a great starting point.

## Getting Started

### Run it locally

1. Install [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)

```bash
[sudo] yarn global add expo-cli || [sudo] npm install -g expo-cli
```

_If permissions errors then please use `--unsafe-perm=true` flag too [npm/npm#16766](https://github.com/npm/npm/issues/16766)_

2. Clone the project

```bash
git clone https://github.com/egostigma/react-native-elements-app-with-bare-react-native.git
```

3. Install dependencies

```bash
cd react-native-elements-app-with-bare-react-native

# Using npm or yarn
yarn clean-install || npm clean-install
```

4. Run the cross-platform app

```bash
yarn android || npm android
yarn desktop || npm desktop
yarn ios || npm ios
yarn web || npm web
```

### Build signed Android apk

First you must [generate an upload key](https://facebook.github.io/react-native/docs/signed-apk-android.html#generating-an-upload-key)

Then [Set up Gradle variables](https://facebook.github.io/react-native/docs/signed-apk-android.html#setting-up-gradle-variables)

Next you can build the android app using:

```bash
yarn build:android
```

The built app will be generated on folder _/android/app/build/outputs/apk/release/app-release.apk_

The app will automatically installed to your android device if you had correctly set up your environment.

### Deploy Web app

First you must set correct `publicPath` in `app.web-build.json`. Next you must build the web app using:

```bash
yarn build:web
```

Once you have built it, you can see generated `web-build` folder.

This folder can be hosted as static website. For example you can publish on [Github Pages](https://pages.github.com/) via [gh-pages](https://github.com/tschaub/gh-pages) cli.

```bash
yarn deploy
```

**Note:** don't forget to add or change "homepage" key in your package.json

## Major contributors:

- [@oxyii](https://github.com/oxyii) 💪🏼
- [@xavier-villelegier](https://github.com/xavier-villelegier) 🔥
- [@martinezguillaume](https://github.com/martinezguillaume) 🎸
- [@iRoachie](https://github.com/iRoachie) 💯
- [@monte9](https://github.com/monte9) 🤓

## React Native Elements

This app is built using [React Native Elements](https://github.com/react-native-elements/react-native-elements). RNE is a UI toolkit for React Native that provides you with production ready UI components so that you can focus on building the part that makes your app unique as opposed to reinvent the UI wheel.

You can install `react-native-elements` in your app using:

```bash
yarn add react-native-elements
```

## Feedback

In case you run into any problems while running this app or have additional questions, please create a new issue on this repo and we will follow up with you.
