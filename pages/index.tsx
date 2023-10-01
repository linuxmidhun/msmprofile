import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import { GetServerSideProps } from 'next';

const index = () => {
    return (
        <ContainerBlock>
            <Hero />
            <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <p
                        className="leading-loose text-3xl md:text-4xl font-semibold  mx-4"
                        style={{ lineHeight: "3rem" }}
                    >
                        An <span style={{ background: '#F59E0B', padding: '3px 5px' }}>artist</span>, <span style={{ background: '#10B981', padding: '3px 5px' }}>software engineer</span> & a <span style={{ background: '#3B82F6', padding: '3px 5px' }}>technology trainer</span>.
                    </p>
                    <br />
                    <p
                        className="text-lg font-sans text-gray-500 mx-4 dark:text-gray-300"
                        style={{ lineHeight: "1.5rem" }}
                    >
                        <span className='text-3xl font-serif italic font-black'>For</span> more than a decade I was a part the <a href='https://en.wikipedia.org/wiki/Information_technology' className='underline decoration-dotted' target='_blank'>Information Technology Industry</a> as a software engineer and programmer. When in the job, I  was privileged being part of  many path-breaking software solutions which helped the general public directly or indirectly. Most of those software solutions were solving travel and transportation problems.
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