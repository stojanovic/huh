[![Build Status](https://travis-ci.org/stojanovic/huh.svg)](https://travis-ci.org/stojanovic/huh)  [![npm version](https://badge.fury.io/js/huh.svg)](http://badge.fury.io/js/huh)

# Huh
Random "The Bastard Operator From Hell"-style excuse generator.

# Usage

Install module from npm - `npm i huh`.

Module API is simple, use `excuse.get()` to get one random excuse or
`excuse.getAll()` to get an array with all of them.

```

var excuse = require('huh')

excuse.get() // Returns 1 random excuse

// ie. 'Bad user karma.'
// or 'Cache miss - please take better aim next time'
// or 'Sand fleas eating the Internet cables'
// or 'We are Microsoft.  What you are experiencing is not a problem; it is an undocumented feature.'

excuse.getAll() // Returns an array with all excuses

```

Or install module as global (`npm i huh -g`) and just run `huh` from terminal.

# List

Basic list is taken from [here](http://pages.cs.wisc.edu/~ballard/bofh/).

To add new excuses update `excuses.txt` file and send pull request.

It would be cool to have excuses in more different languages.

# Todo

- [x] - Add CLI support
- [ ] - Add Browser support
- [ ] - Add multi-language support?

# Licence

MIT
