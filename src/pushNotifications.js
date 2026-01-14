import { Capacitor } from "@capacitor/core";
import { PushNotifications } from "@capacitor/push-notifications";

export const initPushNotifications = async () => {
  if (!Capacitor.isNativePlatform()) {
    return false;
  }

  let status = await PushNotifications.checkPermissions();
  if (status.receive !== "granted") {
    status = await PushNotifications.requestPermissions();
  }

  if (status.receive !== "granted") {
    return false;
  }

  await PushNotifications.register();

  PushNotifications.addListener("registration", () => {});
  PushNotifications.addListener("registrationError", () => {});
  PushNotifications.addListener("pushNotificationReceived", () => {});
  PushNotifications.addListener("pushNotificationActionPerformed", () => {});

  return true;
};

export const disablePushNotifications = async () => {
  if (!Capacitor.isNativePlatform()) {
    return;
  }
  if (typeof PushNotifications.removeAllListeners === "function") {
    await PushNotifications.removeAllListeners();
  }
  if (typeof PushNotifications.unregister === "function") {
    await PushNotifications.unregister();
  }
};
