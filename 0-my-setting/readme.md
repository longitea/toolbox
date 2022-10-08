# VSCODE CONFIG 2022

This is my in-game settings.


## Theme 💬

**Using:** One Dark Pro Flat, Monokai Pro (yellow font)

**Favorite:** Palenight Theme, Atom One

#### Demo 💦

`One Dark Pro Flat`

![App Screenshot](https://cdn.jsdelivr.net/gh/binaryify/onedark-pro/screenshots/normal.png)

`Palenight Theme`

![App Screenshot](https://i.imgur.com/G3KSdGo.png)


#### Before install 💤


To see the visualization, visit the following site:
- https://vscodethemes.com/

To change theme in VS Code, press the keys 

```bash
  Ctrl+K Ctrl+T
```
image.png


## Json Vscode Setting
```json
{
    // Bracket Pair Colorizer
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": "active",

    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorTheme": "One Dark Pro Flat",
    "editor.tokenColorCustomizations": {
        "[One Dark Pro Flat], [Monokai]": {
            "textMateRules": [
                {
                    // đổi màu dấu comment
                    "scope": "punctuation.definition.comment",
                    "settings": {
                        "foreground": "#FFF0F5"
                        // #6495ED	- mã màu xanh lục biếc
                        // màu hồng đậm : FF69B4
                        // Mã màu hồng nhạt : FFB6C1, FFC0CB
                        // hồng cực nhạt : FFF0F5
                    }
                },
                {
                    // đổi màu nội dung commnet
                    "scope": "comment",
                    "settings": {
                        "foreground": "#FFC0CB",
                        "fontStyle": "italic",
                    }
                }
            ]
        }
    },
    // Terminal
    // "workbench.colorCustomizations": {
    //     // "terminal.background": "#090300",
    //     "terminal.foreground": "#A5A2A2",
    //     "terminalCursor.background": "#A5A2A2",
    //     "terminalCursor.foreground": "#A5A2A2",
    //     "terminal.ansiBlack": "#090300",
    //     "terminal.ansiBlue": "#01A0E4",
    //     "terminal.ansiBrightBlack": "#5C5855",
    //     "terminal.ansiBrightBlue": "#01A0E4",
    //     "terminal.ansiBrightCyan": "#B5E4F4",
    //     "terminal.ansiBrightGreen": "#01A252",
    //     "terminal.ansiBrightMagenta": "#A16A94",
    //     "terminal.ansiBrightRed": "#DB2D20",
    //     "terminal.ansiBrightWhite": "#F7F7F7",
    //     "terminal.ansiBrightYellow": "#FDED02",
    //     "terminal.ansiCyan": "#B5E4F4",
    //     "terminal.ansiGreen": "#01A252",
    //     "terminal.ansiMagenta": "#A16A94",
    //     "terminal.ansiRed": "#DB2D20",
    //     "terminal.ansiWhite": "#A5A2A2",
    //     "terminal.ansiYellow": "#FDED02"
    // },
    "editor.fontLigatures": true,
    "editor.fontWeight": "300",
    "editor.fontFamily": "SF Mono, Source Code Pro, 'Courier New', monospace",
    "explorer.compactFolders": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "workbench.startupEditor": "none",
    "workbench.editor.enablePreview": false,
    "sync.gist": "0ba46fb9caa7dc72918b4385f0a17f46",
}
```