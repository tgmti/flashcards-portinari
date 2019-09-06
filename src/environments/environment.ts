// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyCTvW_JCxfxzBgWzPLQ_WmLAJ1jba90SYI",
  authDomain: "flashcards-portinari.firebaseapp.com",
  databaseURL: "https://flashcards-portinari.firebaseio.com",
  projectId: "flashcards-portinari",
  storageBucket: "",
  messagingSenderId: "938883056428",
  appId: "1:938883056428:web:563c5d1e4d8f5aa7e0e289"
};

export const environment = {
  production: false,
  firebase: firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
