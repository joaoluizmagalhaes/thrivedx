# ThriveDX Test Plugin

This plugin adds custom text, date, and image fields to posts and displays them on the front end. It's designed for WordPress and utilizes Gutenberg blocks for an enhanced editorial experience.

## Features

- Custom Gutenberg block with text, date, and image fields.
- Front-end display of custom fields with user customization options.
- TailwindCSS for styling Gutenberg blocks and front-end components.

## Requirements

- WordPress 5.8 or higher.
- PHP 7.3 or higher.
- Node.js 12.x or higher.
- npm 6.x or higher.

## Libraries Used

- `@wordpress/scripts`: For compiling JavaScript and managing WordPress script dependencies.
- `TailwindCSS`: A utility-first CSS framework for rapidly building custom designs.
- `PostCSS`: A tool for transforming CSS with JavaScript, used here to integrate TailwindCSS.

## Installation

1. Clone or download the plugin into your WordPress plugins directory: `/wp-content/plugins/`.
2. Navigate to the plugin directory in a terminal or command prompt.
3. Run `npm install` to install the development dependencies.

## Development

### Compiling JavaScript

This plugin uses `@wordpress/scripts` for compiling JavaScript. To compile your JavaScript code, run:

```bash
npm run build:js
```

For development, you can watch for changes to your JavaScript files and recompile automatically:

```bash
npm run watch:js
```

### Compiling CSS with TailwindCSS

To compile your CSS using TailwindCSS, run:

```bash
npm run build:css
```

To watch for changes to your CSS files and recompile automatically:

```bash
npm run watch:css
```

### Running Both Watchers

To watch both JavaScript and CSS files simultaneously during development:

```bash
npm run watch
```

## Usage

After activating the plugin in WordPress, you will find the "Custom Fields Block" in the Gutenberg editor under the "Design" category. You can add this block to any post or page and customize the text, date, and image fields directly in the editor.

## Customizing

User customization options are available in the block's sidebar in the Gutenberg editor. These include changing text colors, selecting images, and more, depending on the block's current features.

## License

This plugin is licensed under the GPL-2.0 license. See the [LICENSE](LICENSE) file for details.