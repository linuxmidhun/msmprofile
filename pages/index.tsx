import ContainerBlock from '@/components/ContainerBlock';
import TimelineTabs from '@/components/TimelineTabs';
import {
    Activity, Binoculars, Brush, Cpu, Handshake,
    MessagesSquare, MonitorSmartphone,
    Lightbulb, PackageOpen, PhoneCall, UserRoundPlus,
    UsersRound, Users, Ratio, Package, HeartPlus
} from 'lucide-react';
import { GetServerSideProps } from 'next';
import Image from 'next/image'
import { useState } from 'react';

function Index() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const handleSubmit = () => {
        alert("Thanks for contacting me/mismology. We will get back to you soon.");
    }
    return (
        <ContainerBlock>
            {/* Hero Section */}
            <section style={{
                position: 'relative', height: '100vh',
                display: 'flex', alignItems: 'bottom',
                justifyContent: 'start', overflow: 'hidden'
            }}>
                <Image
                    src="/images/hero.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Founder"
                    style={{ opacity: 0.25 }}
                    className=""
                />
                <div style={{
                    position: 'absolute',
                    zIndex: 1,
                    left: '5vw',
                    top: '35vh',
                }}>
                    <span className='' style={{ fontSize: '2rem', color: '#fff' }}>Hi! I&apos;m</span>
                    <p className='' style={{ fontSize: '6rem', fontWeight: 900, letterSpacing: '-8px', color: 'white', marginLeft: -5, marginTop: -30, lineHeight: -1, marginBottom: -55 }}>Midhun</p>
                    <p className='' style={{ fontSize: '6rem', fontWeight: 900, letterSpacing: '-8px', color: 'white', marginLeft: -5, marginTop: -5, lineHeight: -1, marginBottom: 2 }}>Madhavan</p>
                    <p style={{ fontSize: '1.05rem', maxWidth: 680, textAlign: 'left', margin: '10px 0 0 0' }}>
                        <strong>Software Engineer, Entrepreneur, Tech Consultant.<br /></strong>
                        Passionate about <em>building technology and creative teams.</em>
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section>
                <div className="px-5 md:px-0 pt-10 grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    <div>
                        <h1 className='uppercase pb-2' style={{ color: '#ffd700', fontSize: '0.8rem' }}>About Me</h1>
                        <p className=''>
                            I&apos;m  a developer and creator based in India.
                            With my multi-stack development experience, I build scalable products and lead passionate teams.
                        </p>
                        <p className='pt-2'>
                            For over a decade, I worked in the IT industry as a software engineer and programmer. During my career, I had the privilege of contributing to several innovative software solutions that directly or indirectly benefited the public. Many of these projects focused on addressing challenges in transportation and logistics.
                        </p>
                    </div>
                    <div>
                        <h1 className='uppercase pb-2' style={{ color: '#ffd700', fontSize: '0.8rem' }}>The Cofounder</h1>
                        <p className=''>
                            Being a cofounder is an incredibly rewarding experience. Each day, I&apos;m energized by the opportunity to bring ideas to life and work alongside a passionate team that shares my vision. I embrace challenges as chances to learn, knowing that every obstacle overcome makes us stronger. The mutual support, creativity, and determination within our group inspire me to lead with optimism and resilience. Celebrating our progress together, both big and small, constantly reminds me of the positive impact we can create when united by a common purpose.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mismology Consortium Section */}
            <section className='px-5 md:px-0'>
                <div className='max-w-6xl mx-auto shadow-xl border border-gray-800' style={{
                    background: '#0e1417',
                    padding: '52px 5vw',
                    // maxWidth: 900,
                    margin: '40px auto',
                    borderRadius: 10
                }}>
                    <h2 style={{
                        color: '#ffd700', textAlign: 'center',
                        fontSize: '2rem'
                    }}>
                        Mismology: Technology Consortium
                    </h2>
                    <p style={{ textAlign: 'center', maxWidth: 650, margin: '15px auto 35px auto', fontSize: '1.15rem' }}>
                        <strong>Mismology</strong> is my vision for a collaborative, on-demand network of software engineers of varying experience levels. Our consortium tackles ambitious projects by providing rapid, flexible access to technical expertise—perfect for startups, creative agencies, and teams needing real results.
                    </p>
                    <div className='flex items-center justify-between'>
                        <div className='border-b border-gray-800 w-full'></div>
                        <h2 className='mx-5' style={{
                            color: '#ffd700', textAlign: 'center',
                            fontSize: '1.9rem'
                        }}>
                            Services
                        </h2>
                        <div className='border-b border-gray-800 w-full'></div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-0.1 gap-x-5 pt-5'>
                        <div className='px-10 py-1'>
                            <h2 className='flex items-center justify-start text-xl md:text-2xl font-bold' style={{ color: '#ece6c5', marginTop: 22 }}><MonitorSmartphone size={60} className='mr-5 text-green-400' /> Custom Application development</h2>
                            <p className='py-5'>At Mismology&apos;s expert network, we design and develop tailored software applications to meet unique client requirements, ensuring scalable, robust, and user-friendly solutions every time.</p>
                        </div>
                        <div className='px-10 py-1'>
                            <h2 className='flex items-center justify-start text-xl md:text-2xl font-bold' style={{ color: '#ece6c5', marginTop: 22 }}><Cpu size={60} className='mr-5 text-green-400' /> Technical consulting &amp; solution architecture</h2>
                            <p className='py-5'>The expert consultants in my collective provide in-depth technical guidance and architect comprehensive solutions that optimize efficiency, security, and cost-effectiveness for businesses.</p>
                        </div>
                        <div className='px-10 py-1'>
                            <h2 className='flex items-center justify-start text-xl md:text-2xl font-bold' style={{ color: '#ece6c5', marginTop: 22 }}><UserRoundPlus size={60} className='mr-5 text-green-400' /> Rapid team assembly for urgent projects</h2>
                            <p className='py-5'>For urgent initiatives, the network quickly mobilizes skilled professionals, forming agile teams ready to deliver high-quality results within tight deadlines and constraints.</p>
                        </div>
                        <div className='px-10 py-1'>
                            <h2 className='flex items-center justify-start text-xl md:text-2xl font-bold' style={{ color: '#ece6c5', marginTop: 22 }}><Activity size={60} className='mr-5 text-green-400' /> Long-term collaboration &amp; mentorship</h2>
                            <p className='py-5'>The network fosters enduring partnerships, supporting clients through dedicated mentorship and ongoing collaboration to achieve long-term growth, innovation, and success.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='border-b border-gray-800 w-full'></div>
                        <h2 className='mx-5 w-full' style={{
                            color: '#ffd700', textAlign: 'center',
                            fontSize: '1.9rem'
                        }}>
                            The Mismology Process
                        </h2>
                        <div className='border-b border-gray-800 w-full'></div>
                    </div>
                    {/* <section className="max-w-5xl mx-auto px-4 py-12">
                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-10 md:gap-x-0 relative">
                            <div className="relative z-10 flex flex-col items-center md:w-1/7">
                                <div className="bg-gray-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-lg font-bold shadow-lg"><Handshake size={40} /></div>
                                <span className="mt-4 font-thin">Meet</span>
                            </div>
                            <div className="relative z-10 flex flex-col items-center md:w-1/7">
                                <div className="bg-gray-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-lg font-bold shadow-lg"><MessagesSquare size={40} /></div>
                                <span className="mt-4 font-thin">Discuss</span>
                            </div>
                            <div className="relative z-10 flex flex-col items-center md:w-1/7">
                                <div className="bg-gray-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-lg font-bold shadow-lg"><Lightbulb size={40} /></div>
                                <span className="mt-4 font-thin">Brainstorm</span>
                            </div>
                            <div className="relative z-10 flex flex-col items-center md:w-1/7">
                                <div className="bg-gray-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-lg font-bold shadow-lg"><Users size={40} /></div>
                                <span className="mt-4 font-thin">Team Forming</span>
                            </div>
                            <div className="relative z-10 flex flex-col items-center md:w-1/7">
                                <div className="bg-gray-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-lg font-bold shadow-lg"><Ratio size={40} /></div>
                                <span className="mt-4 font-thin">Solution</span>
                            </div>
                            <div className="relative z-10 flex flex-col items-center md:w-1/7">
                                <div className="bg-gray-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-lg font-bold shadow-lg"><Package size={40} /></div>
                                <span className="mt-4 font-thin">Delivery</span>
                            </div>
                            <div className="relative z-10 flex flex-col items-center md:w-1/7">
                                <div className="bg-gray-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-lg font-bold shadow-lg"><HeartPlus size={40} /></div>
                                <span className="mt-4 font-thin">Continuous Support</span>
                            </div>
                        </div>
                    </section> */}

                    <TimelineTabs />
                    {/* <div className='flex flex-col md:flex-row items-center justify-between gap-5 max-w-4xl mx-auto'>
                        <div>
                            <h3 style={{ color: '#ffd700', marginTop: 22 }}>How Mismology Works</h3>
                            <ol>
                                <li className="flex items-center justify-start py-2"><PhoneCall className='mr-2 text-green-400' /> Tell us your project needs or technical challenges</li>
                                <li className="flex items-center justify-start py-2"><Brush className='mr-2 text-green-400' />We design tailored solutions and assemble the right team</li>
                                <li className="flex items-center justify-start py-2"><UsersRound className='mr-2 text-green-400' /> Engineers (junior, mid, senior) join as needed - fast and professional</li>
                                <li className="flex items-center justify-start py-2"><PackageOpen className='mr-2 text-green-400' /> Delivery, support and iteration until your goals are achieved</li>
                            </ol>
                        </div>
                    </div> */}
                </div>
            </section>


            {/* The tech stack */}
            {/* <section>
                <div className='max-w-6xl mx-auto py-10'>
                    <h3 className='text-center' style={{ color: '#ffd700', marginTop: 22 }}>The Stack</h3>
                    <div className='px-10 py-10 flex items-center justify-start gap-5'>
                        <Image src="/images/react.png" alt='React.js' className='rounded-xl' width={100} height={100} />
                        <Image src="/images/react.png" alt='React.js' className='rounded-xl' width={100} height={100} />
                        <Image src="/images/react.png" alt='React.js' className='rounded-xl' width={100} height={100} />
                        <Image src="/images/react.png" alt='React.js' className='rounded-xl' width={100} height={100} />
                        <Image src="/images/react.png" alt='React.js' className='rounded-xl' width={100} height={100} />
                    </div>
                </div>
            </section> */}


            {/* Contact Section */}
            <section className="text-center py-16 pt-10 font-sans">
                <p className="text-lg mb-3 text-gray-600">CALL ME</p>
                <a href="tel:+918129584938"
                    className="inline-flex items-center gap-3 text-2xl font-bold text-gray-600 border-2 border-gray-600 px-6 py-3 rounded-full hover:bg-gray-600 hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.566 15.566 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1v3.52a1 1 0 01-1 1A16 16 0 014 6a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.24 2.13z" />
                    </svg>
                    +91-8129584938
                </a>
            </section>


            {/* Contact Section */}
            {/* <section style={{
                margin: '52px auto 0 auto', maxWidth: 900, padding: '5vw'
            }}>
                <h2 style={{ color: '#ffd700', marginBottom: 20 }}>Contact Me / Mismology</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        style={{
                            padding: 10, borderRadius: 6, border: 'none', fontSize: 16
                        }}
                        className='bg-gray-800'
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        style={{
                            padding: 10, borderRadius: 6, border: 'none', fontSize: 16
                        }}
                        className='bg-gray-800'
                    />
                    <input
                        type="phone"
                        placeholder="Your Mobile"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        style={{
                            padding: 10, borderRadius: 6, border: 'none', fontSize: 16
                        }}
                        className='bg-gray-800'
                    />
                    <textarea
                        placeholder="How may I help you?"
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        style={{
                            padding: 10, borderRadius: 6, border: 'none',
                            fontSize: 16, minHeight: 80
                        }}
                        className='bg-gray-800'
                    />
                    <button
                        type="submit"
                        style={{
                            background: '#ffd700', color: '#101820',
                            border: 'none', borderRadius: 6,
                            padding: '10px 18px', fontWeight: 700,
                            cursor: 'pointer'
                        }}
                        onClick={e => { e.preventDefault(); handleSubmit(); }}
                    >Send Message</button>
                </form>
            </section> */}
        </ContainerBlock>
    );
}

export default Index;