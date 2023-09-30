import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock ({ children, ...customMeta }: { children: React.ReactNode }) {
    const router = useRouter();
    const meta = {
        title: "Midhun S Madhavan - Artist, Software Engineer",
        description: "Working for a better future everyone.",
        image: "../images/chieroscuro.png",
        type: "website",
        ...customMeta,
    };

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://midhunsmadhavan.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://midhunsmadhavan.com${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Midhun S Madhavan" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@linuxmidhun" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
            </Head>
            <main className="dark:bg-gray-800 w-full">
                <Navbar />
                <div>{children}</div>
                <Footer />
            </main>
        </div>
    );
}