import { Component } from '@angular/core';
import { Footer } from "../footer/footer";

@Component({
  imports: [Footer],
  selector: 'app-privacy',
  styleUrl: './privacy.css',
  templateUrl: './privacy.html',
})
export class Privacy {

  headingText: string = "Privacy & Cookie Policy";
  headingPara: string = "Your privacy is important to us. This policy explains how we collect, use, and protect your personal information, and how we use cookies."

  contentArray = [
    {
      id: 1,
      heading: "1. Information We Collect",
      content: "We collect various types of information to provide and improve our service to you."
    }, {
      id: 2,
      heading: "1.1 Personal Information",
      content: "When you create an account, we collect information such as your name, email address, phone number, and professional details like work experience and education."
    }, {
      id: 3,
      heading: "1.2 Usage Information",
      content: "We automatically collect information about how you interact with MicroJob, including your IP address, browser type, pages visited, and time spent on our platform."
    }, {
      id: 4,
      heading: "1.3 Cookies and Tracking Technologies",
      content: "We use cookies and similar technologies to enhance your experience. For more details, please see the Cookie Policy section below."
    }, {
      id: 5,
      heading: "2. How We Use Your Information",
      content: [
        "We use the information we collect for the following purposes:",
        "To provide and maintain our service",
        "To notify you about changes to our service",
        "To provide customer support",
        "To gather analysis or valuable information to improve our service",
        "To monitor the usage of our service",
        "To detect, prevent, and address technical issues",
        "To detect and prevent automated abuse, spam, and fraudulent activity",
        "To match job seekers with relevant opportunities"
      ]
    }, {
      id: 6,
      heading: "3. Information Sharing and Disclosure",
      content: "We do not sell your personal information. We may share your information in the following circumstances:"
    }, {
      id: 7,
      heading: "3.1 With Employers",
      content: "When you apply for a job, we share your profile and application information with the relevant employer."
    }, {
      id: 8,
      heading: "3.2 Service Providers",
      content: "We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, and customer support."
    }, {
      id: 9,
      heading: "3.3 Legal Requirements",
      content: "We may disclose your information if required by law or in response to valid requests by public authorities."
    }, {
      id: 10,
      heading: "4. Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    }, {
      id: 11,
      heading: "5. Bot and Abuse Prevention",
      content: "We use Google reCAPTCHA Enterprise to tell real people apart from automated scripts. It runs in the background across the site, and we check its result on the pages where an account is most at risk of attack: sign in, registration, password reset, and email verification.\n\n To judge whether a request is genuine, reCAPTCHA collects device and browser details, your IP address, and how you interact with pages, and it sets its own cookies. This data is sent to Google, which returns a score telling us how likely it is that you are a real person. Google acts as our data processor for this: it may only handle the data on our instructions, under the Google Cloud terms and the Cloud Data Processing Addendum, and not for its own purposes such as advertising.\n\n This check is essential to keeping accounts secure, so you cannot opt out of it. We use the score only to decide whether to allow or refuse an attempt, never to profile you."
    }, {
      id: 12,
      heading: "6. Your Rights",
      content: [
        "You have the right to:",
        "Access, update, or delete your personal information",
        "Object to processing of your personal information",
        "Request restriction of processing your personal information",
        "Data portability",
        "Withdraw consent at any time"
      ]
    }, {
      id: 13,
      heading: "7. Data Retention",
      content: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law."
    }, {
      id: 14,
      heading: "8. Children's Privacy",
      content: "Our service is not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16."
    }, {
      id: 15,
      heading: "9. International Data Transfers",
      content: "Your information may be transferred to and maintained on servers located outside of the United States. We ensure appropriate safeguards are in place for such transfers in compliance with applicable United States and international data protection regulations."
    }, {
      id: 16,
      heading: "10. Governing Law",
      content: "This Privacy Policy shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, and applicable United States federal data protection regulations."
    }, {
      id: 17,
      heading: "11. Changes to This Policy",
      content: "We may update this Privacy & Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last updated' date."
    }, {
      id: 18,
      heading: "12. Cookie Policy",
      content: "This section explains how we use cookies and similar technologies to provide and improve our service."
    }, {
      id: 19,
      heading: "12.1 What Are Cookies",
      content: "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners."
    }, {
      id: 20,
      heading: "12.2 How We Use Cookies",
      content: "MicroJob uses cookies to enhance your experience, understand how you use our service, and improve our platform. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period)."
    }, {
      id: 21,
      heading: "12.3 Types of Cookies We Use",
      content: [
        [
          "Essential Cookies",
          "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.",
          "Authentication cookies to identify logged-in users",
          "Security cookies to prevent fraudulent activity",
          "Session cookies to maintain your session state",
          "Google reCAPTCHA cookies to tell real users apart from bots (see section 5)"
        ], [
          "Performance Cookies",
          "These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve how our website works.",
          "Analytics cookies to understand user behavior",
          "Error tracking cookies to identify and fix issues",
          "Load balancing cookies to distribute traffic efficiently"
        ], [
          "Functionality Cookies",
          "These cookies allow the website to remember choices you make and provide enhanced, personalized features.",
          "Preference cookies to remember your settings",
          "Language selection cookies",
          "User interface customization cookies"
        ], [
          "Targeting/Advertising Cookies",
          "These cookies are used to deliver relevant advertisements and measure the effectiveness of advertising campaigns.",
          "Advertising cookies to show relevant job opportunities",
          "Retargeting cookies to remind you of jobs you viewed",
          "Social media cookies for sharing content"
        ]
      ]
    }, {
      id: 22,
      heading: "12.4 Third-Party Cookies",
      content: [
        "We may also use third-party cookies from trusted partners to help us analyze website usage, protect the platform, and improve our service. These partners include:",
        "Google Analytics for website analytics",
        "Google reCAPTCHA Enterprise for bot detection (see section 5)",
        "Social media platforms for content sharing",
        "Advertising networks for targeted advertisements"
      ]
    }, {
      id: 23,
      heading: "12.5 Managing Cookies",
      content: [
        [
          "You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and some functionality may not work as intended.",
          "Browser Settings",
          "Most browsers allow you to view, manage, delete, and block cookies. You can set your browser to refuse all cookies or to indicate when a cookie is being sent."
        ]
      ]
    }, {
      id: 24,
      heading: "12.6 Do Not Track Signals",
      content: "Some browsers include a 'Do Not Track' (DNT) feature. Currently, there is no industry standard for how to respond to DNT signals, and we do not respond to DNT signals at this time."
    }, {
      id: 25,
      heading: "13. Contact Us",
      content: "If you have any questions about this Privacy & Cookie Policy, please contact us at work.home.trade.info.001@gamil.com."
    }
  ]

}
