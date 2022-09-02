// ERROR:
// NOTE:
// INFO:  ..
// Reference:
// FIXME:
// TODO:
// DIVIDE

// INFO:  file Location : Preference -> Settings -> TODO Highlight -> Click "Edit in settings.js"
const todo_highlight_custom_code = {
  "workbench.startupEditor": "none",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "workbench.iconTheme": "material-icon-theme",
  "terminal.integrated.enableMultiLinePasteWarning": false,

  //Fira Code
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontWeight": "400",
  "workbench.editor.enablePreview": false, // Regular
  "todohighlight.isEnable": true,
  "todohighlight.isCaseSensitive": true,
  "todohighlight.keywords": [
    "FIXME:", // without further details, this will use the defaultStyle
    "REVIEW:", // as will this
    // now for a more complex example
    {
      text: "TODO:",
      color: "white",
      border: "1px solid white",
      borderRadius: "2px", //NOTE: using borderRadius along with `border` or you will see nothing change
      backgroundColor: "rgba(0,0,0,.2)",
    },
    {
      text: "ERROR:",
      before: {
        contentText: "⚠️", // can add text before or after the highlight
      },
      after: {
        contentText: "⚠️", // can add text before or after the highlight
      },
      color: "red",
      border: "1px solid red",
      borderRadius: "2px", //NOTE: using borderRadius along with `border` or you will see nothing change
      backgroundColor: "rgba(0,0,0,.2)",
    },
    {
      text: "NOTE:", // this is further refined by the regex pattern below
      color: "black",
      backgroundColor: "yellow",
      overviewRulerColor: "grey",
      regex: {
        pattern: '(?<=^|"|\\s)NOTE[:]?(?!\\w)', // in this example, highlight `NOTE:` with or without the `:` and that's not part of another word.  (I.e.: The above will highlight 'NOTE' but not the "note" in 'SIDENOTE').
        /**
         * Positive lookbehind (`(?<=...)`) is only supported in Node.js v9 and up.
         * If your VSCode version is built on an earlier version the example above may not work. Simple tests:
         * Shouldm't work: note  deNOTEd  NOTEing
         * Should work: NOTE:  "NOTE:"
         **/
      },
      isWholeLine: false,
    },
    {
      text: "DIVIDE",
      color: "pink",
      backgroundColor: "#000000",
      border: "1px solid white",
      isWholeLine: true,
    },
    {
      text: " INFO: ",
      color: "green",
      backgroundColor: "rgba(255, 255, 255, 1)", // INFO: setting the last parameter to zero (alpha channel) disables the background colour
      border: "2px solid green",
      isWholeLine: false,
    },
    {
      text: "Reference:",
      color: "blue",
      backgroundColor: "rgba(205, 209, 228)", // INFO: setting the last parameter to zero (alpha channel) disables the background colour
      border: "none",
      isWholeLine: false,
    },
  ],
  "todohighlight.include": [
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
    "**/*.html",
    "**/*.php",
    "**/*.css",
    "**/*.scss",
    "**/*.md",
    "**/*.mmd",
    "**/*.markdown",
    "**/*.mdown",
    "**/*.txt",
    "**/*.rb",
    "**/*.go",
  ],
  "todohighlight.exclude": [
    "**/node_modules/**",
    "**/bower_components/**",
    "**/dist/**",
    "**/build/**",
    "**/.vscode/**",
    "**/.github/**",
    "**/_output/**",
    "**/*.min.*",
    "**/*.map",
    "**/.next/**",
  ],
  "todohighlight.maxFilesForSearch": 5120,
  "todohighlight.toggleURI": false,
  "todohighlight.defaultStyle": {},
};
