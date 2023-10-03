import ContainerBlock from '@/components/ContainerBlock';
import { RainbowHighlight } from '@/components/RainbowHighlight';
import userData from '@/constants/data';
import { GetServerSideProps } from 'next';
import { RoughNotationGroup } from 'react-rough-notation';
// import Image from 'next/image'

const artist = () => {
    return (
        <ContainerBlock>
            <section className="bg-white -mt-10 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto h-60 bg-white  text-center md:text-left dark:bg-gray-800">
                    <p className="leading-loose shadow-text italic text-xl md:text-3xl font-normal text-gray-700 px-5 dark:text-gray-200 font-mono  mx-1">
                        I&apos;m a
                    </p>
                    <h1 className=" text-5xl md:text-8xl text-gray-700 dark:text-gray-200 font-bold py-2 px-5 text-center leading-tight md:text-left">
                        Programmer, Software Engineer &amp; a Mentor.
                    </h1>
                </div>
            </section>
            <div className="bg-[#F1F1F1] -mt-20 dark:bg-gray-900">
            <div className="text-container max-w-6xl mx-auto pt-20">
                <div className='h-10 md:h-5'></div>
                    <p className="text-xl md:text-3xl font-semibold leading-loose mx-4">
                        Over a decade of experience in designing and developing software solutions, mostly for transportation and logistics vertical.
                    </p>
                </div>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
                <div className="pt-10 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    <div className="col-span-1 md:col-span-2 md:px-5">
                        <h1 className="text-2xl md:text-4xl font-semibold text-cyan-700 py-0 -mt-2 dark:text-cyan-200">
                            &#x1F4BB;&nbsp;My Career History
                        </h1>
                        <br />
                        {userData.companies.map((item, index) => {
                            return (
                                <div key={index} className=" group mb-4 transition duration-200 relative shadow-sm dark:shadow-md shadow-cyan-500/50 dark:shadow-cyan-950/50 rounded-lg  w-full aspect-w-16 aspect-h-9">
                                    <h1 className="text-lg md:text-xl font-semibold text-gray-700 py-5 px-5 -mt-2 dark:text-gray-200">
                                        {item.name}&nbsp;&nbsp;<a href={item.url} target='_blank'><svg fill='currentColor' style={{ display: 'inline-block', width: '1em', height: '1em' }}
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
                                    </h1>
                                    <h1 className="text-md md:text-lg font-semibold text-gray-700 py-5 px-5 -mt-10 dark:text-gray-200">
                                        {item.address}
                                    </h1>
                                    <h1 className="text-xs md:text-sm font-mono font-normal text-gray-700 py-5 px-5 -mt-10 dark:text-gray-200">
                                        {item.span}
                                    </h1>
                                    <h1 className="text-lg md:text-xl font-semibold text-gray-700 py-5 px-5 -mt-10 dark:text-gray-200">
                                        {item.position}
                                    </h1>
                                    <div className='px-5 md:px-3'>
                                        {item.roles.map((i, id) => {
                                            return (
                                                <div key={id} className="flex flex-row justify-start items-center">
                                                    <div className="my-4 text-gray-500  dark:text-gray-300">&#x1F4CC;</div>&nbsp;&nbsp;
                                                    <div className="text-sm text-gray-500  py-1 md:py-0 font-semibold relative overflow-hidden dark:text-gray-300">
                                                        {i}
                                                    </div>
                                                </div>
                                            );
                                            // <h2 className="text-sm md:text-md font-mono font-semibold text-gray-700 py-5 px-5 -mt-10 dark:text-gray-200">{i}</h2>);
                                        })}
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className="inline-flex flex-col -mt-20 md:-mt-1">
                        {/* Social Links */}
                        <RoughNotationGroup show={true}>
                            <RainbowHighlight color={'#84CC16'}>
                                <h1 className="font-semibold text-lg dark:text-gray-100" style={{ padding: '5px 10px', opacity: 0.8, color: 'white', background: 'purple' }}>
                                    The tech I&apos;ve been working with
                                </h1>
                            </RainbowHighlight>
                        </RoughNotationGroup>
                        <br />
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Programming Languages
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    C#, VB.NET, GoLang, Dart.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Frameworks
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    .NET, .NET Core
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            DBMS
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    SQL Server, MySQL.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            RDBMS
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    SQL Server, MySQL.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            NoSQL DBMS
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    Cassandra, MongoDB.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            In-Memory Data Store
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    Redis.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            ORM
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    Dapper, ADO.Net.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Web Server Technologies
                        </h1>
                        <div className="mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    ASP.NET, ASP.NET Core, ASP.NET MVC, ASP.Net Core MVC, ASP.NET WebAPI, Node.js, Express.js.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 mt-2 dark:text-gray-200">
                            Web Client Technologies
                        </h1>
                        <div className="mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    JavaScript, jQuery, HTML5/CSS3, Bootstrap, Material UI, Tailwind CSS, React, Next, d3.js, Angular.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 mt-2 dark:text-gray-200">
                            Mobile Client Technologies
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    React-Native (Expo), Flutter.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Cloud Technologies
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    AWS, Azure, Firebase.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Stream-Procesing Technologies
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    Apache Kafka.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Load Balancer
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    Nginx.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Containerization Technologies
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    Docker, Kubernetes.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Version Control Systems
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    Git, SVN, TFS.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Scripting
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    PowerShell.
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Other Utilities & Tools
                        </h1>
                        <div className="-mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>&nbsp;&nbsp;
                                <div className="text-md text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    Postman, Swagger UI.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerBlock >
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props: {

        }
    }
}

export default artist