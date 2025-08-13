import { useEffect, useState } from "react";
import { messaging, getToken, onMessage } from "./firebase";
import toast from "react-hot-toast";
import { FaX } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
// import { toast } from "react-toastify";

const useFirebaseMessaging = () => {
  const [deviceToken, setDeviceToken] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to request notification permission and get the FCM token
    // const requestPermission = async () => {
    //   try {
    //     const status = await Notification.requestPermission();
    //     if (status === "granted") {
    //       const serviceWorkerRegistration =
    //         await navigator.serviceWorker.register("./firebase.js");
    //       // Get the FCM token using service worker registration
    //       const fcmToken = await getToken(messaging, {
    //         vapidKey:
    //           "BLALmDbpjt9q4fj5p-Lx4onfPzNP1Db4u6EJJEZxHAZJy05KyUd833b8FET906Pn4UFjwrBuu99Nc5Q9GMnb-vg",
    //         serviceWorkerRegistration, // Pass service worker registration
    //       });

    //       setDeviceToken(fcmToken);
    //       console.log("FCM Token:", fcmToken);
    //     } else {
    //       console.error("Permission denied for notifications");
    //     }
    //   } catch (error) {
    //     console.error("Error requesting permission", error);
    //   }
    // };

    // requestPermission();

    // Firebase messaging handler when a message is received in the foreground
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Message received:", payload);
      toast.custom(
        (t) => (
          <div className="notification-popUp">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="notiCloseBtn"
            >
              <FaX size={10} />
            </button>
            <span className="check-icon">
              <FaCheck size={10} className="text-white" />
            </span>
            <div className="popupBody">
              <p className="fw-bold mb-1">{payload.notification.title}</p>
              <p className="mb-0">{payload.notification.body}</p>
              {/* <p>hello</p> */}
            </div>
          </div>
        ),
        {
          duration: Infinity,
        }
      );
    });

    // Cleanup the messaging listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   if (!deviceToken) return; // Prevent sending undefined token

  //   const sendTokenToServer = async () => {
  //     try {
  //       setLoading(true); // Start loading
  //       const response = await fetch(
  //         "https://server.testlinkwebsitespace.com/hisoc-firebase/public/api/device",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ device_token: deviceToken }),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       // console.log("Server response:", data); // Handle the response data
  //     } catch (err) {
  //       setError(err.message); // Set error if the fetch fails
  //       console.error("Fetch error:", err);
  //     } finally {
  //       setLoading(false); // End loading
  //     }
  //   };

  //   sendTokenToServer();
  // }, [deviceToken]); // This effect will run whenever the `token` changes

  return {
    // deviceToken,
    loading,
    error,
  };
};

export default useFirebaseMessaging;
