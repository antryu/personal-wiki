<!-- GitHub Trending: Swift | 9,942 stars | +3 today -->

# Ranchero-Software/NetNewsWire

> RSS reader for macOS and iOS.

## Repository Info
- **URL**: https://github.com/Ranchero-Software/NetNewsWire
- **Stars**: 9,942
- **Forks**: 676
- **Language**: Swift
- **License**: MIT License
- **Created**: 2017-05-21
- **Updated**: 2026-04-20
- **Topics**: feed-reader, ios, json-feed, macos, rss, rss-feed-reader, rss-reader
- **Open Issues**: 882

## README (excerpt)
<img src=Technotes/Images/icon_1024.png height=128 width=128 style="display: block; margin: auto;"> 

# NetNewsWire

NetNewsWire is a free and open-source feed reader for macOS and iOS.

It supports [RSS](https://cyber.harvard.edu/rss/rss.html), [Atom](https://datatracker.ietf.org/doc/html/rfc4287), [JSON Feed](https://jsonfeed.org/), and [RSS-in-JSON](https://github.com/scripting/Scripting-News/blob/master/rss-in-json/README.md) formats.

More info: [https://netnewswire.com/](https://netnewswire.com/)

You can [report bugs and make feature requests](https://github.com/Ranchero-Software/NetNewsWire/issues) here on GitHub. You can also [read change notes](https://github.com/Ranchero-Software/NetNewsWire/releases/) for current and previous releases.

Here’s [How to Support NetNewsWire](Technotes/HowToSupportNetNewsWire.markdown). Spoiler: don’t send money. :)

(NetNewsWire’s Help menu has these links, so you don’t have to remember to come back to this page.)

#### Community

[Join the forum](https://discourse.netnewswire.com/) to talk with other NetNewsWire users — and to help out, if you’d like to, by testing, coding, writing, providing feedback, or just helping us think things through. Everybody is welcome and encouraged to join.

Every community member is expected to abide by the [code of conduct](CONTRIBUTING.md#code-of-conduct) which is included in the [Contributing](CONTRIBUTING.md) page.

#### Pull Requests

See the [Contributing](CONTRIBUTING.md) page for our process. They key thing is to ask before doing a PR (before even starting work). The Contributing page goes into more detail as to why it’s important to ask first.

#### Building

You can build and test NetNewsWire without a paid developer account.

```bash
git clone https://github.com/Ranchero-Software/NetNewsWire.git
```

You can locally override the Xcode settings for code signing
by creating a `DeveloperSettings.xcconfig` file locally at the appropriate path.
This allows for a pristine project with code signing set up with the appropriate
developer ID and certificates, and for developer to be able to have local settings
without needing to check in anything into source control.

You can do this in one of two ways: using the included `setup.sh` script or by creating the folder structure and file manually.

##### Using `setup.sh`

- Open Terminal and `cd` into the NetNewsWire directory. 
- Run this command to ensure you have execution rights for the script: `chmod +x setup.sh`
- Execute the script with the following command: `./setup.sh` and complete the answers.

##### Manually 

Make a directory `SharedXcodeSettings` next to where you have this repository.

The directory structure is:

```
directory/
  SharedXcodeSettings/
    DeveloperSettings.xcconfig
  NetNewsWire/
    NetNewsWire.xcodeproj
```
Example:

If your NetNewsWire Xcode project file is at:
`/Users/name/projects/NetNewsWire/NetNewsWire.xcodeproj`

Create your `DeveloperSettings.xcconfig` file at
`/Users/name/projects/SharedXcodeSettings/DeveloperSettings.xcconfig`

Then create a plain text file in it: `SharedXcodeSettings/DeveloperSettings.xcconfig` and
give it the contents:

```
CODE_SIGN_IDENTITY = Mac Developer
DEVELOPMENT_TEAM = <Your Team ID>
CODE_SIGN_STYLE = Automatic
ORGANIZATION_IDENTIFIER = <Your Domain Name Reversed>
DEVELOPER_ENTITLEMENTS = -dev
PROVISIONING_PROFILE_SPECIFIER =
```

Set `DEVELOPMENT_TEAM` to your Apple supplied development team.  You can use Keychain
Access to [find your development team ID](/Technotes/FindingYourDevelopmentTeamID.md).
Set `ORGANIZATION_IDENTIFIER` to a reversed domain name that you control or have made up.
Note that `PROVISIONING_PROFILE_SPECIFIER` should not have a value associated with it.

You can now open the `NetNewsWire.xcodeproj` in Xcode.

Now you should be able to build without code signing errors and without modifying
the NetNewsWire Xcode project.  This is a special build of NetNewsWire with some
functionality disabled.  This is because we have