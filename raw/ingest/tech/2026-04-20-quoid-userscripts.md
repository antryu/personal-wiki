<!-- GitHub Trending: Swift | 4,450 stars | +3 today -->

# quoid/userscripts

> An open-source userscript manager for Safari

## Repository Info
- **URL**: https://github.com/quoid/userscripts
- **Stars**: 4,450
- **Forks**: 399
- **Language**: Swift
- **License**: GNU General Public License v3.0
- **Created**: 2018-12-01
- **Updated**: 2026-04-20
- **Topics**: safari, safari-app-extension, safari-extension, swift, userscript, userscript-editor, web-extension
- **Open Issues**: 63

## README (excerpt)
# Userscripts Safari

An open-source userscript editor for Safari

![Userscripts Safari](/etc/screenshot.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [UI Overview](#ui-overview)
  - [Browser Page](#browser-page)
  - [Settings Modal](#settings-modal)
  - [Popover](#popover)
- [Metadata](#metadata)
- [API](#api)
- [Scripts Directory / Save Location](#scripts-directory)
- [Getting Help](#getting-help)
- [FAQs](#faqs)
- [Contributing](#contributing)
- [Support](#support)
- [Privacy Policy](#privacy-policy)
- [License](#license)

## Installation

Userscripts is available for iOS (iPadOS) and macOS. For all versions, installation is done through [Apple's App Store](https://itunes.apple.com/us/app/userscripts/id1463298887). On macOS, versions prior to `4.x` were made available to download and install directly from the repository, but due to [changes in the way Apple allows developers to distribute apps built with the WebExtension API](https://github.com/quoid/userscripts/issues/154), that is no longer an option.

To run Userscripts on iOS you should be on iOS 15.1 or higher.

To run Userscripts on macOS you should running macOS 12 or higher, along with Safari 14.1 or higher.

**[App Store Link](https://itunes.apple.com/us/app/userscripts/id1463298887)**

**[Development Progress](https://github.com/quoid/userscripts/projects/3)**

## Usage

It's recommend to read this documentation and, if you have time, watch the following video overviews to familiarize yourself with the app and extension.

Once the app is downloaded and installed the following steps should be taken:

### **iOS (iPadOS)**

After installing the iOS App, you need two main steps to make the extension work:

- **Open the App and set a directory** (For saving and loading userscripts)
  - After Userscripts for ios v1.5.0, a local default directory will be set automatically
  - In earlier versions please click the `Set Userscripts Directory` button and select the directory
- **Enable the extension in Safari** (And grant permissions)

  - Manage extensions from Settings App (Settings > Safari > Extensions) or Safari App (`AA` button on iPhone, `extension-icon` on iPad, also where you open the extension's `popup` interface)
  - For optimal experience it's recommended that you `Always Allow` Userscripts for `All Websites`

> [!NOTE]
>
> The iOS App cannot detect whether you have enabled the extension in Safari, therefore, the App prompt will not change after you enable the extension. Currently the App interface is only used to set or change the userscripts directory.
>
> You could select an iCloud folder for syncing scripts between macOS and iOS, but please note that there may be delays in synchronization, and you may encounter files be evictioned due to iCloud optimization, please refer to [#424](https://github.com/quoid/userscripts/issues/424). (**Since macOS 15 / iOS 18, please set "keep downloaded" for the folder to avoid eviction**)

There are two main ways to install a user script from the iOS version:

- Visit a `.user.js` URL in Safari, then open the extension `popup` and you will see an installation prompt
  - The URL should end with `.user.js` in `/PATH` part, not the `?QUERY` or `#HASH` parts
- You could also save files with the extension `.user.js` directly to the Userscripts directory you set above

> [!TIP]
>
> Both of the above work equally well in the macOS version.
>
> The iOS version does not include the script editor provided in the macOS version, but you can always edit script files in the directory you set directly on iOS. (use any third-party code editor apps, support in-place opening and editing)

### **macOS**

After installing Userscripts on macOS, you **do not** need to select a userscripts directory if you do not plan on syncing your userscripts between multiple devices. Instead you can choose to use the default directory, which is located at `~/User/Library/Containers/Userscripts/Data/Documents/scripts` - again, th