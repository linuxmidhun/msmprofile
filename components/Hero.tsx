import img from '../images/avatar.png';
import Image from 'next/image'
import userData from '@/constants/data';

export default function Hero() {
    const imgSouce = userData.avatarUrl;
    return (
        <div className=' home-topper'>
            {/*  */}
            <div className="px-2 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-5 gap-x-5 ">
                {/* Social Buttons */}
                <div className="inline-flex flex-col" style={{ zIndex: 2000 }}>
                    <div className="basis mx-auto text-center md:text-left lg:px-10">
                        <div>
                            <p className="leading-loose shadow-text italic text-xl md:text-3xl font-normal  text-gray-200 font-mono  mx-1">
                                Hello there, I&apos;m
                            </p>
                            <h1 className="text-6xl shadow-text drop-shadow-lg md:text-8xl font-bold text-gray-200  my-2">
                                {/* dark:text-gray-200 */}
                                Midhun
                            </h1>
                            <h1 className="text-3xl shadow-text drop-shadow-lg md:text-7xl font-bold text-gray-200 my-2">
                                {/* dark:text-gray-200 */}
                                Soudamini
                            </h1>
                            <h1 className="text-5xl shadow-text drop-shadow-lg md:text-8xl font-bold text-gray-200  my-2">
                                {/* dark:text-gray-200 */}
                                Madhavan
                            </h1>
                        </div>
                        <div className='hidden' style={{ width: '100%', borderBottom: '1px dotted gray' }}></div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2 -mt-20">
                    <Image src={img} alt="My photo here" className=" bg-stone-500 shadow-lg shadow-stone-500/50 md:shadow-teal-500/50 rounded-tl-lg rounded-tr-lg md:rounded-tr-lg shadow"/>
                    <div className="flex flex-row justify-between -mt-10">
                        <div className="flex flex-row shadow-2xl space-x-4">
                            <p className="font-mono" style={{ background: 'orange' }}>&nbsp;This is how I look... at times!&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};