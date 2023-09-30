import img from '../images/avatar.png';
import Image from 'next/image'
import { RainbowHighlight } from './RainbowHighlight';

export default function Hero() {
    return (
        <div className="px-2 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-5 gap-x-5">
            {/* Social Buttons */}
            <div className="inline-flex flex-col" style={{ zIndex: 2000 }}>
                <div className="basis mx-auto text-center md:text-left lg:p-0">
                    <div>
                        <p className="leading-loose italic text-xl md:text-3xl font-normal font-mono  mx-4">
                            Hey, I&apos;m
                        </p>
                        <h1 className="text-6xl drop-shadow-lg md:text-9xl font-bold text-gray-700 dark:text-gray-200 my-2">
                            Midhun
                        </h1>
                        <h1 className="text-3xl drop-shadow-lg md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                            {/* <RoughNotationGroup show={true}> */}
                            <RainbowHighlight color={'#84CC16'}>
                                Soudamini
                            </RainbowHighlight>
                            {/* </RoughNotationGroup> */}
                        </h1>
                        <h1 className="text-5xl drop-shadow-lg md:text-9xl font-bold text-gray-700 dark:text-gray-200 my-2">
                            Madhavan
                        </h1>
                    </div>
                    <div className='hidden' style={{ width: '100%', borderBottom: '1px dotted gray' }}></div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2">
                <Image src={img} alt="My photo here" className=" bg-stone-500 shadow-lg shadow-stone-500/50 md:shadow-teal-500/50 rounded-tl-lg rounded-tr-lg md:rounded-tr-lg shadow" />
                <div className="flex flex-row justify-between -mt-10">
                    <div className="flex flex-row shadow-2xl space-x-4">
                        <p className="font-mono" style={{ background: 'orange' }}>&nbsp;I do look like this... at times!&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
    );
};