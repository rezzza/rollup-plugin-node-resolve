# rollup-plugin-node-resolve-jail

*This plugin is a fork of the [`rollup-plugin-node-resolve`](https://github.com/rollup/rollup-plugin-node-resolve) plugin. It add a
jail/chroot like feature.*

Locate modules using the [Node resolution algorithm](https://nodejs.org/api/modules.html#modules_all_together), for using third party modules in `node_modules`. This fork allow to restrain the
lookup into a parent directory.

## Installation

```bash
npm install --save-dev rollup-plugin-node-resolve-jail
```

## Usage

```js
import { rollup } from 'rollup';
import nodeResolveJail from 'rollup-plugin-node-resolve-jail';

rollup({
  entry: 'main.js',
  plugins: [
    nodeResolveJail({
      // See `rollup-plugin-node-resolve` plugin documentation for the options
      // detail.

      // Lock the module search in this path (like a chroot). Module defined
      // outside this path will be mark has external.
      jail: '/my/jail/path' // Default: '/'

    })
  ]
}).then( bundle => bundle.write({ dest: 'bundle.js', format: 'iife' }) );
```


## License

MIT
