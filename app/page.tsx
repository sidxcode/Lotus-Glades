
import Image from 'next/image'
import {getTests} from '@/sanity/sanity-utlis'

// import Fb from './svg/fb.svg';


export default async function Home() {
    const tests = await getTests();

    
    return (
      <div className='body bg-[#EFEAE7]'>
      
      {/* nav starts */}
      <div className='nav sticky top-0 flex justify-center items-center h-[74px] bg-blue-200'>

      </div>
      {/* nav ends */}

      <div className='border-t-2 border-black'></div>

      {/*hero starts*/}
      <div className='hero w-full px-[20px]'>
        <div className='hero_img h-[517.5px] bg-slate-200'>
          {/* insert image from cms */}
        </div>
        <div className='hero_text mt-[32px]'>
          <div style={{fontFamily : 'ClearfaceStd , sans-serif', fontWeight : 'bold', fontSize : '48px', letterSpacing : '-3%', lineHeight: '58px'}} className='hero_text-title'>
            A Mindset of Abundance
          </div>
          <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}} className='hero_text-body mt-[16px]'>
            Lotus Glades offers innovative opportunities for clients in Delhi's L-Zone as per our understanding of Delhi Masterplan 2041. With expertise in Land & Farmhouse, development, we provide high-end luxury living complying with the GDA policy and LDRA approved Farmhouses. Our land parcels in Jhatikra & Kanganheri (Delhi Pincode 110043) present an exceptional early-stage investment opportunity in approved Farmhouses.
          </div>
        </div>
      </div>
      {/* hero ends */}

      <div className='border-t-2 border-black my-[64px] mx-[20px]'></div>

      {/* featured starts here */}
      <div className='featured w-full px-[20px]'>
        <div className='featured_text'>
          <div style={{fontFamily : 'ClearfaceStd , sans-serif', fontWeight : 'bold', fontSize : '48px', letterSpacing : '-3%', lineHeight: '58px'}} className='featured_text-title'>
            Featured Projects
          </div>
          <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}} className='featured_text-body mt-[16px]'>
          Escape to charm and comfort in our featured farmhouses. Discover local treasures, embrace the simple life, and create memories that last a lifetime.
          </div>
        </div>
        <div className='mt-[32px]'>
          <div className='h-[193.5px] w-[350px] bg-slate-300'>
          </div>
        </div>
       
      </div>
      {/* featured ends here */}

      <div className='border-t-2 border-black my-[64px] mx-[20px]'></div>

      {/* case study starts */}
      <div className='CaseStudy px-[20px]'>
        <div className='CaseStudy_card'>
          <div className='CaseStudy_card_image h-[261px] w-[350px] bg-blue-200'></div>
          <div className='CaseStudy_card_text mt-[32px]'>
            <div style={{fontFamily : 'ClearfaceStd , sans-serif', fontWeight : 'bold', fontSize : '48px', letterSpacing : '-3%', lineHeight: '58px'}} className='CaseStudy_card_text-title'>
              The Sunken Courtyard
            </div>
            <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}} className='CaseStudy_card_text-title mt-[16px]'>
            The Sunken Courtyard Farmhouse is a unique property located in a quiet village on the outskirts of Delhi. It features a traditional courtyard design with modern elements, offering a tranquil haven amidst the bustling city.
            </div>
          </div>
          <div className='border-t-2 border-black my-[16px]'></div>

          <div className='CaseStudy_card_links w-full flex flex-row justify-evenly'>
            <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px' }} className='CaseStudy_card_links-link1'><a href='#'>Link1</a></div>
            <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px' }} className='CaseStudy_card_links-link2'><a href='#'>Link2</a></div>
          </div>
        </div>
        <div className='CaseStudy_dots w-full flex flex-row justify-center my-[16px]'>
          <div className='CaseStudy_dots-dot1 h-[20px] w-[20px] bg-black rounded-xl mr-[8px]'></div>
          <div className='CaseStudy_dots-dot2 h-[20px] w-[20px] rounded-xl border-2 border-black mr-[8px]'></div>
          <div className='CaseStudy_dots-dot3 h-[20px] w-[20px] rounded-xl border-2 border-black'></div>
        </div>
      </div>
      {/* case study ends here */}

      <div className='border-t-2 border-black my-[64px] mx-[20px]'></div>

      {/* services start here */}
      <div  className='Services w-full px-[20px]'>
        <div style={{fontFamily : 'ClearfaceStd , sans-serif', fontWeight : 'bold', fontSize : '48px', letterSpacing : '-3%', lineHeight: '58px'}} className='Services_title text-center'>Our Services</div>
        <div className='Services_list mt-[32px] flex flex-col justify-center'>
          <div className='Services_list-1 flex flex-col justify-center'>
            <div className='Services_list-1_text flex flex-col justify-center'>
              <div style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '28px', lineHeight: '58px' , letterSpacing : '-3%'}} className='Services_list-1_text-title text-center'>Sale & Purchase</div>
              <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px', lineHeight : '140%' }} className='Sertext_list-1_text-body text-center'>Buy or sell your dream farmhouse with ease.
                  Expert agents, comprehensive services, personalized approach.
                  Market analysis, financing, legal support, and more.
                  Let's find your perfect farm escape.</div>
            </div>
          </div>

          <div className='Services_list-2 flex flex-col justify-center'>
            <div className='Services_list-2_text flex flex-col justify-center'>
              <div style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '28px', lineHeight: '58px' , letterSpacing : '-3%'}} className='Services_list-1_text-title text-center'>Development & Construction</div>
              <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px', lineHeight : '140%' }} className='Sertext_list-1_text-body text-center'>Experienced team, expert planning, sustainable solutions.
              Turnkey services, high-quality construction, timely completion.
              From concept to reality, your farmhouse awaits.</div>
            </div>
          </div>

          <div className='Services_list-2 flex flex-col justify-center'>
            <div className='Services_list-2_text flex flex-col justify-center'>
              <div style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '28px', lineHeight: '58px' , letterSpacing : '-3%'}} className='Services_list-1_text-title text-center'>Consulting & Management</div>
              <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px', lineHeight : '140%' }} className='Sertext_list-1_text-body text-center'>Effortless living, worry-free enjoyment.
              Maintenance, landscaping, staff, security.
              Relax and unwind, your haven awaits.</div>
            </div>
          </div>          
        </div>
      </div>
      {/* services end here */}

      {/* footer starts here */}
      <div className='footer mt-64 bg-LotusPink w-full text-[#EFEAE7]'>

        <div className='footer_container my-32  px-[20px]'>
          
          <div style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '28px', lineHeight: '58px' , letterSpacing : '-3%'}} className='fotter_container-title text-[#EFEAE7] text-center'>Lotus Glades</div>
          
          <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px' , lineHeight : '140%'}} className='footer_container_body mt-[24px] flex flex-row justify-between'>
            
            <div className='footer_container_body-links'>
              <div className='footer_container_body-links-home mb-[8px]'><a href='#'>Home</a></div>
              <div className='footer_container_body-links-about mb-[8px]'><a href='#'>About</a></div>
              <div className='footer_container_body-links-projects mb-[8px]'><a href='#'>Projects</a></div>
              <div className='footer_container_body-links-blog'><a href='#'>Blog</a></div>
            </div>
            
            <div className='footer_container-body-contacts'>
              <div className='footer_container-body-contacts-address mb-[8px]'>
                A-9, Khasra No. 371, 3rd Floor,<br/> Near Shiv Murti, Rangpuri,<br/> New Delhi - 110037
              </div>
              <div className='footer_container-body-contacts-number mb-[8px]'>
                +91 70421 10100
              </div>
              <div className='footer_container-body-contacts-mail mb-[8px]'>
                info@lotusglades.com
              </div>
            </div>
          </div>
        </div>
        <div className='footer_container2 mt-[64px] pb-[32px]'>
          <div className='footer_container2_socials'>
            <a href='#'>
            <div className='footer_container2_socials-fb'>
              <div className='footer_container2_socials-fb-icon'>
                {/* <Fb className = 'h-[20px] w-[20px]'/> */}
              </div>
              <div style={{fontFamily : 'Apercu, sans-serif' , fontSize : '12px', lineHeight : '140%'}} className='footer_container2_socials-fb-name'>Facebook</div>
            </div>
            </a>
          </div>
          <div>copyright</div>
        </div>
      </div>
      {/* footer ends here */}

      {/* <div className='h-screen'>
        <div>my tests go here</div>
        {tests.map ((test)=>(
          <div key={test._id}>
            {test.image && (
              <Image
                src={test.image}
                alt={test.alt}
                width={250}
                height={100}
                />
            )} */}
            {/* {test.name} */}
          {/* </div> */}

        {/* ))} */}
      {/* </div> */}
     
    </div>
  );
}