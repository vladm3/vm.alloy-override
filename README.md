[![npm](https://img.shields.io/npm/v/vm.alloy-override.svg)](https://www.npmjs.com/package/vm.alloy-override)

# vm.alloy-override
A Titanium CLI plugin to override or restrict
Alloy version on a per project basis

The plugin locates the npm installed Alloy
package, either local (to your project) or global, and
overrides the env variable `ALLOY_PATH`.

## Installation
### Install Alloy
To make the plugin useful you need to install
the required Alloy version via `npm`.

#### Locally
```bash
# latest
npm install alloy --save-dev
# specific version
npm install alloy@1.10.3 --save-dev
```
#### Globally
```bash
# latest
npm install -g alloy
# specific version
npm install -g alloy@1.10.3
```

### Install the plugin
#### NPM (recommended)
Run this command in an Alloy project directory

```bash
npm install vm.alloy-override --save-dev
```

The plugin will install itself to
your project's local `/plugins` directory and
automatically enable itself in your `tiapp.xml` by
adding the following XML element to the `<plugins/>` section:
`<plugins/>` section:
```xml
<plugins>
  <!-- other plugins... -->
  <plugin version="0.1.0">vm.alloy-override</plugin>
</plugins>
```
#### Manual
At first, download the plugin.

Then place the plugin's code in
your project's local `/plugins` directory:
```bash
${project_dir}/plugins/vm.alloy-override/0.1.0/${plugin_files}
```

After that add the following XML element to the `<plugins/>` section:
```xml
<plugins>
  <!-- other plugins... -->
  <plugin version="0.1.0">vm.alloy-override</plugin>
</plugins>
```

## Example
See the example project [ti.transform-example](https://github.com/vladm3/ti.transform-example).

It restricts the app there to use Alloy 1.10.3.

## License
MIT