import ContainerBlock from '@/components/ContainerBlock';
import userData from '@/constants/data';
import { GetServerSideProps } from 'next';

const artist = () => (
    <ContainerBlock>
        <section className="bg-white -mt-10 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-60 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-8xl text-gray-700 dark:text-gray-200 font-bold py-10 px-5 text-center leading-tight md:text-left">
                    Actor, Screenwriter, Lyricist, Director.
                </h1>
            </div>
        </section>
        <div className="bg-[#F1F1F1] -mt-20 dark:bg-gray-900">
            <div className="text-container max-w-6xl mx-auto pt-20">
                <div className='h-10 md:h-5'></div>
                <p
                    className="text-xl md:text-3xl font-semibold leading-loose  mx-4"
                >
                    I&apos;ve been really passionate of different forms of art from a long time, especially about the world of cinema.
                </p>
            </div>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
            <div className="pt-10 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                {/* Social Buttons */}
                <div className="inline-flex flex-col">
                    {/* Social Links */}
                    <h1 className="text-xl font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                        As an Artist I&apos;ve,
                    </h1>
                    <div className="mt-4 ml-4">
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                attended the acting workshops from <a href='https://www.thehindu.com/features/metroplus/the-science-behind-the-art/article8590461.ece' target='_blank' className='underline decoration-dotted'>ACTLAB - Actor&apos;s Training Laboratory, Cochin.</a>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                worked as an actor in a Malayalam feature film, many Malayalam short films and some Malayalam web serieses.
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                associated in the direction team for some Malayalam music videos and short films.
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                wrote screenplays for some Malayalam short films.
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                written and directed a couple of Malayalam short films.
                            </div>
                        </div>
                        <br />
                    </div>
                    <h1 className="text-xl font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                        Achievements
                    </h1>
                    <div className="mt-4 ml-4">
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                My short film directorial debut <a href='https://youtu.be/zPhGjOomcQk?si=LwxIU3cioUd_2PIP' target='_blank' className='underline decoration-dotted'>&quot;The Outsider&quot;</a> was selected as an official entry for <a href='https://www.oneearthawards.com/' target='_blank' className='underline decoration-dotted'>&quot;One Earth Awards - 2022&quot;.</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="h-1 w-full -mt-10 bg-white md:hidden dark:bg-gray-700"></div> */}
                <div className="col-span-1 md:col-span-2">
                    <h1 className="text-xl font-semibold text-gray-700 py-5 -mt-20 md:-mt-2 dark:text-gray-200">
                        My acting showreel
                    </h1>
                    <div className=" group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-purple-200 dark:border-gray-700 w-full aspect-w-16 aspect-h-9 shadow-violet-900">
                        <iframe width="100%" className='h-56 md:h-96 rounded-xl' src="https://www.youtube.com/embed/EufxNy0OZlA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    {/* <div className="h-0.5 w-full mt-2 bg-white dark:bg-gray-700"></div> */}
                    <h1 className="text-xl font-semibold text-gray-700 py-5 -mt-2 md:-mt-2 dark:text-gray-200">
                        My works
                    </h1>
                    <div className="hidden md:hidden flex flex-row justify-start items-left ">
                        <select>
                            <option value="all">All</option>
                            <option value="actor">Actor</option>
                            <option value="writer">Screenwriter</option>
                            <option value="lyricist">Lyricist</option>
                            <option value="director">Director</option>
                        </select>
                    </div>
                    <div className="hidden md:hidden flex flex-row justify-start items-left ">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Actor
                        </button>&nbsp;
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Screenwriter
                        </button>&nbsp;
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Lyricist
                        </button>&nbsp;
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Director
                        </button>&nbsp;
                    </div>
                    <br />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {userData.movies.map((item, index) => {
                            return (
                                <div key={index} className=" group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-purple-200 dark:border-gray-700 w-full aspect-w-16 aspect-h-9 shadow-violet-900">
                                    <iframe width="100%" className='h-56 md:h-76 rounded-tl-xl rounded-tr-xl' src={item.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                    <div className='px-2 py-2'>
                                        {/* <span className='text-lg font-bold text-gray-700 -mt-2 dark:text-gray-200'>{item.title}</span> */}
                                        <h1 className="text-xl font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                                            {item.title}
                                        </h1>
                                        <span className="text-md font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                                            {item.contentType}
                                        </span><br />
                                        <span className="text-sm font-normal text-gray-700 -mt-2 dark:text-gray-200">
                                            {item.activity}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </ContainerBlock>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props: {

        }
    }
}

export default artist