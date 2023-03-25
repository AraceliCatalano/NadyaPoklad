// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore  } from 'firebase/firestore';
//import { getRemoteConfig, fetchAndActivate } from 'firebase/remote-config'; // import Remote Config


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MESSAGINGSENDERID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 
export const auth = getAuth(app); 

// // Cache code by Open AI 25MAR23
// // Check if values are cached in local storage
// const cachedUserAgent = localStorage.getItem('userAgent');
// const cachedAppVersion = localStorage.getItem('appVersion');
// const cachedPlatform = localStorage.getItem('platform');

// // If cached values exist, use them instead of reading from navigator object
// const userAgent = cachedUserAgent ? cachedUserAgent : navigator.userAgent;
// const appVersion = cachedAppVersion ? cachedAppVersion : navigator.cachedAppVersion;
// const platform = cachedPlatform ? cachedPlatform : navigator.cachedPlatform;

// // Store the values in local storage for future use
// localStorage.setItem('userAgent', userAgent);
// localStorage.setItem('appVersion', appVersion);
// localStorage.setItem('platform', platform);


// // Define Remote Config parameters and default values
// const remoteConfig = getRemoteConfig(app);
// remoteConfig.settings.minimumFetchIntervalMillis = 3600000; // Fetch once per hour
// remoteConfig.defaultConfig = {
//   'userAgentLimit': 1000,
//   'appVersionLimit': 1000,
//   'platformLimit': 1000
// };

// // Fetch Remote Config parameters and use them to limit API usage
// fetchAndActivate(remoteConfig).then(() => {
//   const userAgentLimit = remoteConfig.getNumber('userAgentLimit');
//   const appVersionLimit = remoteConfig.getNumber('appVersionLimit');
//   const platformLimit = remoteConfig.getNumber('platformLimit');

//   // Use the values of the parameters to limit the usage of the APIs
// }).catch((error) => {
//   console.log(`Error fetching remote config: ${error}`);
// });


export default app;

