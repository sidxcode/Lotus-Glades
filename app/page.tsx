
import Image from 'next/image'
import Link from 'next/link';
import {getTests} from '@/sanity/sanity-utlis'
import { getBg } from '@/sanity/sanity-utlis';

import Image1 from './img/Image1.jpg'
import { Service1 } from './components/icons/Service1';
import { Service2 } from './components/icons/Service2';
import { Service3 } from './components/icons/Service3';

import { Fb } from './components/icons/Fb';
import { Insta } from './components/icons/Insta';
import { Twitter } from './components/icons/Twitter';
import { Linkedin } from './components/icons/Linkedin';
import { Whatsapp } from './components/icons/Whatsapp';

export default async function Home() {
    const tests = await getTests();
    const bg = await getBg();
    
    return (
      <div className='body bg-[#EFEAE7]'>
      
      {/* nav starts */}
      {/* <div className='nav sticky top-0 flex justify-center items-center h-[74px] bg-blue-200'>

      </div> */}
      {/* nav ends */}

      {/* <div className='border-t-2 border-black'></div> */}

      {/*hero starts*/}
      <div className='hero w-full px-[20px] h-screen bg-green-400 flex flex-col'>
        <div className='hero_img bg-slate-200'>
          {/* {bg.map ((bg)=> (
            <div key = {bg._id}>
              {bg.image && (
                <Image
                  src = {bg.image}
                  alt = {bg.alt}
                  height= {100}
                  width={100}
                />
              )}
            </div>
          ))} */}
  
          {/* <Image src = {Image1} alt = "asda" style={{height : '100%', width : '100%'}}/> */}

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
            )}
            {test.name}
          </div>

        ))}
      </div> */}

          {/* insert image from cms */}
          {/* <Image src= {Image1} alt='' style={{height : '100%' , width : '100%'}}/> */}
        </div>
        <div className='hero_text mt-[32px]'>
          <div style={{fontFamily : 'ClearfaceStd , sans-serif', fontWeight : 'bold', fontSize : '48px', letterSpacing : '-3%', lineHeight: '58px'}} className='hero_text-title'>
            A Mindset of Abundance
          </div>
          <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}} className='hero_text-body mt-[16px]'>
            Lotus Glades offers innovative opportunities for clients in Delhi&apos;s L-Zone as per our understanding of Delhi Masterplan 2041. With expertise in Land & Farmhouse, development, we provide high-end luxury living complying with the GDA policy and LDRA approved Farmhouses. Our land parcels in Jhatikra & Kanganheri (Delhi Pincode 110043) present an exceptional early-stage investment opportunity in approved Farmhouses.
          </div>
        </div>
      </div>
      {/* hero ends */}

      <div className='border-t-2 border-black my-[64px] mx-[20px]'></div>

      {/* featured starts here */}
      <div className='featured w-full px-[20px] flex flex-col lg:flex-row'>
        <div className='featured_text lg:w-[33%]'>
          <div style={{fontFamily : 'ClearfaceStd , sans-serif', fontWeight : 'bold', fontSize : '48px', letterSpacing : '-3%', lineHeight: '58px'}} className='featured_text-title'>
            Featured Projects
          </div>
          <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}} className='featured_text-body mt-[16px]'>
          Escape to charm and comfort in our featured farmhouses. Discover local treasures, embrace the simple life, and create memories that last a lifetime.
          </div>
        </div>
        <div className='mt-[32px] lg:ml-[32px]'>
          <div className='h-[193.5px] w-[350px] bg-slate-300'>
          <Image src= {Image1} alt='' style={{height : '100%' , width : '100%'}}/>
          </div>
        </div>
      </div>
      {/* featured ends here */}

      <div className='border-t-2 border-black my-[64px] mx-[20px]'></div>

      {/* case study starts */}
      <div className='CaseStudy px-[20px]'>
        <div className='CaseStudy_card flex flex-col lg:flex-row'>
          <div className='CaseStudy_card_image h-[261px] w-[350px] bg-blue-200'></div>

          <div className='CaseStudy_card_text mt-[32px]'>
              <div style={{fontFamily : 'ClearfaceStd , sans-serif', fontWeight : 'bold', fontSize : '48px', letterSpacing : '-3%', lineHeight: '58px'}} className='CaseStudy_card_text-title'>
                The Sunken Courtyard
              </div>
              <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}} className='CaseStudy_card_text-title mt-[16px]'>
              The Sunken Courtyard Farmhouse is a unique property located in a quiet village on the outskirts of Delhi. It features a traditional courtyard design with modern elements, offering a tranquil haven amidst the bustling city.
              </div>
              <div className='border-t-2 border-black my-[16px] md:w-[453px]'></div>

              <div className='CaseStudy_card_links w-full flex flex-row justify-evenly'>
                <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px' }} className='CaseStudy_card_links-link1'><a href='#'>Link1</a></div>
                <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px' }} className='CaseStudy_card_links-link2'><a href='#'>Link2</a></div>
              </div>
            <div className='CaseStudy_dots w-full flex flex-row justify-center my-[16px]'>
              <div className='CaseStudy_dots-dot1 h-[20px] w-[20px] bg-black rounded-xl mr-[8px]'></div>
              <div className='CaseStudy_dots-dot2 h-[20px] w-[20px] rounded-xl border-2 border-black mr-[8px]'></div>
              <div className='CaseStudy_dots-dot3 h-[20px] w-[20px] rounded-xl border-2 border-black'></div>
            </div>
          </div>
      </div>
          </div>
          
      {/* case study ends here */}

      <div className='border-t-2 border-black my-[64px] mx-[20px]'></div>

      {/* services start here */}
      <div  className='Services w-full px-[20px] '>
        <div style={{fontFamily : 'ClearfaceStd , sans-serif', fontWeight : 'bold', fontSize : '48px', letterSpacing : '-3%', lineHeight: '58px'}} className='Services_title text-center'>Our Services</div>
        <div className='Services_list mt-[32px] flex flex-col justify-center md:flex-row w-full'>

          <div className='Services_list-1 flex flex-col justify-center md:w-[30%] items-start md:mt-[32px] md:mr-[32px]'>
            <div className='Services_list-1_logo w-full flex justify-center'>
              <div className='Services_list-1_logo-svg w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex justify-center'>
                <Service1/>
              </div>
            </div>

            <div className='Services_list-1_text flex flex-col justify-center'>
              <div style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '28px', letterSpacing : '-3%'}} className='Services_list-1_text-title text-center'>Sale & Purchase</div>
              <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px', lineHeight : '140%' }} className='Sertext_list-1_text-body text-center'>Buy or sell your dream farmhouse with ease.
                  Expert agents, comprehensive services, personalized approach.
                  Market analysis, financing, legal support, and more.
                  Let's find your perfect farm escape.</div>
            </div>
          </div>

          <div className='Services_list-2 flex flex-col justify-center md:w-[30%] mt-[32px] md:mr-[32px]'>
          <div className='Services_list-2_logo w-full flex justify-center'>
            <div style={{height : 'auto' }} className='Services_list-1_logo flex justify-center w-[100px] h-[100px] md:w-[200px] md:h-[200px]'>
              <Service2/>
            </div>
          </div>
            <div className='Services_list-2_text flex flex-col justify-center'>
              <div style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '28px' , letterSpacing : '-3%'}} className='Services_list-1_text-title text-center'>Development & Construction</div>
              <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px', lineHeight : '140%' }} className='Sertext_list-1_text-body text-center'>Experienced team, expert planning, sustainable solutions.
              Turnkey services, high-quality construction, timely completion.
              From concept to reality, your farmhouse awaits.</div>
            </div>
          </div>

          <div className='Services_list-3 flex flex-col justify-center w-full md:w-[30%] mt-[32px]'>
          <div className='Services_list-3_logo w-full flex justify-center'>
            <div style={{height : 'auto' }} className='Services_list-1_logo w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex justify-center'>
              <Service3/>
            </div>
          </div>
            <div className='Services_list-3_text flex flex-col justify-center'>
              <div style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '28px', letterSpacing : '-3%'}} className='Services_list-1_text-title text-center'>Consulting & Management</div>
              <div style={{fontFamily: 'Apercu, sans-serif', fontSize : '16px', lineHeight : '140%' }} className='Sertext_list-1_text-body text-center'>Effortless living, worry-free enjoyment.
              Maintenance, landscaping, staff, security.
              Relax and unwind, your haven awaits.</div>
            </div>
          </div>          
        </div>
      </div>
      {/* services end here */}

      {/* footer starts here */}
      <div className='footer mt-[64px] bg-LotusPink w-full text-[#EFEAE7]'>

        <div className='footer_container pt-[32px]  px-[20px]'>
          
          <div style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '48px', lineHeight: '58px' , letterSpacing : '-3%'}} className='fotter_container-title text-[#EFEAE7] text-center font-bold'>Lotus Glades</div>
          
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


        <div className='footer_container2 mt-[64px] pb-[32px] mx-[20px] flex justify-center items-center flex-col'>
          <div className='footer_container2_socials  w-fit flex flex-col'>

            <div className='footer_container2_socials-top flex flex-row mb-[8px] w-full'>
              <Link href="/projects/123">
                <div className='footer_container2_socials-top-fb flex flex-row border-[1px] border-[#EFEAE7] w-fit rounded-[40px] py-[6px] px-[20px] mr-[8px]'>
                  <div className='footer_container2_socials-top-fb-icon h-[16px] w-[16px]'>
                    <Fb/>
                  </div>
                  <div style={{fontFamily : 'Apercu, sans-serif' , fontSize : '12px', lineHeight : '140%'}} className=' pl-[4px] footer_container2_socials-fb-name'>Facebook</div>
                </div>
              </Link>

              <Link href="/projects/123" className=''>
                <div className='footer_container2_socials-top-insta flex flex-row border-[1px] border-[#EFEAE7] w-fit rounded-[40px] py-[6px] px-[20px] mr-[8px]'>
                  <div className='footer_container2_socials-top-insta-icon h-[16px] w-[16px]'>
                    <Insta/>
                  </div>
                  <div style={{fontFamily : 'Apercu, sans-serif' , fontSize : '12px', lineHeight : '140%'}} className=' pl-[4px] footer_container2_socials-fb-name'>Instagram</div>
                </div>
              </Link>

              <Link href="/projects/123" className=''>
                <div className='footer_container2_socials-top-twitter flex flex-row border-[1px] border-[#EFEAE7] w-fit rounded-[40px] py-[6px] px-[20px] mr-[8px]'>
                  <div className='footer_container2_socials-top-twitter-icon h-[16px] w-[16px]'>
                    <Twitter/>
                  </div>
                  <div style={{fontFamily : 'Apercu, sans-serif' , fontSize : '12px', lineHeight : '140%'}} className=' pl-[4px] footer_container2_socials-fb-name'>Twitter</div>
                </div>
              </Link>

            </div>

            <div className='footer_container2_socials-bottom flex flex-row w-full justify-center'>

          <Link href="/projects/123" className=''>
            <div className='footer_container2_socials-bottom-linkedin flex flex-row border-[1px] border-[#EFEAE7] w-fit rounded-[40px] py-[6px] px-[20px] mr-[8px]'>
              <div className='footer_container2_socials-bottom-linkedin-icon h-[16px] w-[16px]'>
                <Twitter/>
              </div>
              <div style={{fontFamily : 'Apercu, sans-serif' , fontSize : '12px', lineHeight : '140%'}} className=' pl-[4px] footer_container2_socials-fb-name'>Linkedin</div>
            </div>
          </Link>

          <Link href="/projects/123" className=''>
            <div className='footer_container2_socials-bottom-whatsapp flex flex-row border-[1px] border-[#EFEAE7] w-fit rounded-[40px] py-[6px] px-[20px] mr-[8px]'>
              <div className='footer_container2_socials-bottom-whatsapp-icon h-[16px] w-[16px]'>
                <Whatsapp/>
              </div>
              <div style={{fontFamily : 'Apercu, sans-serif' , fontSize : '12px', lineHeight : '140%'}} className=' pl-[4px] footer_container2_socials-fb-name'>Whatsapp</div>
            </div>
          </Link>
            </div>
          </div>

          <div className='footer_container2_pixelcanine mt-[24px] w-full flex justify-center'>
            <div style={{fontFamily : 'Apercu , Inter, sans-serif' , fontSize : '12px'}}>Lotus Glades - Lovingly handcrafted by <span style={{fontWeight : 'bold'}}>Pixel Canine</span> </div>
          </div>
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
            )}
            {test.name}
          </div>

        ))}
      </div> */}
     
    </div>
  );
}