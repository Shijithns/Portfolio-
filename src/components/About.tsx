// import React from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

// const About: React.FC = () => {
//   return (
//     <div
//       id="About"
//       className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
//     >
//       <div className="max-w-screen-lg mx-auto px-4 py-16 flex flex-col justify-center">
//         {/* Header */}
//         <div className="pb-8">
//           <p className="text-5xl font-bold inline border-b-4 border-cyan-500">
//             About Me
//           </p>
//         </div>

//         {/* About Description */}
//         <div className="text-xl mt-10 mb-10 leading-relaxed space-y-6">
//           <p>
//             I’m <strong>Shijith Ns</strong>, a results-driven{" "}
//             <strong>Digital Marketing Executive & SEO Analyst</strong> with
//             hands-on experience in SEO, performance marketing, and website
//             optimization.
//           </p>

//           <p>
//             I specialize in improving Google rankings, optimizing Core Web
//             Vitals (LCP, FCP, CLS), and developing content strategies that
//             attract and convert audiences effectively.
//           </p>

//           {/* Highlights */}
//           <div className="bg-gray-900 p-6 rounded-xl shadow-md">
//             <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
//               Highlights
//             </h3>
//             <ul className="list-disc list-inside space-y-2">
//               <li>On-page & Off-page SEO expert</li>
//               <li>Google Ads & Meta Ads campaign strategist</li>
//               <li>Website performance optimizer</li>
//               <li>Content marketing & keyword planner</li>
//             </ul>
//           </div>

//           <p className="mt-6">
//             <strong>Goal:</strong> To help brands achieve digital excellence
//             through creativity, analytics, and technology.
//           </p>
//         </div>

//         {/* Education Section */}
//         <div className="mt-10 bg-gray-900 p-6 rounded-xl shadow-md">
//           <h3 className="text-3xl font-semibold mb-4 text-cyan-400">
//             Education
//           </h3>
//           <ul className="space-y-3 text-lg">
//             <li>
//               <strong>Professional Diploma in Digital Marketing</strong>
//             </li>
//             <li>
//               <strong>B.Com with Cooperation</strong> — 70%
//             </li>
//             <li>
//               <strong>+2 Science</strong> — 75%
//             </li>
//           </ul>
//         </div>

//         {/* Experience Section */}
//         <div className="mt-10 bg-gray-900 p-6 rounded-xl shadow-md">
//           <h3 className="text-3xl font-semibold mb-4 text-cyan-400">
//             Experience
//           </h3>
//           <div className="space-y-4 text-lg">
//             <div>
//               <p className="font-semibold text-white">
//                 Reporter Broadcasting Company
//               </p>
//               <p className="text-gray-300">SEO Analyst</p>
//             </div>
//             <div>
//               <p className="font-semibold text-white">SBC Technology</p>
//               <p className="text-gray-300">Digital Marketing Executive</p>
//             </div>
//             <div>
//               <p className="font-semibold text-white">Wipro</p>
//               <p className="text-gray-300">Service Desk Engineer</p>
//             </div>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <div className="mt-12">
//           <Link
//             to="Skill"
//             smooth
//             duration={500}
//             className="group text-white w-fit px-8 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
//           >
//             View My Expertise
//             <span className="group-hover:rotate-90 duration-300">
//               <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
//             </span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const About: React.FC = () => {
  return (
    <div
      id="About"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-16 flex flex-col justify-center">
        {/* Header */}
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-cyan-500">
            About Me
          </p>
        </div>

        {/* About Description */}
        <div className="text-xl mt-10 mb-10 leading-relaxed space-y-6">
          <p>
            I'm <strong>Shijith N S</strong>, a dedicated
            <strong> SEO Analyst & Digital Marketing Executive</strong> with
            hands-on experience in Search Engine Optimization, content strategy,
            website management, and digital advertising. My expertise spans
            across optimizing websites for better visibility, managing blogs,
            researching keywords, improving rankings, and handling ad campaigns
            across multiple platforms.
          </p>

          <p>
            Over the years, I've worked with leading media and technology
            companies, where I improved website performance, optimized content
            for Google News & Discover, managed banner ads, and increased
            overall organic traffic through strategic SEO and content planning.
            I focus on analytics-driven decision-making to enhance search
            visibility, brand reach, and digital growth.
          </p>

          {/* Highlights */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
              What I Do
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Complete SEO Management (On-page, Off-page & Technical)</li>
              <li>Content Strategy & SEO-optimized Blog Writing</li>
              <li>Google News & Discover Optimization for news portals</li>
              <li>Google AdSense & Banner Ad Management</li>
              <li>E-commerce SEO & Website Performance Optimization</li>
              <li>Keyword Research, Competitor Analysis & Reporting</li>
            </ul>
          </div>

          <p className="mt-6">
            <strong>Goal:</strong> To create data-driven SEO strategies that
            boost website authority, improve visibility, and maximize revenue
            through effective content and ad management.
          </p>
        </div>

        {/* Education Section */}
        <div className="mt-10 bg-gray-900 p-6 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold mb-4 text-cyan-400">
            Education
          </h3>
          <ul className="space-y-3 text-lg">
            <li>
              <strong>Professional Diploma in Digital Marketing</strong> — 2024
              (Techioras Digital Marketing Institute, Kochi)
            </li>
            <li>
              <strong>Diploma in Hardware & Networking</strong> — 2019 (Access6
              Technologies)
            </li>
            <li>
              <strong>B.Com with Cooperation</strong> — 70% (Kannur University,
              2019)
            </li>
            <li>
              <strong>+2 Science</strong> — 75% (TMHSS Vellora, 2016)
            </li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="mt-10 bg-gray-900 p-6 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold mb-4 text-cyan-400">
            Experience
          </h3>
          <div className="space-y-6 text-lg">
            <div>
              <p className="font-semibold text-white">
                Reporter Broadcasting Company (2025 - Present)
              </p>
              <p className="text-gray-300">Junior SEO Analyst</p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>
                  Managing SEO for Reporter Live, Kerala Reporter & The Black
                  Coffee
                </li>
                <li>Tracking traffic, impressions, CTR & keyword rankings</li>
                <li>
                  Writing SEO-optimized blogs & content for multiple brands
                </li>
                <li>Optimizing news articles for Google News & Discover</li>
                <li>Managing banner ads through Google Ad Manager & AdSense</li>
                <li>
                  Designed and optimized YouTube end screens to increase viewer
                  retention and channel engagement.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white">
                SBC Technology — Hilite Business Park (2024 - 2025)
              </p>
              <p className="text-gray-300">Digital Marketing Executive</p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>SEO, SMM, SEM & Content Marketing</li>
                <li>Affiliate & E-commerce Marketing</li>
                <li>Email, Mobile & Website Marketing</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white">
                Arise Medical Academy (2022 - 2023)
              </p>
              <p className="text-gray-300">Lead Generation Executive</p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Lead research, email campaigns & cold calling</li>
                <li>CRM management & sales coordination</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white">Wipro (2020 - 2022)</p>
              <p className="text-gray-300">Service Desk Engineer</p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Technical support for hardware, software & networks</li>
                <li>Incident management & ticket resolution</li>
                <li>System installation, configuration & troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            to="Skill"
            smooth
            duration={500}
            className="group text-white w-fit px-8 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            View My Expertise
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
