# Big_Brother_Fantasy_Game

## Firebase setup
1. Create a Firebase project and register a web app to get the config values.
2. Enable Google sign-in in Firebase Authentication.
3. Copy `.env.example` to `.env` and fill in the `VITE_FIREBASE_*` values.
4. Install dependencies with `npm install`.
5. Run the app with `npm run dev`.

## Firestore structure
- `season/state`: `currentWeekIndex`, `weeks`, `weekEvents`
- `players/{playerId}`: `name`, `photo`, `isEvicted`, `evictedWeekIndex`
- `users/{uid}`: `displayName`, `email`, `photoURL`, `teams`, `transferBank`

## Admin access
The client hides Admin tools unless the signed-in email is `hudsonevers@gmail.com`.
Add Firestore rules to enforce admin-only writes in production.

## Mobile (Capacitor)
This project is set up to ship to the App Store and Google Play using Capacitor.

### Quick start
1. Update the app id/name in `capacitor.config.json` before store submission.
2. Build + sync native projects:
   - Android (Windows/macOS): `npm run cap:android`
   - iOS (macOS only): `npm run cap:ios`
3. Open the native projects from the generated `android`/`ios` folders if needed.

### Push notifications
- The Capacitor push plugin is installed and the app requests permissions on native.
- You still need to configure Firebase/APNs:
  - Android: add `google-services.json` and set up FCM.
  - iOS: add `GoogleService-Info.plist`, enable push capabilities, and configure APNs.

### Google sign-in (native)
- Uses `@capacitor-firebase/authentication` for native Google sign-in.
- iOS: add `GoogleService-Info.plist` and include the `REVERSED_CLIENT_ID` in
  your app's URL Types (Info.plist).
- Android: add `google-services.json` in `android/app`.
- After adding platform configs, run `npx cap sync`.

### In-app purchases (future)
- Plan to add a Capacitor in-app purchase plugin and server-side receipt validation
  before launching paid features.
