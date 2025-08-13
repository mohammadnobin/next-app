import React from "react";

const ServiceDatilspage = async ({ params }) => {
  const FackData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Full-stack web application development using modern technologies.",
      price: 500,
      category: "IT",
    },
    {
      id: 2,
      title: "Graphic Design",
      description:
        "Creative and professional graphic design services for branding.",
      price: 200,
      category: "Design",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Improve your website ranking on search engines.",
      price: 300,
      category: "Marketing",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Android and iOS app development services.",
      price: 800,
      category: "IT",
    },
    {
      id: 5,
      title: "Content Writing",
      description: "High-quality content writing for blogs and websites.",
      price: 100,
      category: "Writing",
    },
    {
      id: 6,
      title: "Video Editing",
      description: "Professional video editing for social media and marketing.",
      price: 250,
      category: "Media",
    },
    {
      id: 7,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions.",
      price: 400,
      category: "Marketing",
    },
    // {
    //   id: 8,
    //   title: "Photography",
    //   description: "Professional photography for events and products.",
    //   price: 350,
    //   category: "Media",
    // },
    // {
    //   id: 9,
    //   title: "UI/UX Design",
    //   description: "User interface and user experience design for apps.",
    //   price: 450,
    //   category: "Design",
    // },
    // {
    //   id: 10,
    //   title: "Cybersecurity Audit",
    //   description: "Security assessment and penetration testing services.",
    //   price: 600,
    //   category: "IT",
    // },
  ];

    const { id } = await params;
    const data = FackData.find(d => d.id == id)
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-700 mb-6">{data.description}</p>

        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold text-blue-600">
            Price: ${data.price}
          </span>
          <span className="text-sm text-gray-500">{data.category}</span>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"

        >
          Book Service
        </button>
      </div>
    </div>
  );
};

export default ServiceDatilspage;
