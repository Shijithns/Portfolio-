// import React from "react";
// import MernauthImage from "../projects/Mern Auth.png";
// import letweChat from "../projects/letweChat.png";
// import Grocery from "../projects/Grocery.png";
// import VidCom from "../projects/VidCom.png";
// const Works: React.FC = () => {
//   const WorkItems = [
//     {
//       title: "Green Cart",
//       description: "Grocery Ecommerce App",
//       imageUrl: Grocery,
//       websiteUrl: "https://grocery-frondend.vercel.app/",
//       githubUrl: "https://github.com/musthafa1991/Grocery_Ecommerce",
//     },
//     {
//       title: "VidCom",
//       description: "Video&Chat App",
//       imageUrl: VidCom,
//       websiteUrl: "https://vidcom-550y.onrender.com/",
//       githubUrl: "https://github.com/musthafa1991/VidCom",
//     },
//     {
//       title: "Let We Chat",
//       description: "Chat App",
//       imageUrl: letweChat,
//       websiteUrl: "https://letwechat-app.onrender.com",
//       githubUrl: "https://github.com/musthafa1991/letwechat-app",
//     },
//     {
//       title: "User Acitivity",
//       description: "User-Acitivity-Logging System",
//       imageUrl: MernauthImage,
//       websiteUrl: "https://useractivitylogs.netlify.app",
//       githubUrl: "https://github.com/musthafa1991/userActivityLogs-frontend",
//     },
//   ];

//   return (
//     <div
//       id="Works"
//       className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
//     >
//       <div className="max-w-screen-lg mx-auto p-4 text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Works
//           </p>
//           <p className="py-6">Check out some of my Works below</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12">
//           {WorkItems.map((item, index) => (
//             <div
//               key={index}
//               className="shadow-md shadow-gray-600 hover:scale-105 duration-500 py-2 rounded-lg bg-gray-800"
//             >
//               <a
//                 href={item.websiteUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={item.imageUrl}
//                   alt={item.title}
//                   className="w-60 h-auto mx-auto rounded-md cursor-pointer"
//                 />
//                 <h3 className="text-xl font-bold mt-4 hover:underline">
//                   {item.title}
//                 </h3>
//               </a>
//               <p className="text-gray-400 mt-2">{item.description}</p>
//               <div className="mt-4">
//                 <a
//                   href={item.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:text-blue-400 underline"
//                 >
//                   View Source Code on GitHub
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Works;

import React from "react";

const Works: React.FC = () => {
  const caseStudies = [
    {
      title: "Local SEO for Kerala-Based Business",
      results: [
        "Increased organic visits by 120% in 3 months.",
        "Improved Google Business visibility and backlinks.",
      ],
    },
    {
      title: "Meta Ad Campaign for E-commerce Brand",
      results: [
        "Achieved 2.8× ROI using audience targeting and creative optimization.",
      ],
    },
    {
      title: "Website Speed Optimization",
      results: [
        "Reduced LCP from 4.5s → 2.1s using CDN, image compression, and lazy load optimization.",
      ],
    },
  ];

  return (
    <div
      id="Works"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
            Portfolio / Case Studies
          </p>
          <p className="py-6 text-gray-300">
            Real-world digital marketing success stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {caseStudies.map((caseItem, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-cyan-500/30 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                {caseItem.title}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {caseItem.results.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
