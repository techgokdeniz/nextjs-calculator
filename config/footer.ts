interface FooterConfig {
  copyrightText: string;
  links: {
    text: string;
    href: string;
  }[];
}

const footerConfig: FooterConfig = {
  copyrightText: "© 2024 Acme Inc. All rights reserved.",
  links: [
    {
      text: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      text: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      text: "Contact Us",
      href: "/contact-us",
    },
  ],
};


export default footerConfig;