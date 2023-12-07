import {getProjects, getBackground, getCarousel} from '@/sanity/sanity-utlis'
import background from '@/sanity/schemas/background-schema';
import Image from 'next/image'
import Image1 from './assest/image1.png'
import { Carousel } from 'react-responsive-carousel';

export default async function Home() {

  const projects = await getProjects();

  return (
    // <div className='max-w-5xl mx-auto'>
    //   <h1 className='text-7xl font-extrabold'><span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent' >Lotus Glades</span></h1>

    //   <p className='mt-3 text-xl text-gray-600'>
    //     We are lotus glades
    //   </p>

    //   {/* <h2 className='mt-24 font-bold text-gray-700 text-3xl'>Projects</h2>
    //   {projects.map((project)=>(
      
    //   <div key={project._id} className='border border-gray-500 rounded-lg'>
        
    //     {project.image && (

    //       <Image 
    //         src = {project.image}
    //         alt = {project.alt}
    //         width = {250}
    //         height= {100}
    //         className = "object-cover rounded-lg border-gray-500"
    //       />

    //     )}

    //     <div className='font-extrabold gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>{project.name}</div>
    //   </div>
    // ))} */}

    // <div>
    // </div>

    // </div>
    <div className='body'>
      {/* nav starts */}
      <div className='nav sticky top-0 flex justify-center items-center h-[80px]'>
        <div className='nav_logo bg-black w-[80px] h-[80px] z-10'>
          logo
        </div>
      </div>
      {/* nav ends */}

      {/* hero section starts */}
      <div className='landing h-screen flex justify-center items-center flex-col relative md:justify-start'>
        
        <div className='landing_content h-[100%] w-[100%]'>
          
          {/* //main title */}

          <div className='landing_content_title h-[40%] text-[30px] flex justify-center items-center text-center font-bold md:text-[100px]'>
            A Mindset of Abundance
          </div>
          {/* main title ends */}


          {/* //slider starts here */}
          
          <div className='landing_content_slider h-[60%] w-[100%] flex flex-col md:flex-row justify-center items-center md:justify-start lg:justify-start'>
            
            {/* //slider text */}
            <div className='landing_content_slider_text w-[100%] flex justify-center items-center flex-col px-[10%] mb-[8px] md:items-start md:w-[30%] md:px-[5%]'>
              <div className = 'landing_content_slider_text-1 my-[33px] text-[20px] text-bold text-center md:text-left md:text-[40px] md:w-[70%]'>
                THE WORLD OF LUXURY
              </div>
              <div className=' landing_content_slider_text-2 text-center md:text-left'>
              Unlock the perfect living experience by exploring a 
              diverse selection of homes
              </div>
            </div>
            {/* //slider text ends */}

            {/* //slider carousel starts here */}
            <div className='landing_slider_carousel h-[240px] w-full flex flex-row md:w-[70%]'>
              {/* <Carousel/> */}
              <Image src='/assets/image1.png' width={360} height={240} alt="pic1" className='bg-gray-300 px-2 z-0'/>
              {/* <Image src='/assets/image2.png' width={360} height={240} alt="pic2" className='bg-gray-400 px-2'/> */}
              {/* <Image src='/assets/image2.png' width={360} height={240} alt="pic2" className='bg-gray-400 px-2'/> */}
            </div>
            {/* //slider carousel ends here */}
            
          </div>

          {/* //slider ends here  */}
        </div>
      </div>

      {/* //hero section ends here */}

      {/* discover section */}
      <div className='discover h-screen flex justify-center items-center flex-col px-10 bg-slate-600'>

        <div className='discover_content '>
          <div className='discover_content_text flex flex-col lg:flex-row'>

            <div className='discover_content_text-title font-bold text-[40px]'>
              Discover
            </div>

            <div className='discover_content_text-para text-[13px]'>
            This exquisite property provides a contemporary and cozy escape, accommodating up to four guests with ease
            </div>

          </div>
          <div className='discover_content_button mt-[32px] mb-[32px] bg-white rounded-md w-fit px-[38px] py-[15px] text-[13px] '>
            <a href="#">Explore</a>
          </div>
          <Image src='/image1.png' width={330} height={410} alt='pic' className='discover_content_image bg-white'/>
          {/* <div className='discover-content_image bg-white'> */}
          {/* </div> */}
        </div>
      </div>
      {/* discover section ends here */}

      {/* featured section */}
      <div className='featured flex justify-center items-center flex-col h-2/4 bg-gray-400'>
        <div className='featured-title'>FEATURED IN</div>
        <div className='featured-img flex flex-row px-2 h-1/4'>
          <div>img1</div>
          <div>img2</div>
        </div>
      </div>
      {/* featured section ends here */}


      <div className='img h-screen flex justify-center items-center bg-gray-600'>
        img
      </div>

      <div className='cards flex flex-col px-10 my-20 bg-gray-300'>
        <div className='cards-text'>
          <div className='cards-text_title text-3xl text-bold'>Uncover your perfect living spaces</div>
          <div className='cards-text_subtext'>Unlock the perfect living experience by exploring a diverse selection of home</div>
          <div className='discover-content_button bg-slate-200 rounded-md w-fit mt-2 py-2 px-4'>
            <a href="#">Explore</a>
          </div>
        </div>
        <div className='cards-list h-fit flex flex-col md:flex-row justify-center items-center mt-4'>
          {/* card 1 */}
          <div className='cards-list_card bg-white my-4 mx-4 rounded-xl'>
            <div className='mx-4'>

            <div className='cards-list_card_img bg-gray-200 my-4 rounded-xl'>
              img
            </div>
            <div className='my-4'>
              Grand Residence with Cozy Ambience
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                Location
              </div>
              <div>
                Austin
              </div>
            </div>
            <div className='border-t-2 border-gray-100'></div>
            <div className='flex flex-row justify-between'>
              <div className=''>
                Price
              </div>
              <div className=''>
                $ 890,000
              </div>
            </div>
            </div>

            <div className='m-2'>
              <div className='bg-gray-200 flex justify-center items-center py-2'>
              Details
              </div>
            </div>

          </div>
          {/* card 1 ends here */}
          
          {/* card 2 starts */}
          <div className='cards-list_card bg-white my-4 mx-4 rounded-xl'>
            <div className='mx-4'>

            <div className='cards-list_card_img bg-gray-200 my-4 rounded-xl'>
              img
            </div>
            <div className='my-4'>
              Grand Residence with Cozy Ambience
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                Location
              </div>
              <div>
                Austin
              </div>
            </div>
            <div className='border-t-2 border-gray-100'></div>
            <div className='flex flex-row justify-between'>
              <div className=''>
                Price
              </div>
              <div className=''>
                $ 890,000
              </div>
            </div>
            </div>

            <div className='m-2'>
              <div className='bg-gray-200 flex justify-center items-center py-2'>
              Details
              </div>
            </div>

          </div>
          {/* card 2 ends */}

          {/* card 3 starts */}
          <div className='cards-list_card bg-white my-4 mx-4 rounded-xl'>
            <div className='mx-4'>

            <div className='cards-list_card_img bg-gray-200 my-4 rounded-xl'>
              img
            </div>
            <div className='my-4'>
              Grand Residence with Cozy Ambience
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                Location
              </div>
              <div>
                Austin
              </div>
            </div>
            <div className='border-t-2 border-gray-100'></div>
            <div className='flex flex-row justify-between'>
              <div className=''>
                Price
              </div>
              <div className=''>
                $ 890,000
              </div>
            </div>
            </div>

            <div className='m-2'>
              <div className='bg-gray-200 flex justify-center items-center py-2'>
              Details
              </div>
            </div>

          </div>
          {/* card 3 ends here */}
        </div>


        <div className='flex justify-center items-center'>
          <div className='bg-gray-200 p-4 w-fit rounded-lg mt-5'>
            Explore listings
          </div>
        </div>
      </div>

      <div className='community mx-10 h-screen bg-gray-300'>

        <div className='flex flex-col'>

          <div className='text-bold text-3xl'>
            MEET THE COMMUNITY
          </div>
          <div>
            Celebrates extraordinary design to an inspired community.
          </div>

        </div>
        <div className='w-fit p-4 px-8 rounded-md bg-gray-200 my-4'>
          Join Community
        </div>

        <div>
          
        </div>

      </div>

      <div className='img h-screen flex justify-center items-center bg-gray-600'>
        img
      </div>

      <div className='h-screen flex flex-col bg-gray-500 justify-center items-center'>
        <div className='text-bold text-3xl'>#LIVINPLUS</div>
        <div className='flex flex-row bg-white p-2'>
          <div>icon</div>
          <div>
          Follow us on instagram
          </div>
        </div>
        <div className='flex flex-row'>
            <div className=' mx-2 my-10 w-fit bg-slate-50'>
              img
            </div>
            <div className=' mx-2 my-10 w-fit bg-slate-50'>
              img
            </div>
            <div className=' mx-2 my-10 w-fit bg-slate-50'>
              img
            </div>
        </div>
      </div>

      <div className='footer mx-10 h-full'>
        <div className='my-10'>

        <div className='text-bold text-3xl'>
          LIVIN+
        </div>
        
        <div className='my-8'>
          Are you ready to take your real estate business to the next level ? We have an exciting proposition for you! Our cutting-edge real estate website template is designed to transform your online presence and supercharge your success in the competitive real estate market.
        </div>

        <div className='my-8'>
        All the graphical images being used have been sourced from two specific platforms: Unsplash and Pexels
        </div>

        <div>
        LINKS
        </div>
        <div>
          <div>
            Listings
          </div>
          <div>
            About
          </div>
          <div>
            Services
          </div>
          <div>
            contact
          </div>
          <div>
            community
          </div>
        </div>
        </div>


      <div>
        PROPERTY
      </div>
      <div>
        <div>
          cozy grand residence
        </div>
        <div>
        cityscape haven
        </div>
        <div>
          notting hill london
        </div>
        <div>
          tranquil house
        </div>
      </div>        

      <div className=''>
        Design & build by PixelCanine Studio
      </div>
      </div>

    </div>
  );
}
