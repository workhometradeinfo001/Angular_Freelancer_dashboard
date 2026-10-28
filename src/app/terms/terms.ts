import { Component } from '@angular/core';
import { Footer } from '../footer/footer';

@Component({
  imports: [Footer],
  selector: 'app-terms',
  styleUrl: './terms.css',
  templateUrl: './terms.html',
})
export class Terms {

  headingFour: string = "Terms of Service";
  termsPara: string = "Please read these terms carefully before using our platform. These terms govern your use of our platform and services.";

  termsObj = [
    {
      id: 1,
      heading: "1. Acceptance of Terms",
      text: "By accessing and using MicroJob, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service."
    }, {
      id: 2,
      heading: "2. Use of Service",
      text: "MicroJob provides a platform for job seekers and employers to connect. You agree to use the service only for lawful purposes and in accordance with these Terms of Service."
    }, {
      id: 3,
      heading: "2.1 User Accounts",
      text: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account."
    }, {
      id: 4,
      heading: "2.2 Prohibited Activities",
      text: [
        'Posting false or misleading information',
        'Harassing or discriminating against other users',
        'Violating any applicable laws or regulations',
        'Attempting to gain unauthorized access to our systems'
      ]
    }, {
      id: 5,
      heading: "3. Content and Intellectual Property",
      text: "All content on MicroJob, including text, graphics, logos, and software, is the property of MicroJob or its content suppliers and is protected by intellectual property laws."
    }, {
      id: 6,
      heading: "3.1 User-Generated Content",
      text: "By posting content on MicroJob, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content in connection with the service."
    }, {
      id: 6,
      heading: "4. Privacy",
      text: "Your use of MicroJob is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information."
    }, {
      id: 7,
      heading: "5. Limitation of Liability",
      text: "MicroJob shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service."
    }, {
      id: 8,
      heading: "5.1 Earnings Disclaimer",
      text: "MicroJob does not guarantee earnings. All tasks are performance-based, and your actual earnings depend on the tasks you choose to complete, the quality of your submissions, and employer approvals. Past performance, examples shown on the platform, and testimonials are not promises or guarantees of future results."
    }, {
      id: 9,
      heading: "5.2 Payment Processing",
      text: "All payments on MicroJob are processed securely by Microjob LLC through trusted third-party payment providers, including Stripe and other supported payment methods. By using our payment services, you also agree to the terms and privacy policies of these third-party providers. We may require identity verification (KYC) for withdrawals and certain transactions to ensure platform security and regulatory compliance."
    }, {
      id: 10,
      heading: "6. Modifications to Terms",
      text: "We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page."
    }, {
      id: 11,
      heading: "7. Termination",
      text: "We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason whatsoever, including breach of these Terms."
    }, {
      id: 12,
      heading: "8. Governing Law",
      text: "These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in the State of Wyoming, United States."
    }, {
      id: 13,
      heading: "9. Contact Information",
      text: "If you have any questions about these Terms of Service, please contact us at work.home.trade.info.001@gmail.com."
    }
  ]


}
