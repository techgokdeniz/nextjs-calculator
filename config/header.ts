type MenuItem = {
  name: string;
  href: string;
};

type Config = {
  title: string;
  menu: MenuItem[];
  buttonText: string;
};

const headerConfig: Config = {
  title: "Online Calculation",
  menu: [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact-us" },
  ],
  buttonText: "Random Calculators",
};

export default headerConfig;