# Content Evidence

Verified on September 1, 2026. Product and legal copy is limited to behavior that is present in the Qrio source at the time of publication or documented by the named platform provider.

| Published statement | Evidence |
| --- | --- |
| Qrio scans QR codes and barcodes with the camera or a selected photo. | `Modules/App/Sources/App/Views/ScanView.swift`, `Modules/App/Sources/App/Components/Scan/ScannerViewController.swift`, and `Modules/App/Sources/App/Foundation/VisionUtilities.swift` in the Qrio app repository. |
| Qrio generates custom codes and supports copy, share, and save actions. | `Modules/App/Sources/App/Views/GenerateView.swift` and its generate components in the Qrio app repository. |
| Recent scans and generated codes are stored locally, searchable, and can be favorited. | `Modules/App/Sources/App/Managers/PersistenceController.swift`, `HistoryManager.swift`, and `Views/HistoryView.swift`. Free users are limited to 50 retained records by `HistoryManager.enforceLimit()`; the website therefore does not claim unlimited history. |
| Camera, photo, contacts, calendar, and clipboard access happens only for the related user action or selected setting. | `ScanView.swift`, `ScanResultView.swift`, `HistoryDetailView.swift`, `GenerateView.swift`, and `SettingsView.swift`. |
| Qrio uses Firebase Analytics and Crashlytics. | `Modules/InsightKit/Sources/InsightKit/Insight.swift`, `Analytics.swift`, `Crashlytics.swift`, and `Modules/App/Sources/App/AppDelegate.swift`. |
| Pro is implemented as a restorable StoreKit lifetime product. | `Modules/App/Sources/App/IAP/IAPManager.swift`, `ProStatusManager.swift`, and `PaywallView.swift`. |
| Apple processes App Store purchases and refunds. | [Apple Media Services Terms and Conditions](https://www.apple.com/legal/internet-services/itunes/) and [Request a refund for apps or content](https://support.apple.com/en-us/118223). |
| Firebase Crashlytics retains crash reports and associated data for 90 days before removal begins. | [Firebase Privacy and Security documentation](https://firebase.google.com/support/privacy). |
| GitHub Pages and Cloudflare may process ordinary request and security data while delivering the website. | [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) and [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/). |
| The website itself adds no analytics, advertising pixels, external fonts, or tracking cookies. | Source review of `src/`, the page entry files, and the production browser resource audit. The rendered pages requested no third-party runtime resources. |

The legal pages deliberately avoid naming an unverified legal entity, jurisdiction, minimum age, or data-protection representative. Those details should be added only after the operator confirms them.
