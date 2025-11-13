import React from "react";

const Skill: React.FC = () => {
  const skills = [
    {
      category: "Youtube Video Optimization",
      tools: [
        "Designed and optimized YouTube end screens to increase viewer retention and channel engagement",
        "Expert in linking the most relevant or high-performing videos/playlists to maximize watch time",
        "Combines end screen optimization with video SEO tactics to boost overall video performance",
      ],
    },
    {
      category: "SEO Tools",
      tools: [
        "Google Search Console",
        "Google Analytics (GA4)",
        "Ahrefs",
        "SEMrush",
        "Ubersuggest",
        "Yoast SEO",
        "Seoptimer",
        "Google Keyword Planner",
        "PageSpeed Insights",
        "Canva",
      ],
    },
    {
      category: "Ads Management",
      tools: ["Google Ads", "Meta Ads Manager"],
    },
    {
      category: "Website Platforms",
      tools: ["WordPress", "Shopify", "WooCommerce", "Google Sites"],
    },
    {
      category: "Design & Content Tools",
      tools: ["Canva", "Copywriting", "Content Strategy", "ChatGPT"],
    },
    {
      category: "Technical SEO",
      tools: [
        "HTML Basics",
        "PageSpeed Optimization",
        "Core Web Vitals (LCP, CLS, FID)",
        "Mobile SEO",
      ],
    },
  ];

  return (
    <div
      id="Skill"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
            Skills & Tools
          </p>
          <p className="py-6 text-gray-300">
            A complete stack of SEO, digital marketing, and content tools I use
            to deliver performance-driven results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {item.category}
              </h3>
              {Array.isArray(item.tools) ? (
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {item.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 leading-relaxed">{item.tools}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
