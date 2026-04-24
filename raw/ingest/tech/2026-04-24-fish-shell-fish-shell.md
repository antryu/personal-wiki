<!-- GitHub Trending: Rust | 33,285 stars | +20 today -->

# fish-shell/fish-shell

> The user-friendly command line shell.

## Repository Info
- **URL**: https://github.com/fish-shell/fish-shell
- **Stars**: 33,285
- **Forks**: 2,282
- **Language**: Rust
- **License**: Other
- **Created**: 2012-05-10
- **Updated**: 2026-04-24
- **Topics**: fish, rust, shell, terminal
- **Open Issues**: 545

## README (excerpt)
.. |Cirrus CI| image:: https://api.cirrus-ci.com/github/fish-shell/fish-shell.svg?branch=master
      :target: https://cirrus-ci.com/github/fish-shell/fish-shell
      :alt: Cirrus CI Build Status

`fish <https://fishshell.com/>`__ - the friendly interactive shell |Build Status| |Cirrus CI|
=============================================================================================

fish is a smart and user-friendly command line shell for macOS, Linux,
and the rest of the family. fish includes features like syntax
highlighting, autosuggest-as-you-type, and fancy tab completions that
just work, with no configuration required.

For downloads, screenshots and more, go to https://fishshell.com/.

Quick Start
-----------

fish generally works like other shells, like bash or zsh. A few
important differences can be found at
https://fishshell.com/docs/current/tutorial.html by searching for the
magic phrase “unlike other shells”.

Detailed user documentation is available by running ``help`` within
fish, and also at https://fishshell.com/docs/current/index.html

Getting fish
------------

macOS
~~~~~

fish can be installed:

-  using `Homebrew <http://brew.sh/>`__: ``brew install fish``
-  using `MacPorts <https://www.macports.org/>`__:
   ``sudo port install fish``
-  using the `installer from fishshell.com <https://fishshell.com/>`__
-  as a `standalone app from fishshell.com <https://fishshell.com/>`__

Note: The minimum supported macOS version is 10.12.

Packages for Linux
~~~~~~~~~~~~~~~~~~

Packages for Debian, Fedora, openSUSE, and Red Hat Enterprise
Linux/CentOS are available from the `openSUSE Build
Service <https://software.opensuse.org/download.html?project=shells%3Afish&package=fish>`__.

Packages for Ubuntu are available from the `fish
PPA <https://launchpad.net/~fish-shell/+archive/ubuntu/release-4>`__,
and can be installed using the following commands:

::

   sudo apt-add-repository ppa:fish-shell/release-4
   sudo apt update
   sudo apt install fish

Instructions for other distributions may be found at
`fishshell.com <https://fishshell.com>`__.

Windows
~~~~~~~

-  On Windows 10/11, fish can be installed under the WSL Windows Subsystem
   for Linux with the instructions for the appropriate distribution
   listed above under “Packages for Linux”, or from source with the
   instructions below.
-  Fish can also be installed on all versions of Windows using
   `Cygwin <https://cygwin.com/>`__ or `MSYS2 <https://github.com/Berrysoft/fish-msys2>`__.

Building from source
~~~~~~~~~~~~~~~~~~~~

If packages are not available for your platform, GPG-signed tarballs are
available from `fishshell.com <https://fishshell.com/>`__ and
`fish-shell on
GitHub <https://github.com/fish-shell/fish-shell/releases>`__. See the
`Building <#building>`_ section for instructions.

Running fish
------------

Once installed, run ``fish`` from your current shell to try fish out!

Dependencies
~~~~~~~~~~~~

Running fish requires:

-  some common \*nix system utilities (currently ``mktemp``), in
   addition to the basic POSIX utilities (``cat``, ``cut``, ``dirname``,
   ``ls``, ``mkdir``, ``mkfifo``, ``rm``, ``sh``, ``sort``, ``tee``, ``tr``,
   ``uname`` and ``sed`` at least, but the full coreutils plus ``find`` and
   ``awk`` is preferred)

The following optional features also have specific requirements:

-  builtin commands that have the ``--help`` option or print usage
   messages require ``man`` for display
-  automated completion generation from manual pages requires Python 3.5+
-  the ``fish_config`` web configuration tool requires Python 3.5+ and a web browser
-  the :ref:`alt-o <shared-binds-alt-o>` binding requires the ``file`` program.
-  system clipboard integration (with the default Ctrl-V and Ctrl-X
   bindings) require either the ``xsel``, ``xclip``,
   ``wl-copy``/``wl-paste`` or ``pbcopy``/``pbpaste`` utilities
-  full completions for ``yarn`` and ``npm`` require the
   ``all-the-package-names`` NPM module
-  ``colorls`` is used, if i