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
    title: "PwC South East Asia Consulting",
    description: "Where human meets digital",
    url: "https://www.pwc.com/gx/en/services/consulting/south-east-asia-consulting.html",
    icon: "briefcase"
  },
  {
    id: "youtube",
    title: "Human-led, GenAI powered transformation",
    description: "How we work with our alliances to bring a human-led, tech-powered approach to deliver GenAI solution",
    url: "https://www.youtube.com/watch?v=3ofI0tzU9Gc",
    icon: "video"
  },
  {
    id: "youtube",
    title: "Automating business process model creation with GenAI",
    description: "From discovery to verified design, in 50% of the time",
    url: "https://www.youtube.com/watch?v=TkFJ31vVXZI",
    icon: "video"
  },
  {
    id: "youtube",
    title: "Generative AI powered product design",
    description: "To Transform your agile planning from a months-long process into single, productive day",
    url: "https://www.youtube.com/watch?v=VvRpvpUjEIg",
    icon: "video"
  },
  {
    id: "data",
    title: "PwC's Solution for Data and Cloud Transformation",
    description: "PwC's Solution for Data and Cloud Transformation",
    url: "https://pwcapac.sharepoint.com/:p:/r/sites/MY-GSD-0AK6FmEufywuHUk9PVA/_layouts/15/Doc.aspx?sourcedoc=%7BA7797E0E-CC23-4748-ABF6-6D3F8ACFC5E7%7D&file=PwC%E2%80%99s%20Solutions%20for%20Data%20and%20Cloud%20Transformation.pptx&action=edit&mobileredirect=true",
    icon: "cloud"
  },
  {
    id: "pdf",
    title: "Agentic AI – the new frontier in GenAI",
    description: "Agentic AI empowers autonomous, goal-driven agents to optimize workflows and drive innovation across industries",
    url: "https://www.pwc.com/m1/en/publications/documents/2024/agentic-ai-the-new-frontier-in-genai-an-executive-playbook.pdf",
    icon: "file"
  }
];