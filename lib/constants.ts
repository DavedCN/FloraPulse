// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About FloralPulse",
      "Installation",
      "Privacy Policy",
      "Terms of Service",
      "Contact Us",
    ],
  },
  {
    title: "Read More",
    links: ["For Orchards", "For Vineyards", "For Scientists"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Phone", value: "530-220-7668" },
    { label: "Email", value: "info@florapulse.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/linkedin-icon.svg",
    "/yt-icon.svg",
    "/insta-icon.svg",
    "/x-icon.svg",
  ],
};

type modalType = {
  href: string;
  label: string;
};
interface navType {
  href?: string;
  label: string;
  modal?: modalType[];
}

export const landingNavLinks: navType[] = [
  { href: "#home", label: "Home" },
  {
    label: "About Us",
    modal: [
      {
        href: "https://www.florapulse.com/florapulse-in-the-news",
        label: "FloralPulse in the News",
      },
    ],
  },
  {
    label: "Why FloraPulse",
    modal: [
      {
        href: "https://www.florapulse.com/why-orchards",
        label: "For Orchards",
      },
      {
        href: "https://www.florapulse.com/why-vineyards",
        label: "For Vineyards",
      },
      {
        href: "https://www.florapulse.com/why-scientists",
        label: "For Scientists",
      },
      { href: "#testimonials", label: "Testimonials" },
      { href: "https://www.florapulse.com/case-study", label: "Case Study" },
    ],
  },
  {
    label: "Contact",
    modal: [
      { href: "https://www.florapulse.com/support", label: "Customer Support" },
      {
        href: "https://www.florapulse.com/distributors",
        label: "Find a Distributor",
      },
    ],
  },
  {
    label: "Resources",
    modal: [
      {
        href: "https://www.florapulse.com/product-versions",
        label: "Product Versions",
      },
      { href: "https://www.florapulse.com/faq", label: "FAQ" },
    ],
  },
  {
    label: "Blog",
    modal: [
      {
        href: "https://www.florapulse.com/mailing-list-archive",
        label: "Mailing List Archive",
      },
    ],
  },
];

interface carouselCards {
  title: string;
  image: string;
}

export const carouselCards: carouselCards[] = [
  {
    title: "Installation",
    image: "/rous1.webp",
  },
  {
    title: "Tree Setup",
    image: "/rous2.webp",
  },
  {
    title: "Setup and Maintenance",
    image: "/rous3.webp",
  },
  {
    title: "Metrics and Analytics",
    image: "/rous4.webp",
  },
];

export const readMoreCards = [
  {
    title: "Orchards",
    image: "/orchard.svg",
    link: "https://www.florapulse.com/why-orchards",
  },
  {
    title: "Vineyards",
    image: "/vineyard.svg",
    link: "https://www.florapulse.com/why-vineyards",
  },
  {
    title: "Scientists",
    image: "/science.svg",
    link: "https://www.florapulse.com/why-scientists",
  },
];

export const testimonials = [
  {
    imageSrc: "/testy1.webp",
    name: "Michael Vasey",
    title: "Lindauer River Ranch Red Bluff, California",
    testimonialText:
      "We were extremely happy with the FloraPulse system we tested in our prune orchard this year. We found that the FloraPulse readings correlated very well with our pressure bomb readings. Throughout the season, we found that we could trust the FloraPulse system and eliminate the need for the time intensive pressure bomb measurements. One benefit that I hadn't considered is the real-time nature of FloraPulse. Not only could we see the stress at one point in the day, but we could see the whole cycle of stress the tree experienced throughout the day, every day. \n I hope to expand our use of FloraPulse to other orchards to get better, more real-time data on tree stress and to reduce the labor required for our old method of pressure bomb readings.",
  },
  {
    imageSrc: "/testy2.webp",
    name: "Andres Olivos",
    title: "Olivos Riego Rengo, Chile",
    testimonialText:
      "The data we received from the FloraPulse sensors in prune fits the pressure chamber measurements and has proven very useful. Having daily water potential measurements has allowed us to decrease water use by 45%, to save on water pumping costs, drying costs and increase our fruit size and dry weight yields.",
  },
  {
    imageSrc: "/testy3.webp",
    name: "Rod Chamberlain",
    title: "Wong Farms Mecca, California ",
    testimonialText:
      "I am very happy with the FloraPulse unit. I grow a rare mango crop, in a desert environment with extremely high summer temperatures, in alluvium soil that has very limited water holding capacity. I had been using soil moisture measurement units but was always nervous that the soil moisture information isn’t completely indicative of the requirements of the mango trees, particularly when we get in the 115 to 120 °F temperature range. We had four separate high temperature incidences this last summer that lasted 3 to 5 days each and using the FloraPulse information I modified the irrigation frequency, run time, or added an extra irrigation cycle to meet the needs of the trees. \n I am currently tracking about an additional 10% annual water use reduction which I attribute to the use of the FloraPulse unit.",
  },
];
