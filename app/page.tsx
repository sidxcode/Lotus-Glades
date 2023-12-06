import {getProjects} from '@/sanity/sanity-utlis'

export default async function Home() {

  const projects = await getProjects();

  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='text-7xl font-extrabold'>Lotus Glades</h1>

      {projects.map((project)=>(
      
      <div key={project._id}>
        {project.name}
      </div>

    ))}

    </div>
  );
}
