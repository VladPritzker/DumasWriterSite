DumasWriter — promotional website
=================================

An English marketing website for the native DumasWriter Mac app.
The website advertises the app and includes an illustrated introduction,
real scene assets, and a practical app guide. It does not run a book editor,
save manuscripts in browser storage, or distribute an app installer.

OPEN
Double-click index.html, or use Open DumasWriter.command.
The guide is guide.html. Both pages also work from local files without a server.

APP STORE LINK — FINAL CONFIGURATION
Set appStoreURL in site-config.js to DumasWriter's verified apps.apple.com
product URL. No listing ID was supplied or independently verified.
Until then, installation buttons show instructions and open Apple's App Store
homepage, asking visitors to search for DumasWriter. This is a fallback,
not a direct link to a verified product listing.

LOCAL DEVELOPMENT
No dependencies or npm install needed. Node.js 18+ for the optional commands:
npm run dev    — preview at http://127.0.0.1:4187
npm run check  — validate JavaScript syntax
npm run build  — copy only public promotional files into dist/
PORT=4191 npm run dev — select a different preview port

Publish only dist/ if hosting later. Pushing the source to GitHub does not deploy the site.
There is no backend, analytics, manuscript upload, localStorage, or web editor.

CONTENT
The app runs on Mac and must be installed separately from the Mac App Store.
Its Library contains ordinary Markdown files in the folder the user chooses.
Cloud/backup tools chosen by the user may independently sync that folder.
The app guide covers local saving, Library, books and chapters, notes, scenes,
sound and text settings, export, and backups. Source evidence is recorded in
CONTENT-SOURCES.txt. The hero writing view is an illustration, not a screenshot.

ASSETS
assets/app-icon.jpg — supplied app icon.
assets/app-mist.jpg, app-forest.jpg, app-night.jpg — resized actual scene images
from Desktop/Dumas. See assets/app-assets.txt for provenance.

PREVIOUS PROTOTYPE
The earlier browser-writing prototype has been archived outside this site in
DumasWriter-browser-prototype-archive. Existing browser storage was not changed.
The native app and the user's books were not modified.
