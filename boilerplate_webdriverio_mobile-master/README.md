# About this project #


Package | Version
:-------: | ------:
npm       | [![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)
appium    | [![npm version](https://badge.fury.io/js/appium.svg)](https://badge.fury.io/js/appium)
@wdio/cli    | [![npm version](https://badge.fury.io/js/%40wdio%2Fcli.svg)](https://badge.fury.io/js/%40wdio%2Fcli)



The purpose of this automation project is to guide you as an automated test for React Native distributions.


## Requirements ##
install Appium -> [Appium](http://appium.io/)

install SDK Android -> [Android-Studio](https://developer.android.com/studio)

install JDK -> [Java](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)

install Nodejs -> [nodejs] (https://nodejs.org/en/) 

Validate the installation:
```shell
node -v
````
example:
```
$ v13.12.0
```
and
```
mpm -v
```
example:
```
$ 6.14.4
```

## Local Variables ##

Setting `JAVA_HOME` and `ANDROID_HOME` on your local machine

validate
````
echo $JAVA_HOME
````
and
````
echo $ANDROID_HOME
````

Validate the full path

## Install dependencies ##

Run
```shell
yarn or npm install
```

## Run tests ##

Run Android tests (Real Device)

```shell
yarn run android.app
```

Run Android tests (Emulator)

```shell
yarn run android.emulator.app
```

Run iOS tests (Real Device)

```shell
yarn run ios.app
```

Run SauceLabs tests (Device Farm)

````
yarn run ios.sauce.rdc.app
````
or
`````
yarn run android.sauce.rdc.app
`````

