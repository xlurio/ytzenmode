# YouTube Zen Mode

A Firefox extension that removes distractions from YouTube watch pages by hiding the related videos sidebar and comments section.

## Features

- 🎯 Hides the related videos section
- 💬 Hides the comments section
- ⚡ Works automatically on all YouTube watch pages

## Installation

### For Development/Testing

1. Open Firefox and navigate to `about:debugging`
2. Click on "This Firefox" in the left sidebar
3. Click "Load Temporary Add-on"
4. Navigate to the extension folder and select `manifest.json`

### For Permanent Installation

1. Open Firefox and navigate to `about:config`
2. Search for `xpinstall.signatures.required` and set it to `false` (only if installing unsigned extensions)
3. Package the extension:
   ```bash
   zip -r ytzenmode.zip manifest.json content.js icon.png
   ```
4. Open Firefox and navigate to `about:addons`
5. Click the gear icon and select "Install Add-on From File"
6. Select the `ytzenmode.zip` file

## Files

- `manifest.json` - Extension configuration and permissions
- `content.js` - Content script that removes the unwanted elements
- `README.md` - This file

## How It Works

The extension injects a content script (`content.js`) on all YouTube watch pages that:

1. Finds elements with IDs `#related` and `#comments`
2. Hides them by setting `display: none`
3. Monitors for page changes using MutationObserver (since YouTube is a SPA)
4. Re-applies the hiding when navigating between videos

## Permissions

- `https://www.youtube.com/*` - Required to run the content script on YouTube pages

## Browser Compatibility

This extension is designed for Firefox using Manifest V2.
