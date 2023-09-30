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
            {/* <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
                <div className="pt-10 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    <div className="inline-flex flex-col">
                        <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                            Tech Stack
                        </h1>
                        <div className="flex flex-wrap md:flex-nowrap">
                            <Image
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                                className="h-10 w-10 md:h-20 md:w-20 mx-4 my-4"
                                alt=''
                            />
                            <Image
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                                className="h-10 w-10 md:h-20 md:w-20 mx-4 my-4"
                                alt=''
                            />
                            <Image
                                alt=''
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                                className="h-10 w-10 md:h-20 md:w-20 mx-4 my-4"
                            />
                            <Image
                                alt=''
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                                className="h-10 w-10 md:h-20 md:w-20 mx-4 my-4"
                            />
                            <Image
                                alt=''
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                                className="h-10 w-10 md:h-20 md:w-20 mx-4 my-4"
                            />
                            <Image
                                alt=''
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                                className="h-10 w-10 md:h-20 md:w-20 mx-4 my-4"
                            />
                            <Image
                                alt=''
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                                className="h-10 w-10 md:h-20 md:w-20 mx-4 my-4"
                            />
                            <Image
                                alt=''
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                                className="h-10 w-10 md:h-20 md:w-20 mx-4 my-4"
                            />
                            <Image
                                alt=''
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                                className="h-10 w-10 md:h-20 md:w-20 mx-4 my-4"
                            />
                            <Image
                                alt=''
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                                className="h-10 w-10 md:h-20 md:w-20 mx-4 my-4"
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </ContainerBlock>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props: {

        }
    }
}

export default artist