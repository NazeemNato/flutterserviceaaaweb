importScripts("https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js");
var firebaseConfig = {
    apiKey: "AIzaSyDyshHAfRSAB4_e7rX1luWQIfxdnKF3lZE",
    authDomain: "hsajdhsajkhdjksa.firebaseapp.com",
    projectId: "hsajdhsajkhdjksa",
    storageBucket: "hsajdhsajkhdjksa.appspot.com",
    messagingSenderId: "741441166152",
    appId: "1:741441166152:web:c552111d036f008a2af17d",
    measurementId: "G-CSFFZ3C6VZ"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});