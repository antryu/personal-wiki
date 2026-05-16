<!-- GitHub Trending: Rust | 6,171 stars | +29 today -->

# rust-lang/miri

> An interpreter for Rust's mid-level intermediate representation

## Repository Info
- **URL**: https://github.com/rust-lang/miri
- **Stars**: 6,171
- **Forks**: 477
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2015-11-12
- **Updated**: 2026-05-16
- **Topics**: N/A
- **Open Issues**: 175

## README (excerpt)
# Miri

Miri is an [Undefined Behavior][reference-ub] detection tool for Rust. It can run binaries and test
suites of cargo projects and detect unsafe code that fails to uphold its safety requirements. For
instance:

* Out-of-bounds memory accesses and use-after-free
* Invalid use of uninitialized data
* Violation of intrinsic preconditions (an [`unreachable_unchecked`] being
  reached, calling [`copy_nonoverlapping`] with overlapping ranges, ...)
* Not sufficiently aligned memory accesses and references
* Violation of basic type invariants (a `bool` that is not 0 or 1, for example,
  or an invalid enum discriminant)
* Data races and emulation of *some* weak memory effects, i.e.,
  atomic reads can return outdated values
* **Experimental**: Violations of the [Stacked Borrows] rules governing aliasing
  for reference types
* **Experimental**: Violations of the [Tree Borrows] aliasing rules, as an optional
  alternative to [Stacked Borrows]

On top of that, Miri will also tell you about memory leaks: when there is memory
still allocated at the end of the execution, and that memory is not reachable
from a global `static`, Miri will raise an error.

You can use Miri to emulate programs on other targets, e.g. to ensure that
byte-level data manipulation works correctly both on little-endian and
big-endian systems. See
[cross-interpretation](#cross-interpretation-running-for-different-targets)
below.

Miri has already discovered many [real-world bugs](#bugs-found-by-miri). If you
found a bug with Miri, we'd appreciate if you tell us and we'll add it to the
list!

By default, Miri ensures a fully deterministic execution by isolating the
program from the host system. Some APIs that would usually access the host, such
as gathering entropy for random number generators, environment variables, and
clocks, are replaced by deterministic "fake" implementations. Set
`MIRIFLAGS="-Zmiri-disable-isolation"` to access the real system APIs instead.
(Note that this isolation is *not* a proper sandbox, and gaps in the isolation are considered
normal bugs, not security bugs. Also, the "fake" system RNG APIs make Miri **not suited for
cryptographic use**! Do not generate keys using Miri.)

All that said, be aware that Miri does **not catch every violation of the Rust specification** in
your program, not least because there is no such specification. Miri uses its own approximation of
what is and is not Undefined Behavior in Rust. To the best of our knowledge, all Undefined Behavior
that has the potential to affect a program's correctness *is* being detected by Miri (modulo
[bugs][I-misses-ub]), but you should consult [the Reference][reference-ub] for the official
definition of Undefined Behavior. Miri will be updated with the Rust compiler to protect against UB
as it is understood by the current compiler, but it makes no promises about future versions of
rustc.

Further caveats that Miri users should be aware of:

* If the program relies on unspecified details of how data is laid out, it will
  still run fine in Miri -- but might break (including causing UB) on different
  compiler versions or different platforms. (You can use `-Zrandomize-layout`
  to detect some of these cases.)
* Program execution is non-deterministic when it depends, for example, on where
  exactly in memory allocations end up, or on the exact interleaving of
  concurrent threads. Miri tests one of many possible executions of your
  program, but it will miss bugs that only occur in a different possible execution.
  You can alleviate this to some extent by running Miri with different
  values for `-Zmiri-seed`, but that will still by far not explore all possible executions.
* Miri runs the program as a platform-independent interpreter, so the program
  has no access to most platform-specific APIs or FFI. A few APIs have been
  implemented (such as printing to stdout, accessing environment variables, and
  basic file system access) but most have not: for example, Miri currently does
 