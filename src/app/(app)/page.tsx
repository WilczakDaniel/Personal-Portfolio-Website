import Hero from '@/components/sections/hero/Hero';
import Sidebar from '@/components/sidebar/Sidebar';
import SidebarLink from '@/components/sidebar/SidebarLink';
import GitHubLogo from '@/components/svg/GithubLogo';
import About from '@/components/sections/about/About';
import Projects from '@/components/sections/projects/Projects';
import Contact from '@/components/sections/contact/Contact';
import Footer from '@/components/sections/footer/Footer';
import styles from './index.module.scss';
import { Metadata } from 'next';
import { mergeOpenGraph, metadataIcons } from '@/utils';

const Home = () => {
    return (
        <>
            <main className={`${styles.homepage}`}>
               <div>DW Code</div>
            </main>
        </>
    );
};

export default Home;

export function generateMetadata(): Metadata {
    return {
        metadataBase: new URL('https://rafalnawojczyk.pl'),
        alternates: {
            canonical: '/',
        },
        title: 'Rafał Nawojczyk - Front-End Developer Portfolio',
        description: 'Software Engineer portfolio website made by Rafał Nawojczyk.',
        openGraph: mergeOpenGraph({
            title: 'Rafał Nawojczyk - Front-End Developer Portfolio',
            description: 'Software Engineer portfolio website made by Rafał Nawojczyk.',
            url: '/blog',
        }),
        robots: null,
        icons: metadataIcons,
    };
}
