[![Build Status](https://travis-ci.org/stojanovic/huh.svg)](https://travis-ci.org/stojanovic/huh)  [![npm version](https://badge.fury.io/js/huh.svg)](http://badge.fury.io/js/huh)

# Huh
Random excuse generator.

It returnes "The Bastard Operator From Hell"-style excuses.

# Usage

Module API is simple, use `excuse.get()` to get one random excuse or
`excuse.getAll()` to get an array with all of them.

```

var excuse = require('huh')

excuse.get() // Returns 1 random excuse

// ie. 'virus attack, luser responsible'

excuse.getAll() // Returns an array with all excuses

```

# List

Basic list is taken from [here](http://pages.cs.wisc.edu/~ballard/bofh/).

To add new excuses update `excuses.txt` file and send pull request.

It would be cool to have excuses in more different languages.

# Todo

- [ ] - Add CLI support
- [ ] - Add Browser support
- [ ] - Add multi-language support?

# Licence

MIT
