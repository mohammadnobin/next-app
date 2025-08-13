import Link from "next/link";

const ServicesPage = () => {
  const data = [
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
    {
      id: 8,
      title: "Photography",
      description: "Professional photography for events and products.",
      price: 350,
      category: "Media",
    },
    {
      id: 9,
      title: "UI/UX Design",
      description: "User interface and user experience design for apps.",
      price: 450,
      category: "Design",
    },
    {
      id: 10,
      title: "Cybersecurity Audit",
      description: "Security assessment and penetration testing services.",
      price: 600,
      category: "IT",
    },
  ];

  return (
<div className="p-10 bg-gray-100 min-h-screen">
  <h1 className="text-4xl font-bold uppercase text-center mb-10">
    Services Page
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {data.map((d) => (
      <div
        key={d.id}
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-2">{d.title}</h2>
          <p className="text-gray-600 mb-4">{d.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">${d.price}</span>
            <span className="text-sm text-gray-500">{d.category}</span>
          </div>
        </div>
        <Link href={`/services/${d.id}`}>
        <button
          className="mt-auto bg-black hover:bg-black/90 cursor-pointer text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
          >
          Details
        </button>
          </Link>
      </div>
    ))}
  </div>
</div>

  );
};

export default ServicesPage;
