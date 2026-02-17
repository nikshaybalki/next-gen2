// // src/data/coursesData.js
// export const allCourses = [
//   {
//     id: "viral-blueprint",
//     title: "Creating Viral Content (CVC)",
//     edition: "Premium Edition",
//     description: "The 2026 Blueprint to Mastering Retention and Building a 7-Figure Digital Brand.",
//     subText: "Master the 'Virality Equation' that combines psychology, data-driven storytelling, and cinematic production.",
//     stats: { hours: "12.5+ Hours", chapters: "15 Chapters", language: "Hindi" },
//     impact: { instagram: "1.2M+", youtube: "6.91M+", linkedin: "75k+" },
//     image: "/course1.jpg" // Path to your image in public folder
//   },
//   {
//     id: "ai-creator-pro",
//     title: "AI Creator Pro",
//     edition: "Elite Edition",
//     description: "Harness the power of Artificial Intelligence to automate your creative workflow.",
//     subText: "Learn to use Gen-AI tools to produce high-quality content in half the time.",
//     stats: { hours: "10+ Hours", chapters: "12 Chapters", language: "English" },
//     impact: { instagram: "500k+", youtube: "1.2M+", linkedin: "20k+" },
//     image: "/course2.jpg"
//   },
//     {
//     id: "monetization-mastery",
//     title: "Monetization Mastery",
//     edition: "Elite Edition",
//     description: "Harness the power of Artificial Intelligence to automate your creative workflow.",
//     subText: "Learn to use Gen-AI tools to produce high-quality content in half the time.",
//     stats: { hours: "10+ Hours", chapters: "12 Chapters", language: "English" },
//     impact: { instagram: "500k+", youtube: "1.2M+", linkedin: "20k+" },
//     image: "/course3.jpg"
//   },





// ];














// // src/data/coursesData.js
// export const allCourses = [
//   {
//     id: "viral-blueprint",
//     title: "Creating Viral Content (CVC)",
//     edition: "Premium Edition",
//     description: "The 2026 Blueprint to Mastering Retention and Building a 7-Figure Digital Brand.",
//     subText: "Master the 'Virality Equation' that combines psychology, data-driven storytelling, and cinematic production.",
//     stats: { hours: "12.5+ Hours", chapters: "15 Chapters", language: "Hindi" },
//     impact: { instagram: "1.2M+", youtube: "6.91M+", linkedin: "75k+" },
//     image: "/course1.jpg",
//     // Added methodology here as an example of nested data
//     methodology: {
//       title: 'Crack the Code of "The VK Show" Style',
//       features: [
//         {
//           title: "The Hook Matrix",
//           desc: "Learn the psychological triggers that stop the scroll instantly. We dissect the first 3 seconds of viral videos.",
//           icon: "MapPin"
//         },
//         {
//           title: "Cinematic Vlogging",
//           desc: "Production quality on a budget. Master lighting, composition, and color grading using just your smartphone.",
//           icon: "Camera"
//         },
//         {
//           title: "Decoding the Algorithm",
//           desc: "Stop guessing. Start calculating. Understand the metadata, watch time metrics, and engagement signals.",
//           icon: "TrendingUp"
//         }
//       ]
//     }
//   },
//   {
//     id: "ai-creator-pro",
//     title: "AI Creator Pro",
//     edition: "Elite Edition",
//     description: "Harness the power of Artificial Intelligence to automate your creative workflow.",
//     subText: "Learn to use Gen-AI tools to produce high-quality content in half the time.",
//     stats: { hours: "10+ Hours", chapters: "12 Chapters", language: "English" },
//     impact: { instagram: "500k+", youtube: "1.2M+", linkedin: "20k+" },
//     image: "/course2.jpg",
//      // Added methodology here as an example of nested data
//     methodology: {
//       title: 'Crack the Code of "The VK Show" Style',
//       features: [
//         {
//           title: "The Hook Matrix",
//           desc: "Learn the psychological triggers that stop the scroll instantly. We dissect the first 3 seconds of viral videos.",
//           icon: "MapPin"
//         },
//         {
//           title: "Cinematic Vlogging",
//           desc: "Production quality on a budget. Master lighting, composition, and color grading using just your smartphone.",
//           icon: "Camera"
//         },
//         {
//           title: "Decoding the Algorithm",
//           desc: "Stop guessing. Start calculating. Understand the metadata, watch time metrics, and engagement signals.",
//           icon: "TrendingUp"
//         }
//       ]
//     }
//   },
//   {
//     id: "monetization-mastery",
//     title: "Monetization Mastery",
//     edition: "Elite Edition",
//     description: "Learn the frameworks for turning views into high-ticket revenue streams.",
//     subText: "From brand deals to digital products—diversify your creator income.",
//     stats: { hours: "8+ Hours", chapters: "10 Chapters", language: "English" },
//     impact: { instagram: "300k+", youtube: "800k+", linkedin: "50k+" },
//     image: "/course3.jpg",
//      // Added methodology here as an example of nested data
//     methodology: {
//       title: 'Crack the Code of "The VK Show" Style',
//       features: [
//         {
//           title: "The Hook Matrix",
//           desc: "Learn the psychological triggers that stop the scroll instantly. We dissect the first 3 seconds of viral videos.",
//           icon: "MapPin"
//         },
//         {
//           title: "Cinematic Vlogging",
//           desc: "Production quality on a budget. Master lighting, composition, and color grading using just your smartphone.",
//           icon: "Camera"
//         },
//         {
//           title: "Decoding the Algorithm",
//           desc: "Stop guessing. Start calculating. Understand the metadata, watch time metrics, and engagement signals.",
//           icon: "TrendingUp"
//         }
//       ]
//     }
//   }
// ];



















// src/data/coursesData.js
export const allCourses = [
  {
    id: "viral-blueprint",
    title: "Creating Viral Content (CVC)",
    edition: "Premium Edition",
    description: "The 2026 Blueprint to Mastering Retention and Building a 7-Figure Digital Brand.",
    subText: "Master the 'Virality Equation' that combines psychology, data-driven storytelling, and cinematic production.",
    stats: { hours: "12.5+ Hours", chapters: "15 Chapters", language: "Hindi" },
    impact: { instagram: "1.2M+", youtube: "6.91M+", linkedin: "75k+" },
    image: "/course1.jpg",
    methodology: {
      title: 'Crack the Code of "The VK Show" Style',
      features: [
        { title: "The Hook Matrix", desc: "Learn the psychological triggers that stop the scroll instantly.", icon: "MapPin" },
        { title: "Cinematic Vlogging", desc: "Production quality on a budget using just your smartphone.", icon: "Camera" },
        { title: "Decoding the Algorithm", desc: "Understand metadata, watch time metrics, and engagement signals.", icon: "TrendingUp" }
      ]
    },
    pricing: {
      currentPrice: "₹9,999",
      originalPrice: "₹19,999",
      features: [
        "Private Discord Community",
        "50+ Viral Templates & Presets",
        "Weekly Live Channel Reviews",
        "Lifetime Access to Updates"
      ]
    },

    curriculum: [
      {
        chapter: "01",
        title: "The Psychology of Virality",
        lessons: [
          { name: "Why we share content", time: "10:45" },
          { name: "The Emotion Wheel", time: "05:30" },
          { name: "Case Study: 10M Views Breakdown", time: "15:20" }
        ]
      },
      {
        chapter: "02",
        title: "Advanced Storytelling Structures",
        lessons: [{ name: "The Hero's Hook", time: "12:00" }]
      },
      {
        chapter: "03",
        title: "Cinematography & Lighting",
        lessons: [{ name: "Mobile Cinema Secrets", time: "22:10" }]
      }
    ],
    testimonials: [
      {
        name: "Rahul S.",
        role: "Tech Reviewer",
        text: "I went from 200 views to 50k subscribers in just 3 months using the Hook Matrix. Vaibhav's approach to storytelling is unlike anything else on the market.",
        avatar: "/avatar1.jpg"
      },
      {
        name: "Priya M.",
        role: "Lifestyle Vlogger",
        text: "The production quality section alone was worth the price. My videos finally look professional and my retention rate has doubled.",
        avatar: "/avatar2.jpg"
      }
    ],
    certification: {
      title: "Official Certification Included",
      sub: "Validate your expertise with the NexGen industry-recognized certificate."
    },

    faqs: [
      { 
        question: "Do I need a high-end laptop/PC?", 
        answer: "No. All strategies taught in this masterclass can be executed using a modern smartphone. High-end gear is optional, not mandatory." 
      },
      { 
        question: "How long do I have access to the course?", 
        answer: "You get lifetime access to all current modules and all future updates. Algorithms change, and we update the course accordingly." 
      },
      { 
        question: "Does this include channel audits?", 
        answer: "Channel audits are exclusive to the Premium and Elite tiers during our weekly live sessions." 
      }
    ],
finalCTA: {
  heading: "Start Your Digital Legacy",
  subheading: "Stop consuming content and start creating it. Join the elite 1% of creators who understand the science of attention.",
  buttonText: "Claim Your Spot Now",
  mentorImage: "/course1.jpg" // Use a transparent PNG for the best effect
}

   
  },















  {
    id: "ai-creator-pro",
    title: "AI Creator Pro",
    edition: "Elite Edition",
    description: "Harness the power of Artificial Intelligence to automate your creative workflow.",
    subText: "Learn to use Gen-AI tools to produce high-quality content in half the time.",
    stats: { hours: "10+ Hours", chapters: "12 Chapters", language: "English" },
    impact: { instagram: "500k+", youtube: "1.2M+", linkedin: "20k+" },
    image: "/course2.jpg",
    methodology: {
      title: 'The AI-First Content Engine',
      features: [
        { title: "Prompt Engineering", desc: "Master text-to-video prompts for consistent characters.", icon: "MapPin" },
        { title: "Neural Narratives", desc: "Generate human-like voiceovers and AI music beds.", icon: "Camera" },
        { title: "Automated Workflows", desc: "Connect AI tools to edit videos while you sleep.", icon: "TrendingUp" }
      ]
    },
    pricing: {
      currentPrice: "₹7,499",
      originalPrice: "₹14,999",
      features: [
        "AI Tool Subscription Discounts",
        "Custom GPT Script Generator",
        "Automated Editing Workflow Kit",
        "Bi-Weekly AI Trend Reports"
      ]
    },
    curriculum: [
      {
        chapter: "01",
        title: "Introduction to Gen-AI",
        lessons: [
          { name: "The AI Creator Landscape", time: "08:20" },
          { name: "ChatGPT for Viral Hooks", time: "12:45" }
        ]
      },
      {
        chapter: "02",
        title: "Visual AI & Deepfakes",
        lessons: [{ name: "Midjourney Masterclass", time: "18:30" }]
      }
    ],

testimonials: [
      {
        name: "Rahul S.",
        role: "Tech Reviewer",
        text: "I went from 200 views to 50k subscribers in just 3 months using the Hook Matrix. Vaibhav's approach to storytelling is unlike anything else on the market.",
        avatar: "/avatar1.jpg"
      },
      {
        name: "Priya M.",
        role: "Lifestyle Vlogger",
        text: "The production quality section alone was worth the price. My videos finally look professional and my retention rate has doubled.",
        avatar: "/avatar2.jpg"
      }
    ],
    certification: {
      title: "Official Certification Included",
      sub: "Validate your expertise with the NexGen industry-recognized certificate."
    },

    faqs: [
      { 
        question: "Do I need a high-end laptop/PC?", 
        answer: "No. All strategies taught in this masterclass can be executed using a modern smartphone. High-end gear is optional, not mandatory." 
      },
      { 
        question: "How long do I have access to the course?", 
        answer: "You get lifetime access to all current modules and all future updates. Algorithms change, and we update the course accordingly." 
      },
      { 
        question: "Does this include channel audits?", 
        answer: "Channel audits are exclusive to the Premium and Elite tiers during our weekly live sessions." 
      }
    ],
    finalCTA: {
      heading: "YOUR JOURNEY TO 1 MILLION STARTS HERE.",
      subheading: "Don't let another year pass wishing you had started. The best time to build your personal brand is now.",
      buttonText: "REGISTER FOR CVC PREMIUM NOW",
      mentorImage: "/course2.jpg" // Use a professional cutout image here
    }

  },



















  {
    id: "monetization-mastery",
    title: "Monetization Mastery",
    edition: "Elite Edition",
    description: "Learn the frameworks for turning views into high-ticket revenue streams.",
    subText: "From brand deals to digital products—diversify your creator income.",
    stats: { hours: "8+ Hours", chapters: "10 Chapters", language: "English" },
    impact: { instagram: "300k+", youtube: "800k+", linkedin: "50k+" },
    image: "/course3.jpg",
    methodology: {
      title: 'The Revenue Multiplier System',
      features: [
        { title: "Brand Deal Funnels", desc: "Pitching strategies that land high-ticket sponsorships.", icon: "MapPin" },
        { title: "Product Ecosystems", desc: "Build digital assets once and sell them forever.", icon: "Camera" },
        { title: "Sales Psychology", desc: "Convert followers into high-paying customers.", icon: "TrendingUp" }
      ]
    },
    pricing: {
      currentPrice: "₹12,499",
      originalPrice: "₹24,999",
      features: [
        "Brand Deal Email Templates",
        "Media Kit Design Assets",
        "Creator Contract Templates",
        "Direct Access to Brand Managers"
      ]
    },
    curriculum: [
      {
        chapter: "01",
        title: "The Business of You",
        lessons: [
          { name: "Mindset of a Business Owner", time: "09:00" },
          { name: "Legal & Taxes for Creators", time: "14:15" }
        ]
      },
      {
        chapter: "02",
        title: "Sponsorship Secrets",
        lessons: [{ name: "The 'Yes' Pitch Deck", time: "20:00" }]
      }
    ],
    testimonials: [
      {
        name: "Rahul S.",
        role: "Tech Reviewer",
        text: "I went from 200 views to 50k subscribers in just 3 months using the Hook Matrix. Vaibhav's approach to storytelling is unlike anything else on the market.",
        avatar: "/avatar1.jpg"
      },
      {
        name: "Priya M.",
        role: "Lifestyle Vlogger",
        text: "The production quality section alone was worth the price. My videos finally look professional and my retention rate has doubled.",
        avatar: "/avatar2.jpg"
      }
    ],
    certification: {
      title: "Official Certification Included",
      sub: "Validate your expertise with the NexGen industry-recognized certificate."
    },

    faqs: [
      { 
        question: "Do I need a high-end laptop/PC?", 
        answer: "No. All strategies taught in this masterclass can be executed using a modern smartphone. High-end gear is optional, not mandatory." 
      },
      { 
        question: "How long do I have access to the course?", 
        answer: "You get lifetime access to all current modules and all future updates. Algorithms change, and we update the course accordingly." 
      },
      { 
        question: "Does this include channel audits?", 
        answer: "Channel audits are exclusive to the Premium and Elite tiers during our weekly live sessions." 
      }
    ],
    finalCTA: {
      heading: "YOUR JOURNEY TO 1 MILLION STARTS HERE.",
      subheading: "Don't let another year pass wishing you had started. The best time to build your personal brand is now.",
      buttonText: "REGISTER FOR CVC PREMIUM NOW",
      mentorImage: "/course3.jpg" // Use a professional cutout image here
    }

  }
];















