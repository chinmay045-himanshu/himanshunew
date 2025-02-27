export default function Projects() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="text-xl font-bold">Responsive Portfolio Website</h3>
          <p className="mt-2">A personal portfolio website to showcase my projects and skills.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="text-xl font-bold">E-commerce Platform Design</h3>
          <p className="mt-2">User-friendly design for an e-commerce platform focusing on UX.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="text-xl font-bold">Network Deployment Automation Script</h3>
          <p className="mt-2">A Python script to automate network deployment tasks.</p>
        </div>
      </div>
    </section>
  );
}
