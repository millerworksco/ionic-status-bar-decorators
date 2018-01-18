export as namespace IonicStatusBarDecorators;

export interface StatusBarOptions {
  background?: string,
  color?: 'light' | 'dark',
  overlay?: boolean
}

export function HideStatusBar(): ClassDecorator;

export function ShowStatusBar(options?: StatusBarOptions): ClassDecorator;