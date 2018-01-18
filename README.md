# Ionic Status Bar Decorators

## What Are They?

These decorators make managing status bar styling for your Ionic 2+ app simple and declarative. Rather than rewriting the same status bar initialization logic for every page, simply add one line above a page's class declaration.

## How do I use them?

There are two primary decorators offered by this package: `HideStatusBar` and `ShowStatusBar`. Use them like so:

```javascript
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { ShowStatusBar } from 'ionic-status-bar-decorators';

@IonicPage()
@Component({
  selector: 'my-page',
  templateUrl: 'my-page.html',
})
@ShowStatusBar({ color: 'light' })
// or @HideStatusBar() if that's what you need!
export class MyPage {
  constructor(
    public statusBar: StatusBar
  ) { } 
}
```

And that's it! Note that following important points:

1. You must inject the `StatusBar` service into your page component as `statusBar`. Otherwise the decorator won't be able to pick up on it.
2. You must make the decorator the first above the class declaration.

You can pass the following options to `ShowStatusBar`:

__color__: Either `light` or `dark`.
 
