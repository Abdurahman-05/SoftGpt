'use client';

import { useState } from 'react';
import dashboard from '@/assets/dashboard/Vector.png'
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import PieChartComponent from '@/components/ui/pieChart';
import MyPieChart from '@/components/ui/pieChart';






export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex">
        <div className={`left bg-hero  transform transition-transform duration-500 ease-in-out z-40 border-r-[1px] border-gray-400  ${sidebarOpen ? 'w-64 translate-x-0' : 'w-24 translate-x-0'
          }`}>
          <div className="flex flex-col  items-center justify-center gap-3 ">
            <h1 className={`text-center font-extrabold text-secondery h-20 mt-[40px] mb-[27px]  ${sidebarOpen ? 'text-4xl' : 'text-3xl'} `}>Soft GPT</h1>

            <hr />

            {/* <div className=''>
              <img src={dashboard.src} alt="dashboard" />
              <div>dashboard</div>

            </div> */}
            <Button variant='primary' className={` flex pl-4 items-center gap-4 font-extrabold text-white rounded-lg ${sidebarOpen ? 'text-2xl w-3/4  h-16 ' : 'w-1/2 h-12'}`}>
              <img src={dashboard.src} alt="dashboard" />
              <div className={`font-extrabold ${sidebarOpen ? 'text-2xl' : 'hidden'}`}>dashboard</div>
            </Button>
            {/* <Button variant='primary' className={` flex pl-4 items-center gap-4 font-extrabold text-white w-3/4  h-16 rounded-lg ${sidebarOpen ? 'text-2xl' : 'text-xl'}`}>
              <img src={dashboard.src} alt="dashboard" />
              <div className={`font-extrabold ${sidebarOpen ? 'text-2xl' : 'text-xl'}`}>dashboard</div>
            </Button>
            <Button variant='primary' className={` flex pl-4 items-center gap-4 font-extrabold text-white w-3/4  h-16 rounded-lg ${sidebarOpen ? 'text-2xl' : 'text-xl'}`}>
              <img src={dashboard.src} alt="dashboard" />
              <div className={`font-extrabold ${sidebarOpen ? 'text-2xl' : 'text-xl'}`}>dashboard</div>
            </Button>
            <Button variant='primary' className={` flex pl-4 items-center gap-4 font-extrabold text-white w-3/4  h-16 rounded-lg ${sidebarOpen ? 'text-2xl' : 'text-xl'}`}>
              <img src={dashboard.src} alt="dashboard" />
              <div className={`font-extrabold ${sidebarOpen ? 'text-2xl' : 'text-xl'}`}>dashboard</div>
            </Button> */}
          </div>
        </div>

        <div className="right flex-1">
          {/* nav */}
          <div className='flex-1 w-full h-screen bg-hero flex-col  pl-24 pr-10 pt-9'>
            <div className="nav  h-6  w-full flex items-center px-2">
              <div className="left-nav mr-auto">
                <h1 className='text-primary font-extrabold text-2xl'>Dashboard</h1>
              </div>

              <div className="right-nav flex gap-1">
                <div className='w-4 h-4 rounded-full bg-black'></div>
                <div className='w-4 h-4 rounded-full bg-black'></div>
                <div className='w-4 h-4 rounded-full bg-black'></div>
              </div>
            </div>

            <div className="  mt-10 flex">
              <h1 className='text-2xl mr-auto font-semibold'>Good morning, Alexandra</h1>
              <div className="flex gap-2">
                <button className='bg-white'></button>
                <Button variant ='clicked' >Free plan</Button>
                <Button>Upgrade now</Button>
              </div>
            </div>
            <div className="card flex gap-2 pt-3 font-sans">
              <Card title='Total Queries Today' className='flex-1 max-h-[250px]'>

                <div className="text-5xl text-center font-extrabold text-primary w-full py-5" >75</div>
                <div className='text-[12px] font-semibold text-gray-300 '>Represents the total number of queries executed today across all AI tools.</div>
              </Card>
              <Card title='Average Response Time' className=' flex-1 max-h-[250px]'>

                <div className="text-6xl text-center font-extrabold text-primary w-full pt-5" >3</div>
                <div className=" text-center font-extrabold pb-5" >second</div>

                <div className='text-[12px] font-semibold text-gray-300 '>Represents the total number of queries executed today across all AI tools.</div>
              </Card>
              <Card title='Most Used AI Tool' className='flex-2 max-h-fit'>
                <div className="flex justify-between items-start">

                <ul className='pl-2 pt-5 text-[14px]'>
                  <li className='flex items-center gap-2'><div className="w-4 h-4 bg-[#db6ce6] rounded-full"></div>AI Coding</li>
                  <li className='flex items-center gap-2'><div className="w-4 h-4 bg-primary rounded-full"></div>AI Chat</li>
                  <li className='flex items-center gap-2'><div className="w-4 h-4 bg-secondery rounded-full"></div>AI Text Generator</li>
                  <li className='flex items-center gap-2'><div className="w-4 h-4 bg-gray-400 rounded-full"></div>AI Image Generator</li>
                </ul>

                <MyPieChart />
                </div>

              </Card>
              {/* <div className="flex-2 bg-white h-[150px] ">
              </div> */}
              {/* <div className="flex-1 bg-white h-[150px] ">
              <Card></Card>
              </div> */}

            </div>
            <div className="card flex gap-2 pt-3">
              <Card title='Average Response Time' className='max-w-[200px] max-h-[250px]'>

                <div className="text-6xl text-center font-extrabold text-primary w-full pt-5" >3</div>
                <div className=" text-center font-extrabold pb-5" >second</div>

                <div className='text-[12px] font-semibold text-gray-300 '>Represents the total number of queries executed today across all AI tools.</div>
              </Card>
              <Card title='Average Response Time' className='max-w-[200px] max-h-[250px]'>

                <div className="text-6xl text-center font-extrabold text-primary w-full pt-5" >3</div>
                <div className=" text-center font-extrabold pb-5" >second</div>

                <div className='text-[12px] font-semibold text-gray-300 '>Represents the total number of queries executed today across all AI tools.</div>
              </Card>
             
            </div>
            <h1 className='font-bold pt-2'>Tips & Updates:</h1>
            <div className="card flex gap-2 pt-3">
              <div className="flex-1 bg-white h-[40px] "></div>
              <div className="flex-1 bg-white h-[40px] "></div>
            </div>

          </div>
        </div>

      </div>

    </>
  );



}