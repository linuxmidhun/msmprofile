import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import { RainbowHighlight } from '@/components/RainbowHighlight';
import { GetServerSideProps } from 'next';
import { RoughNotationGroup } from 'react-rough-notation';

const index = () => {
    return (
        <ContainerBlock>
            <section className="bg-white -mt-10 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto h-60 bg-white text-center md:text-left dark:bg-gray-800">
                    <p className="leading-loose shadow-text italic text-xl md:text-3xl font-normal text-gray-700 px-5 dark:text-gray-200 font-mono  mx-1">
                        I&apos;m
                    </p>
                    <h1 className=" text-5xl md:text-8xl text-gray-700 dark:text-gray-200 font-bold py-2 px-5 text-center leading-tight md:text-left">
                        Midhun Soudamini Madhavan.
                    </h1>
                </div>
            </section>
            {/* <Hero /> */}
            <div className="bg-[#F1F1F1] -mt-20 dark:bg-gray-900">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <div className='h-10 md:h-5'></div>
                    <p
                        className="text-xl md:text-3xl font-semibold leading-loose  mx-4"
                    >
                        An artist, software engineer &amp; a technology trainer.
                    </p>
                </div>
            </div>
            <div className="bg-[#F1F1F1] -mt-20 dark:bg-gray-900">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    {/* <br /><br /> */}
                    {/* <p
                        className="leading-loose text-3xl md:text-4xl font-semibold  mx-4"
                        style={{ lineHeight: "3rem" }}
                    >
                        An <RoughNotationGroup show={true}><RainbowHighlight color={'#F59E0B'}><span style={{ padding: '15px' }}>artist</span></RainbowHighlight></RoughNotationGroup>&nbsp;, <RoughNotationGroup show={true}><RainbowHighlight color={'#10B981'}><span style={{ padding: '15px' }}>software engineer</span></RainbowHighlight></RoughNotationGroup> &amp; a <RoughNotationGroup show={true}><RainbowHighlight color={'#3B82F6'}><span style={{ padding: '15px' }}>technology trainer</span></RainbowHighlight></RoughNotationGroup>.
                    </p> */}
                    {/* <p
                        className="leading-loose text-3xl md:text-4xl font-semibold  mx-4"
                        style={{ lineHeight: "3rem" }}
                    >
                        An <span style={{ background: '#F59E0B', padding: '3px 5px' }}>artist</span>, <span style={{ background: '#10B981', padding: '3px 5px' }}>software engineer</span> & a <span style={{ background: '#3B82F6', padding: '3px 5px' }}>technology trainer</span>.
                    </p> */}
                    <br />
                    <p
                        className="text-lg font-sans text-gray-500 mx-4 dark:text-gray-300"
                        style={{ lineHeight: "1.5rem" }}
                    >
                        <span className='text-3xl font-serif italic font-black'>For</span> more than a decade I was a part the <a href='https://en.wikipedia.org/wiki/Information_technology' className='underline decoration-dotted' target='_blank'>Information Technology Industry&nbsp;<svg fill='currentColor' style={{ display: 'inline-block', width: '1em', height: '1em' }}
                            viewBox="0 0 50 50">
                            <path d="M36 24c-1.2 0-2 0.8-2 2v12c0 1.2-0.8 2-2 2h-22c-1.2
0-2-0.8-2-2v-22c0-1.2 0.8-2 2-2h12c1.2 0 2-0.8 2-2s-0.8-2-2-2h-12c-3.4
0-6 2.6-6 6v22c0 3.4 2.6 6 6 6h22c3.4 0 6-2.6
6-6v-12c0-1.2-0.8-2-2-2z"></path>
                            <path d="M43.8 5.2c-0.2-0.4-0.6-0.8-1-1-0.2-0.2-0.6-0.2-0.8-0.2h-12c-1.2
0-2 0.8-2 2s0.8 2 2 2h7.2l-18.6 18.6c-0.8 0.8-0.8 2 0 2.8 0.4 0.4 0.8
0.6 1.4 0.6s1-0.2 1.4-0.6l18.6-18.6v7.2c0 1.2 0.8 2 2 2s2-0.8
2-2v-12c0-0.2 0-0.6-0.2-0.8z"></path>
                        </svg></a> as a software engineer and programmer. When in the job, I  was privileged being part of  many path-breaking software solutions which helped the general public directly or indirectly. Most of those software solutions were solving travel and transportation problems.
                    </p>
                    <br />
                    <p
                        className="text-lg font-sans text-gray-500 mx-4 dark:text-gray-300"
                        style={{ lineHeight: "1.5rem" }}
                    >
                        <span className='text-2xl font-serif italic font-black'>After</span> those eventful years as an engineer I took a turn and started as an art enthusiast <code className='font-mono text-sm'>(which I was, from the beginning of time)</code>, wrote some short stories, screenplays, songs, worked as an actor in some short/feature films & serieses, and directed a couple of short-films. But I never wanted to quit my journey as a technologist. So I started mentoring and grooming technology start ups and teaching technology to who ever is keen and eager to learn it.
                    </p>
                    <br />
                    <p
                        className="text-lg font-sans text-gray-500 mx-4 dark:text-gray-300"
                        style={{ lineHeight: "1.5rem" }}
                    >
                        &#9679;&#9679;&#9679;
                    </p>
                    <br />
                    <p
                        className="text-lg font-sans text-gray-500 mx-4 dark:text-gray-300"
                        style={{ lineHeight: "1.5rem" }}
                    >
                        “Tell me and I forget, teach me and I may remember, involve me and I learn.”<b> - Benjamin Franklin.</b>
                        {/* Here with this website you may know little something about me. Happy Happy!&#128578; */}
                    </p>
                </div>
            </div>
        </ContainerBlock>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {

        }
    }
}

export default index