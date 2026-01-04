import { Capacitor } from "@capacitor/core";
import { PushNotifications } from "@capacitor/push-notifications";

export const initPushNotifications = async () => {
  if (!Capacitor.isNativePlatform()) {
    return;
  }

  let status = await PushNotifications.checkPermissions();
  if (status.receive !== "granted") {
    status = await PushNotifications.requestPermissions();
  }

  if (status.receive !== "granted") {
    return;
  }

  await PushNotifications.register();

  PushNotifications.addListener("registration", (token) => {
    console.info("Push registration success", token.value);
  });

  PushNotifications.addListener("registrationError", (error) => {
    console.error("Push registration error", error);
  });

  PushNotifications.addListener("pushNotificationReceived", (notification) => {
    console.info("Push notification received", notification);
  });

  PushNotifications.addListener(
    "pushNotificationActionPerformed",
    (action) => {
      console.info("Push notification action performed", action);
    }
  );
};
