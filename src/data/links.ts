export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
}

export const links: LinkItem[] = [
  {
    id: "consulting",
    title: "Consulting",
    description: "Strategic business consulting services for your organization",
    url: "https://google.co.in",
    icon: "briefcase"
  },
  {
    id: "audit",
    title: "Audit & Assurance",
    description: "Independent audit and assurance services",
    url: "/audit",
    icon: "check-circle"
  },
  {
    id: "tax",
    title: "Tax",
    description: "Tax planning and compliance solutions",
    url: "/tax",
    icon: "calculator"
  },
  {
    id: "digital",
    title: "Digital Services",
    description: "Digital transformation and technology solutions",
    url: "/digital",
    icon: "smartphone"
  },
  {
    id: "risk",
    title: "Risk Assurance",
    description: "Manage business risks and enhance performance",
    url: "/risk",
    icon: "shield"
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description: "ESG strategy and reporting services",
    url: "/sustainability",
    icon: "leaf"
  },
  {
    id: "deals",
    title: "Deals",
    description: "M&A and transaction advisory services",
    url: "/deals",
    icon: "trending-up"
  },
  {
    id: "legal",
    title: "Legal",
    description: "Legal advice and services for your business",
    url: "/legal",
    icon: "scale"
  }
];