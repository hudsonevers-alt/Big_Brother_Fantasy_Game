import UIKit
import Capacitor
import FirebaseCore

@UIApplicationMain
class AppDelegate: CAPAppDelegate {
    override func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        if FirebaseApp.app() == nil {
            FirebaseApp.configure()
        }

        print("Firebase configured:", FirebaseApp.app() != nil)

        return super.application(application, didFinishLaunchingWithOptions: launchOptions)
    }
}
