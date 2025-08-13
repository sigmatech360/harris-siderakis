
import { getToken, messaging } from "./firebase";

export const requestPermission = async () => {
  try {
    const status = await Notification.requestPermission();
    if (status === "granted") {
     await navigator.serviceWorker.register(
        "/harris-siderakis/firebase-messaging-sw.js"
      );

      const serviceWorkerRegistration = await navigator.serviceWorker.ready;
      // Get the FCM token using service worker registration
      const fcmToken = await getToken(messaging, {
        vapidKey:
          "BLALmDbpjt9q4fj5p-Lx4onfPzNP1Db4u6EJJEZxHAZJy05KyUd833b8FET906Pn4UFjwrBuu99Nc5Q9GMnb-vg",
        serviceWorkerRegistration, // Pass service worker registration
      });

    //   setDeviceToken(fcmToken);

      console.log("FCM Token:", fcmToken);
      if(fcmToken){

          return {device_token: fcmToken}
      }
    } else {
      console.error("Permission denied for notifications");
    }
  } catch (error) {
    console.error("Error requesting permission", error);
  }
};
