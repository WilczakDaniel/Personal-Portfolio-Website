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
            <main>
               <div>DW Code</div>
               <span>XD</span>
            </main>
        </>
    );
};

export default Home;

export function generateMetadata(): Metadata {
    return {
        metadataBase: new URL('https://dwcode.pl'),
        alternates: {
            canonical: '/',
        },
        title: 'Daniel Wilczak Code',
        description: 'Daniel Wilczak Code.',
        openGraph: mergeOpenGraph({
            title: 'Daniel Wilczak Code',
            description: 'Software Engineer portfolio website made by Daniel Wilczak Code.',
            url: '/blog',
        }),
        robots: null,
        icons: metadataIcons,
    };
}
