// OneSignal's SDK looks for this conventionally-named file at the site
// root for legacy/update-detection purposes, even when a custom
// serviceWorkerPath is configured. Delegates to our real combined worker.
importScripts('./sw.js');
