import ContainerBlock from '@/components/ContainerBlock';
import { RainbowHighlight } from '@/components/RainbowHighlight';
import userData from '@/constants/data';
import { GetServerSideProps } from 'next';
import { RoughNotationGroup } from 'react-rough-notation';

const artist = () => (
    <ContainerBlock>
        <section className="bg-white -mt-10 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-60 bg-white  text-center md:text-left dark:bg-gray-800">
                <p className="leading-loose shadow-text italic text-xl md:text-3xl font-normal text-gray-700 px-5 dark:text-gray-200 font-mono  mx-1">
                    I&apos;m a
                </p>
                <h1 className=" text-5xl md:text-8xl text-gray-700 dark:text-gray-200 font-bold py-2 px-5 text-center leading-tight md:text-left">
                    Lyricist, Screenwriter, Actor  &amp; a Director.
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
        <div className="bg-[#F1F1F1] dark:bg-gray-900 px-5">
            <div className="pt-10 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                {/* Social Buttons */}
                <div className="inline-flex flex-col">
                    {/* Social Links */}
                    <RoughNotationGroup show={true}>
                        <RainbowHighlight color={'#84CC16'}>
                            <h1 className="font-semibold text-lg dark:text-gray-100" style={{ padding: '5px 10px', opacity: 0.8, color: 'white', background: 'purple' }}>
                                As an Artist I&apos;ve,
                            </h1>
                        </RainbowHighlight>
                    </RoughNotationGroup>
                    <div className="mt-4 ml-4">
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4 text-gray-500  dark:text-gray-300">&#x2584;</div>&nbsp;&nbsp;
                            <div className="text-sm text-gray-500 font-semibold relative overflow-hidden dark:text-gray-300">
                                attended the acting workshops from <a href='https://www.thehindu.com/features/metroplus/the-science-behind-the-art/article8590461.ece' target='_blank' className='underline decoration-dotted'>ACTLAB - Actor&apos;s Training Laboratory, Cochin. <svg fill='currentColor' style={{ display: 'inline-block', width: '1em', height: '1em' }}
                                    viewBox="0 0 50 50">
                                    <path d="M36 24c-1.2 0-2 0.8-2 2v12c0 1.2-0.8 2-2 2h-22c-1.2
0-2-0.8-2-2v-22c0-1.2 0.8-2 2-2h12c1.2 0 2-0.8 2-2s-0.8-2-2-2h-12c-3.4
0-6 2.6-6 6v22c0 3.4 2.6 6 6 6h22c3.4 0 6-2.6
6-6v-12c0-1.2-0.8-2-2-2z"></path>
                                    <path d="M43.8 5.2c-0.2-0.4-0.6-0.8-1-1-0.2-0.2-0.6-0.2-0.8-0.2h-12c-1.2
0-2 0.8-2 2s0.8 2 2 2h7.2l-18.6 18.6c-0.8 0.8-0.8 2 0 2.8 0.4 0.4 0.8
0.6 1.4 0.6s1-0.2 1.4-0.6l18.6-18.6v7.2c0 1.2 0.8 2 2 2s2-0.8
2-2v-12c0-0.2 0-0.6-0.2-0.8z"></path>
                                </svg></a>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4 text-gray-500  dark:text-gray-300">&#x2584;</div>&nbsp;&nbsp;
                            <div className="text-sm text-gray-500 font-semibold relative overflow-hidden dark:text-gray-300">
                                worked as an actor in a Malayalam feature film, many Malayalam short films and some Malayalam web serieses.
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4 text-gray-500  dark:text-gray-300">&#x2584;</div>&nbsp;&nbsp;
                            <div className="text-sm text-gray-500 font-semibold relative overflow-hidden dark:text-gray-300">
                                associated in the direction team for some Malayalam music videos and short films.
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4 text-gray-500  dark:text-gray-300">&#x2584;</div>&nbsp;&nbsp;
                            <div className="text-sm text-gray-500 font-semibold relative overflow-hidden dark:text-gray-300">
                                wrote screenplays for some Malayalam short films.
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row justify-start items-center ">
                            <div className="my-4 text-gray-500  dark:text-gray-300">&#x2584;</div>&nbsp;&nbsp;
                            <div className="text-sm text-gray-500 font-semibold relative overflow-hidden dark:text-gray-300">
                                written and directed a couple of Malayalam short films.
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                {/* <div className="h-1 w-full -mt-10 bg-white md:hidden dark:bg-gray-700"></div> */}
                <div className="col-span-1 md:col-span-2">
                    <h1 className="text-xl font-semibold text-gray-700 py-0 -mt-20 md:-mt-2 dark:text-gray-200">
                        My acting showreel
                    </h1>
                    <div className='py-5'>
                        <div className=" group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-purple-200 dark:border-gray-700 w-full aspect-w-16 aspect-h-9 shadow-violet-900">
                            <iframe width="100%" className='h-56 md:h-96 rounded-xl' src="https://www.youtube.com/embed/EufxNy0OZlA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 items-center -mt-20">
                    <div className="h-0.5 w-full mt-2 bg-white dark:bg-gray-700"></div>
                    <h1 className="text-md md:text-xl font-semibold text-gray-700 py-5 px-5 -mt-2 md:-mt-2 dark:text-gray-200">
                        &#127942; <br />My debut short film directorial <a href='https://youtu.be/zPhGjOomcQk?si=LwxIU3cioUd_2PIP' target='_blank' className='underline decoration-dotted'>&quot;The Outsider&quot;&nbsp;<svg fill='currentColor' style={{ display: 'inline-block', width: '1em', height: '1em' }}
                            viewBox="0 0 50 50">
                            <path d="M36 24c-1.2 0-2 0.8-2 2v12c0 1.2-0.8 2-2 2h-22c-1.2
0-2-0.8-2-2v-22c0-1.2 0.8-2 2-2h12c1.2 0 2-0.8 2-2s-0.8-2-2-2h-12c-3.4
0-6 2.6-6 6v22c0 3.4 2.6 6 6 6h22c3.4 0 6-2.6
6-6v-12c0-1.2-0.8-2-2-2z"></path>
                            <path d="M43.8 5.2c-0.2-0.4-0.6-0.8-1-1-0.2-0.2-0.6-0.2-0.8-0.2h-12c-1.2
0-2 0.8-2 2s0.8 2 2 2h7.2l-18.6 18.6c-0.8 0.8-0.8 2 0 2.8 0.4 0.4 0.8
0.6 1.4 0.6s1-0.2 1.4-0.6l18.6-18.6v7.2c0 1.2 0.8 2 2 2s2-0.8
2-2v-12c0-0.2 0-0.6-0.2-0.8z"></path>
                        </svg></a> was selected as an official entry for <a href='https://www.oneearthawards.com/' target='_blank' className='underline decoration-dotted'>&quot;One Earth Awards&quot;&nbsp;<svg fill='currentColor' style={{ display: 'inline-block', width: '1em', height: '1em' }}
                            viewBox="0 0 50 50">
                            <path d="M36 24c-1.2 0-2 0.8-2 2v12c0 1.2-0.8 2-2 2h-22c-1.2
0-2-0.8-2-2v-22c0-1.2 0.8-2 2-2h12c1.2 0 2-0.8 2-2s-0.8-2-2-2h-12c-3.4
0-6 2.6-6 6v22c0 3.4 2.6 6 6 6h22c3.4 0 6-2.6
6-6v-12c0-1.2-0.8-2-2-2z"></path>
                            <path d="M43.8 5.2c-0.2-0.4-0.6-0.8-1-1-0.2-0.2-0.6-0.2-0.8-0.2h-12c-1.2
0-2 0.8-2 2s0.8 2 2 2h7.2l-18.6 18.6c-0.8 0.8-0.8 2 0 2.8 0.4 0.4 0.8
0.6 1.4 0.6s1-0.2 1.4-0.6l18.6-18.6v7.2c0 1.2 0.8 2 2 2s2-0.8
2-2v-12c0-0.2 0-0.6-0.2-0.8z"></path>
                        </svg></a> in 2022.
                    </h1>
                    <div className="h-0.5 w-full mt-2 bg-white dark:bg-gray-700"></div>
                </div>
                <div className="col-span-1 md:col-span-3 -mt-20">
                    <h1 className="text-xl font-semibold font-mono text-gray-700 px-5 py-5 -mt-2 md:-mt-2 dark:text-gray-200">
                        My recent works
                    </h1>
                </div>
                <div className="col-span-1 md:col-span-3 -mt-20">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 -mt-5'>
                        {userData.movies.map((item, index) => {
                            return (
                                <a key={index} href={'https://youtube.com/watch?v=' + item.url} target='_blank'>
                                    <div className=" group mb-4 transition duration-200 relative  shadow-md  shadow-cyan-500/50 dark:shadow-cyan-950/50 rounded-xl border border-purple-200 dark:border-gray-700  w-full aspect-w-16 aspect-h-9">
                                        {/* */}
                                        <div className='h-56 md:h-76 rounded-tl-xl rounded-tr-xl'>
                                            <img className='h6 md:h-76 rounded-tl-xl rounded-tr-xl' src={'https://img.youtube.com/vi/' + item.url + '/0.jpg'} alt={item.title ?? ""} style={{ width: '100%', height: '100%' }} />
                                        </div>
                                        <div className='px-2 py-5'>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" className='-mt-10' x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                                <linearGradient id="UoM~0_1BpfEneny~ePS0ba_57GgOxl1VjRW_gr1" x1="8.469" x2="42.33" y1="8.469" y2="42.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#UoM~0_1BpfEneny~ePS0ba_57GgOxl1VjRW_gr1)" d="M39,41H9c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h30c1.1,0,2,0.9,2,2v30C41,40.1,40.1,41,39,41z"></path><path d="M41,7h-5.528L20.695,21.777c-0.746,0.746-0.746,1.954,0,2.7l2.828,2.828 c0.746,0.746,1.954,0.746,2.7,0L41,12.528V7z" opacity=".018"></path><path d="M41,7h-5.4L20.759,21.841c-0.71,0.71-0.71,1.861,0,2.571l2.828,2.828 c0.71,0.71,1.861,0.71,2.571,0L41,12.4V7z" opacity=".036"></path><path d="M41,7h-5.271L20.823,21.906c-0.675,0.675-0.675,1.768,0,2.443l2.828,2.828 c0.675,0.675,1.768,0.675,2.443,0L41,12.271V7z" opacity=".054"></path><path d="M41,7h-5.143l-14.97,14.97c-0.639,0.639-0.639,1.675,0,2.314l2.828,2.828 c0.639,0.639,1.675,0.639,2.314,0L41,12.143V7z" opacity=".073"></path><path d="M41,7h-5.014L20.952,22.034c-0.604,0.604-0.604,1.582,0,2.186l2.828,2.828 c0.604,0.604,1.582,0.604,2.186,0L41,12.014V7z" opacity=".091"></path><path d="M41,7h-4.885L21.016,22.098c-0.568,0.568-0.568,1.489,0,2.057l2.828,2.828 c0.568,0.568,1.489,0.568,2.057,0L41,11.885V7z" opacity=".109"></path><path d="M41,7h-4.757L21.081,22.163c-0.533,0.533-0.533,1.396,0,1.928l2.828,2.828 c0.533,0.533,1.396,0.533,1.928,0L41,11.757V7z" opacity=".127"></path><path d="M41,7h-4.628L21.145,22.227c-0.497,0.497-0.497,1.303,0,1.8l2.828,2.828 c0.497,0.497,1.303,0.497,1.8,0L41,11.628V7z" opacity=".145"></path><path d="M41,7h-4.5L21.209,22.291c-0.462,0.462-0.462,1.21,0,1.671l2.828,2.828 c0.462,0.462,1.21,0.462,1.671,0L41,11.5V7z" opacity=".164"></path><path d="M41,7h-4.371L21.273,22.355c-0.426,0.426-0.426,1.117,0,1.543l2.828,2.828 c0.426,0.426,1.117,0.426,1.543,0L41,11.371V7z" opacity=".182"></path><path d="M41,7h-4.243l-15.42,15.42c-0.391,0.391-0.391,1.024,0,1.414l2.828,2.828 c0.391,0.391,1.024,0.391,1.414,0L41,11.243V7z" opacity=".2"></path><path fill="#50e6ff" d="M36.452,1.379l2.963,2.963L21.338,22.42c-0.391,0.391-0.391,1.024,0,1.414l2.828,2.828	c0.391,0.391,1.024,0.391,1.414,0L43.658,8.585l2.963,2.963C47.13,12.057,48,11.697,48,10.977l0-9.361C48,0.723,47.277,0,46.384,0	l-9.361,0C36.303,0,35.943,0.87,36.452,1.379z"></path>
                                            </svg>
                                            <br /> */}
                                            <h1 className="text-lg x-5 font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                                                {item.title} &nbsp;&nbsp;<svg fill='currentColor' style={{ display: 'inline-block', width: '1em', height: '1em' }}
                                                    viewBox="0 0 50 50">
                                                    <path d="M36 24c-1.2 0-2 0.8-2 2v12c0 1.2-0.8 2-2 2h-22c-1.2
0-2-0.8-2-2v-22c0-1.2 0.8-2 2-2h12c1.2 0 2-0.8 2-2s-0.8-2-2-2h-12c-3.4
0-6 2.6-6 6v22c0 3.4 2.6 6 6 6h22c3.4 0 6-2.6
6-6v-12c0-1.2-0.8-2-2-2z"></path>
                                                    <path d="M43.8 5.2c-0.2-0.4-0.6-0.8-1-1-0.2-0.2-0.6-0.2-0.8-0.2h-12c-1.2
0-2 0.8-2 2s0.8 2 2 2h7.2l-18.6 18.6c-0.8 0.8-0.8 2 0 2.8 0.4 0.4 0.8
0.6 1.4 0.6s1-0.2 1.4-0.6l18.6-18.6v7.2c0 1.2 0.8 2 2 2s2-0.8
2-2v-12c0-0.2 0-0.6-0.2-0.8z"></path>
                                                </svg>
                                            </h1>
                                            <span className="text-md font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                                                {item.contentType}
                                            </span><br />
                                            <span className="text-sm font-normal text-gray-700 -mt-2 dark:text-gray-200">
                                                {item.activity}
                                            </span>
                                            {/* <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div> */}
                                        </div>
                                    </div>
                                </a>
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