# emacs-kill-line

This extension emulates Emacs kill-line with option ``(setq kill-whole-line t)`` .

https://marketplace.visualstudio.com/items?itemName=hiro.emacs-kill-line

## Features

Cut the text from the point at the end of the line. If the position of the point at the beginning of the line cut the whole line including its newline 

To assign it to a default keybinding, add the following to your ``keybinginds.json``

```
{
    "key": "ctrl+k",
    "command": "extension.emacsKillLine.kill-line",
    "when": "editorTextFocus"
}
```

## Release Notes

### 0.0.5

Update README.md

### 0.0.4

Improve performance.

### 0.0.3

Fix the bug that the clipboard doesn't work on Remote Development.

### 0.0.2

Fix minor bugs

### 0.0.1

Initial release

