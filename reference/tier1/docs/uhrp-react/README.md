# The `@bsv/uhrp-react` Package

UHRP-enabled React components for images, video, and audio.

# Background

The Universal Hash Resolution Protocol (UHRP) allows content to be addressed by its SHA256 hash, enabling efficient content storage and retrieval. This eliminates the need to store large media files directly on the blockchain, significantly reducing costs.

## Installation

```
npm i @bsv/uhrp-react
```

## Usage

In your React project:

```tsx
import React from 'react'
import { Img, Source } from '@bsv/uhrp-react'

const App = () => (
  <div>
    <h1>UHRP Media Showcase</h1>

    <div>
      <h2>Image Preview</h2>
      <Img src='XUUVZqvzYskUvVfBZsrqXsvyoAUojQcJxDr6hTUwEz1vPLdvc64z' />
    </div>

    <div>
      <h2>Video Preview</h2>
      <video controls>
        <Source src='XUTEGfCykZ4E8oJhT98keoPTg2Q28Nq4sJJXLf9CYA5CjV7ZsTCV' />
      </video>
    </div>

    <div>
      <h2>Image with Loading State</h2>
      <Img
        src='XUUVZqvzYskUvVfBZsrqXsvyoAUojQcJxDr6hTUwEz1vPLdvc64z'
        loading={<div>Loading...</div>}
      />
    </div>
  </div>
)

export default App
```

## Props

src (required) – The UHRP address of the media.
loading (optional) – A React element to display while the media is being resolved.
Any additional props will be passed directly to the rendered <img> or <source> element for greater flexibility.

## How It Works

The uhrp-react library automatically resolves UHRP URLs to HTTP URLs using the UHRP Storage Server in the background. This provides seamless integration with your React application.

## Example

Check the [example directory of the repo](./example) for a simple React Scripts project utilizing these components.

## License

The license for the code in this repository is the Open BSV License.