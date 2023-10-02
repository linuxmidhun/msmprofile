import ContainerBlock from '@/components/ContainerBlock';
import { GetServerSideProps } from 'next';
// import Image from 'next/image'

const artist = () => {
    return (
        <ContainerBlock>
            <section className="bg-white -mt-10 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto h-60 bg-white dark:bg-gray-800">
                    <h1 className=" text-5xl md:text-8xl text-gray-700 dark:text-gray-200 font-bold py-10 px-5 text-center leading-tight md:text-left">
                        Developer, Software Engineer, Technology Trainer.
                    </h1>
                </div>
            </section>
            <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <div className='h-20'></div>
                    <p className="text-xl md:text-3xl font-semibold leading-loose mx-4">
                        Over a decade of experience in designing and developing software solutions, mostly for transportation and logistics vertical.
                    </p>
                </div>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
                <div className="pt-10 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    <div className="inline-flex flex-col">
                        {/* Social Links */}
                        <h1 className="bg-green-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                            Tech Stack
                        </h1>
                        <br />
                        <h1 className="text-xl font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Programming Languages
                        </h1>
                        <div className="mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>
                                <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    &nbsp; <b>C#</b>
                                </div>
                            </div>
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>
                                <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    &nbsp; <b>VB.NET</b>
                                </div>
                            </div>
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>
                                <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    &nbsp; <b>Go Lang</b>
                                </div>
                            </div>
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>
                                <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    &nbsp; <b>Dart</b>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            Frameworks
                        </h1>
                        <div className="mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>
                                <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    &nbsp; <b>.NET</b>
                                </div>
                            </div>
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>
                                <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    &nbsp; <b>.NET Core</b>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-lg font-semibold text-gray-700 -mt-2 dark:text-gray-200">
                            DBMS
                        </h1>
                        <div className="mt-2 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <div className="my-4">&rarr;</div>
                                <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                    &nbsp; <b>SQL Server, MySQL</b>
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