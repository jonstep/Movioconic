# Movioconic React Native Demo App
## Demo App
[Android Demonstration APK](https://demopig.s3.amazonaws.com/movioconic-app-release.apk)

## Setup
#### Android Studio

* Download and install [Android Studio](https://developer.android.com/studio/) if required. Make sure Android SDK, Android SDK Platform and Android Virtual Device are all selected during the installation
     * To install additional SDKs, navigate to (Preferences -> Appearance & Behavior -> System Settings -> Android SDK) and select the required SDK version i.e. Android 11.0 (R)

     * React Native requires some environment variables to be added to your bash (\~/.bash_profile or \~/.bashrc) or equivalent (~/.zprofile or ~/.zshrc) config:

        ```sh
        export ANDROID_HOME=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_HOME/emulator
        export PATH=$PATH:$ANDROID_HOME/tools
        export PATH=$PATH:$ANDROID_HOME/tools/bin
        export PATH=$PATH:$ANDROID_HOME/platform-tools
        ```
     * As we just changed the config you will either need to open a new terminal or source ~/.bash_profile (or equivalent config file) to update the current terminal window with the changes

#### Xcode

* Install [XCode](https://itunes.apple.com/us/app/xcode/id497799835) if required.
* Once installed, navigate to (Preferences -> Locations) and in the "Command Line Tools" dropdown, select the most recent version
* To install additional simulators:
     * Navigate to (Preferences -> Components)
     * Click on the download icon next the required OS version i.e. iOS 14.3 Simulator

#### React Native Dependencies:

Use [yarn](https://yarnpkg.com/en/) to manage dependencies.

##### Node
```sh
brew install node
```
##### Watchman
```sh
brew install watchman
```

##### Bundler
```sh
gem install bundler
```

##### Cocoapods
```sh
gem install cocoapods
```

#### Running the project

1. Check out the code and navigate to project root.

2. Install project dependencies:

    ```sh
    yarn
    cd ios && pod install && cd ../
    ```

3. Start the app

    ```sh
    yarn start
    ```

[Troubleshooting](https://reactnative.dev/docs/troubleshooting)

## Usage

### Run iOS App

```sh
yarn ios
```

### Run Android App

```sh
yarn android
```

### Run Tests

```sh
Available for Patreon subscribers only.
```

