import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  ClockCounterClockwise,
  EnvelopeSimple,
  List,
  LockKey,
  QrCode,
  Scan,
  ShieldCheck,
  X,
} from "@phosphor-icons/react";

const APP_STORE_URL = "https://apps.apple.com/us/app/qrio/id6752806449";
const SUPPORT_EMAIL = "support@microspotlight.team";

const privacySections = [
  {
    id: "overview",
    title: "1. Overview",
    content: (
      <>
        <p>
          This Privacy Policy explains how the developer of Qrio, operating under
          the MicroSpotlight name ("we", "us", or "our"), handles information
          when you use the Qrio iOS app and this website.
        </p>
        <p>
          Qrio does not require an account. Most product data stays on your
          device. The app does use Firebase Analytics and Firebase Crashlytics,
          so it would be inaccurate to describe Qrio as collecting no data at all.
        </p>
      </>
    ),
  },
  {
    id: "information",
    title: "2. Information Qrio processes",
    content: (
      <>
        <h3>Code content and preferences stored on your device</h3>
        <p>
          Codes you scan or generate, scan history, favorites, appearance,
          language, haptic, clipboard, and link-opening preferences are stored
          locally using iOS storage such as Core Data and UserDefaults. Qrio does
          not provide a cloud account or cloud history service.
        </p>

        <h3>Permissions you choose to grant</h3>
        <p>
          Camera access is used to scan codes. Photo-library access is used only
          when you choose an image to scan or save a generated code. Contacts and
          calendar access are requested only when you choose to add compatible
          information from a scan result. Clipboard access occurs when you tap a
          copy action or enable automatic copy after scanning.
        </p>
        <p>
          Camera frames and selected images are analyzed on the device with Apple
          frameworks. Our app code does not upload those images to a Qrio server.
        </p>

        <h3>Diagnostics and analytics</h3>
        <p>
          Firebase Analytics is initialized when the app launches and records an
          app-launch event together with information automatically collected by
          the Firebase SDK, such as app, device, installation, and usage data.
          Firebase Crashlytics processes crash reports, stack traces, app and OS
          versions, device state, and identifiers needed to group and diagnose
          failures. Qrio does not intentionally add the text contained in codes
          you scan or generate to analytics events or crash-report custom fields.
        </p>

        <h3>Purchases</h3>
        <p>
          Apple processes App Store downloads, payments, refunds, and purchase
          restoration. Qrio receives StoreKit product and transaction status so
          it can unlock Pro features; we do not receive your payment-card details.
        </p>

        <h3>Website access</h3>
        <p>
          This website does not include analytics, advertising pixels, external
          web fonts, or tracking cookies. GitHub Pages and network providers such
          as Cloudflare may process ordinary request information, including IP
          address, browser details, and timestamps, to deliver and protect the
          site under their own policies.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "3. How information is used",
    content: (
      <>
        <p>Information is processed only as needed to:</p>
        <ul>
          <li>scan, generate, save, organize, and act on codes;</li>
          <li>remember the settings you select;</li>
          <li>restore and validate Pro access through Apple;</li>
          <li>understand basic app usage and diagnose crashes; and</li>
          <li>deliver, secure, and maintain this website.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "4. Service providers and disclosure",
    content: (
      <>
        <p>
          We do not sell personal information. Information may be processed by
          Apple for App Store distribution and purchases, by Google for Firebase
          Analytics and Crashlytics, and by GitHub and Cloudflare for website
          delivery and security. We may also disclose information where required
          by law or necessary to protect users, the public, or our legal rights.
        </p>
        <p>
          Learn more in the privacy information published by{" "}
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">
            Firebase <ArrowUpRight aria-hidden="true" />
          </a>
          ,{" "}
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">
            Apple <ArrowUpRight aria-hidden="true" />
          </a>
          ,{" "}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" />
          </a>
          , and{" "}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">
            Cloudflare <ArrowUpRight aria-hidden="true" />
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "5. Retention and deletion",
    content: (
      <>
        <p>
          Local history remains on your device until you delete individual items,
          clear history, or remove the app. App preferences remain until you
          change them, reset them, or remove the app.
        </p>
        <p>
          Firebase controls service-side retention under the applicable project
          settings and its documentation. Firebase states that Crashlytics crash
          reports and their associated data are retained for 90 days before the
          removal process begins. Routine hosting and security logs are retained
          by the relevant website providers under their policies.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "6. Security",
    content: (
      <p>
        We limit the data paths used by Qrio and rely on platform protections,
        encrypted network transport provided by our service providers, and
        access controls. No system can guarantee absolute security, so you should
        avoid placing sensitive secrets in a code unless you accept the risks of
        storing and sharing that code.
      </p>
    ),
  },
  {
    id: "transfers",
    title: "7. International processing",
    content: (
      <p>
        Apple, Google, GitHub, and Cloudflare operate globally. Information they
        process may be transferred to and handled in countries other than where
        you live, subject to their legal safeguards and applicable law.
      </p>
    ),
  },
  {
    id: "choices",
    title: "8. Your choices and rights",
    content: (
      <>
        <p>
          You can decline or revoke iOS permissions in Settings, disable automatic
          clipboard copying inside Qrio, delete local history, and uninstall the
          app. Because Qrio has no account system, we generally cannot locate local
          records that remain only on your device.
        </p>
        <p>
          Depending on where you live, you may have rights concerning personal
          information handled by us. Contact us with a specific request. We may
          need information sufficient to verify and respond to it.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "9. Policy updates",
    content: (
      <p>
        We may update this policy when Qrio, its service providers, or legal
        requirements change. The effective date above will be revised when an
        updated policy is published.
      </p>
    ),
  },
  {
    id: "contact",
    title: "10. Contact",
    content: (
      <p>
        For privacy questions or requests, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    ),
  },
];

const termsSections = [
  {
    id: "agreement",
    title: "1. Agreement",
    content: (
      <p>
        These Terms of Use govern your use of the Qrio iOS app and this website.
        By downloading or using Qrio, you agree to these Terms. Apple&apos;s
        applicable App Store terms and standard end-user license agreement also
        apply; mandatory Apple terms control where they conflict with these Terms.
      </p>
    ),
  },
  {
    id: "license",
    title: "2. License and eligibility",
    content: (
      <>
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable,
          revocable license to use Qrio on Apple devices you own or control, as
          permitted by the App Store terms. You must be legally capable of
          accepting these Terms or use Qrio with permission from a parent or legal
          guardian.
        </p>
        <p>
          Qrio is a utility for scanning, creating, storing, and organizing codes.
          It does not verify that the content encoded in a code is true, safe, or
          authorized.
        </p>
      </>
    ),
  },
  {
    id: "content",
    title: "3. Your content and responsibilities",
    content: (
      <>
        <p>
          You remain responsible for the text, links, contact details, payment
          information, event details, images, and other content you scan, enter,
          generate, save, or share with Qrio. You must have the rights and
          permissions needed to use that content.
        </p>
        <p>
          Review a code before sharing it. Anyone who receives a code may be able
          to read its contents. Do not use Qrio to create or distribute unlawful,
          deceptive, infringing, malicious, or harmful material.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "4. Scanned links and third-party services",
    content: (
      <p>
        A scanned code may open a website, start a message, reveal network
        credentials, or invoke another app. These destinations and actions are
        controlled by third parties, not Qrio. Inspect the displayed result and
        destination before continuing. We are not responsible for third-party
        content, security, availability, or transactions.
      </p>
    ),
  },
  {
    id: "purchases",
    title: "5. Pro purchase, restoration, and refunds",
    content: (
      <>
        <p>
          The current Pro offering is a one-time, non-consumable in-app purchase.
          Apple displays the price before purchase, processes payment, and
          associates the entitlement with your Apple ID. You can use Qrio&apos;s
          restore function where Apple makes the transaction available.
        </p>
        <p>
          A “lifetime” label refers to access to the supported Pro entitlement for
          the useful commercial life of Qrio; it is not a promise that the app,
          every feature, or compatibility with future devices and operating
          systems will continue indefinitely. Refund requests are handled by
          Apple under its policies and applicable law.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "6. Acceptable use",
    content: (
      <>
        <p>You may not:</p>
        <ul>
          <li>use Qrio to violate law or another person&apos;s rights;</li>
          <li>distribute malware, phishing links, fraud, or abusive content;</li>
          <li>interfere with Qrio, its distribution, or its security controls;</li>
          <li>reverse engineer or redistribute Qrio except where law permits; or</li>
          <li>misrepresent your relationship with Qrio or MicroSpotlight.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ownership",
    title: "7. Ownership",
    content: (
      <p>
        Qrio, its website, branding, interface, and original software are owned by
        the Qrio developer or its licensors and are protected by applicable
        intellectual-property laws. These Terms do not transfer ownership of Qrio
        or of content supplied by third parties.
      </p>
    ),
  },
  {
    id: "availability",
    title: "8. Changes and availability",
    content: (
      <p>
        We may improve, add, remove, suspend, or discontinue features when needed
        for security, reliability, legal compliance, platform compatibility, or
        product operation. We do not guarantee that Qrio will be uninterrupted,
        error-free, or compatible with every code, device, or third-party service.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "9. Disclaimers",
    content: (
      <p>
        To the maximum extent permitted by law, Qrio is provided “as is” and “as
        available,” without warranties of merchantability, fitness for a
        particular purpose, non-infringement, accuracy, or uninterrupted
        operation. Nothing in these Terms excludes warranties or consumer rights
        that cannot legally be excluded.
      </p>
    ),
  },
  {
    id: "liability",
    title: "10. Limitation of liability",
    content: (
      <p>
        To the maximum extent permitted by law, we are not liable for indirect,
        incidental, special, consequential, or punitive damages, loss of data,
        loss of profits, or harm arising from a scanned destination or third-party
        service. Where liability cannot be excluded, it is limited only to the
        extent permitted by applicable law.
      </p>
    ),
  },
  {
    id: "termination",
    title: "11. Suspension and termination",
    content: (
      <p>
        You may stop using Qrio at any time. We may suspend access or terminate
        this license if you materially violate these Terms or if continued use
        creates a legal, security, or operational risk. Provisions that by their
        nature should survive termination will remain effective.
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to these Terms",
    content: (
      <p>
        We may update these Terms to reflect product, legal, or operational
        changes. The effective date above will be revised when updated Terms are
        published. Continuing to use Qrio after an update means you accept the
        revised Terms to the extent permitted by law.
      </p>
    ),
  },
  {
    id: "contact",
    title: "13. Contact",
    content: (
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    ),
  },
];

function AppStoreBadge({ compact = false }) {
  return (
    <a
      className={`app-store-link${compact ? " is-compact" : ""}`}
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Download Qrio on the App Store"
    >
      <img
        src="/assets/download-on-app-store.svg"
        alt="Download on the App Store"
      />
    </a>
  );
}

function Brand({ inverse = false }) {
  return (
    <a className={`brand${inverse ? " is-inverse" : ""}`} href="/" aria-label="Qrio home">
      <img src="/assets/qrio-app-icon.png" alt="" />
      <span>Qrio</span>
    </a>
  );
}

function SiteHeader({ inverse = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={`site-header${inverse ? " is-inverse" : ""}`}>
      <div className="header-inner">
        <Brand inverse={inverse} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/#features">Features</a>
          <a href="/privacy/">Privacy</a>
          <a href="/terms/">Terms</a>
        </nav>
        <div className="header-actions">
          <AppStoreBadge compact />
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="/#features" onClick={() => setOpen(false)}>Features</a>
          <a href="/privacy/" onClick={() => setOpen(false)}>Privacy</a>
          <a href="/terms/" onClick={() => setOpen(false)}>Terms</a>
          <AppStoreBadge />
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-background" src="/assets/hero-qr-scan.png" alt="" />
      <div className="hero-shade" />
      <SiteHeader inverse />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title">Qrio</h1>
          <p className="hero-tagline">
            Scan instantly.<br />
            Create effortlessly.<br />
            Keep everything handy.
          </p>
          <p className="hero-description">
            Qrio is the fast and reliable iOS app to scan QR codes and barcodes,
            generate custom codes, and manage your history.
          </p>
          <AppStoreBadge />
          <a className="feature-jump" href="#features">
            See all features <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="hero-devices" aria-label="Qrio app screenshots">
          <img className="hero-device hero-device-scan" src="/assets/qrio-scan.png" alt="Qrio camera scanner" />
          <img className="hero-device hero-device-home" src="/assets/qrio-home.png" alt="Qrio home screen" />
          <img className="hero-device hero-device-generate" src="/assets/qrio-generate.png" alt="Qrio code generator" />
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Scan with speed and precision",
    copy: "Scan QR codes and common barcodes with your camera, or choose a code from your photo library.",
    icon: Scan,
    image: "/assets/qrio-scan.png",
    alt: "Qrio camera scan interface",
    accent: "blue",
    position: "scan",
  },
  {
    title: "Create custom QR codes",
    copy: "Generate codes for links, text, Wi-Fi, contacts, events, and more, then copy, share, or save them.",
    icon: QrCode,
    image: "/assets/qrio-generate.png",
    alt: "A QR code generated in Qrio",
    accent: "green",
    position: "generate",
  },
  {
    title: "Find it in your history",
    copy: "Recent scans and generated codes are saved locally, searchable, and easy to mark as favorites.",
    icon: ClockCounterClockwise,
    image: "/assets/qrio-history.png",
    alt: "Qrio scan history",
    accent: "ink",
    position: "history",
  },
];

function Features() {
  return (
    <section className="features-section" id="features" aria-labelledby="features-title">
      <div className="section-heading">
        <h2 id="features-title">Everything you need. Right at your fingertips.</h2>
        <p>
          Scan with your camera or from photos, create custom codes, and return
          to what matters without breaking your flow.
        </p>
      </div>

      <div className="feature-list">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article className="feature-row" key={feature.title}>
              <div className={`feature-icon is-${feature.accent}`} aria-hidden="true">
                <Icon weight="regular" />
              </div>
              <div className="feature-copy">
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </div>
              <div className={`feature-preview is-${feature.position}`}>
                <img src={feature.image} alt={feature.alt} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PrivacyBand() {
  return (
    <section className="privacy-band" aria-labelledby="privacy-band-title">
      <div className="privacy-band-inner">
        <div className="privacy-lock" aria-hidden="true"><LockKey weight="regular" /></div>
        <div>
          <h2 id="privacy-band-title">Your privacy matters.</h2>
          <p>
            We&apos;re committed to transparency. Learn how Qrio handles your data
            in our <a href="/privacy/">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Brand />
        <span className="footer-tagline">Scan. Create. Keep.</span>
        <nav aria-label="Footer navigation">
          <a href="/privacy/">Privacy Policy</a>
          <a href="/terms/">Terms of Use</a>
        </nav>
        <AppStoreBadge compact />
      </div>
      <div className="footer-meta">
        <span>&copy; 2026 Qrio. All rights reserved.</span>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <PrivacyBand />
      <Footer />
    </main>
  );
}

function LegalPage({ type }) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Use";
  const summary = isPrivacy
    ? "A clear account of the information Qrio processes, what stays on your device, and the services used for diagnostics."
    : "The rules that apply when you download, purchase, scan, create, store, or share content with Qrio.";
  const sections = isPrivacy ? privacySections : termsSections;

  useEffect(() => {
    document.title = `${title} - Qrio`;
  }, [title]);

  return (
    <main className="legal-page">
      <div className="legal-header-wrap"><SiteHeader inverse /></div>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-status"><ShieldCheck aria-hidden="true" /> Effective September 1, 2026</div>
          <h1>{title}</h1>
          <p>{summary}</p>
          <a className="legal-contact" href={`mailto:${SUPPORT_EMAIL}`}>
            <EnvelopeSimple aria-hidden="true" /> {SUPPORT_EMAIL}
          </a>
        </div>
      </section>

      <div className="legal-layout">
        <aside className="legal-toc" aria-label={`${title} contents`}>
          <span>On this page</span>
          <nav>
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>{section.title.replace(/^\d+\. /, "")}</a>
            ))}
          </nav>
        </aside>

        <article className="legal-content">
          {sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}
          <div className="legal-endnote">
            <CheckCircle weight="fill" aria-hidden="true" />
            <p>
              This document is the current public version for Qrio. Questions are
              welcome at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}

function NotFoundPage() {
  useEffect(() => {
    document.title = "Page not found - Qrio";
  }, []);

  return (
    <main className="not-found-page">
      <SiteHeader inverse />
      <section>
        <img src="/assets/qrio-app-icon.png" alt="" />
        <span>404</span>
        <h1>This code leads nowhere.</h1>
        <p>The page may have moved, but Qrio&apos;s home page is right here.</p>
        <a href="/">Return home <ArrowRight aria-hidden="true" /></a>
      </section>
    </main>
  );
}

export function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/privacy") return <LegalPage type="privacy" />;
  if (path === "/terms") return <LegalPage type="terms" />;
  if (path !== "/") return <NotFoundPage />;
  return <HomePage />;
}
