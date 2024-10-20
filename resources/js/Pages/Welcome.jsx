import ApplicationLogo from '@/Components/ApplicationLogo';
import BootstrapLayout from '@/Components/BootstrapLayout';
import MasulineWash from '@/Components/MasulineWash';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <BootstrapLayout>
            <Head title="Welcome" />
            <div className="bg-color">
                {/* <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                /> */}
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full px-6 header">
                        <header class="container py-5 border">
                            <div class="row align-items-center g-2">
                                <div className='border border-primary flex justify-content-around align-items-center'>
                                    <div class="">
                                        {/* <!-- LOGO --> */}
                                        <Link href="/">
                                            <ApplicationLogo />
                                        </Link>
                                    </div>
                                    <nav class="border">
                                        {auth.user ? (
                                            <Link
                                                href={route('dashboard')}
                                                className="btn btn-outline-black rounded px-3 py-2"
                                            >
                                                Dashboards
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href="/"
                                                    className="btn btn-outline-black rounded px-3 py-2 me-2"
                                                >
                                                    Home
                                                </Link>
                                                <Link
                                                    href="/"
                                                    className="btn btn-outline-black rounded px-3 py-2 me-2"
                                                >
                                                    Products
                                                </Link>
                                                <Link
                                                    href="/"
                                                    className="btn btn-outline-black rounded px-3 py-2 me-2"
                                                >
                                                    About Us
                                                </Link>
                                                <Link
                                                    href="/"
                                                    className="btn btn-outline-black rounded px-3 py-2 me-2"
                                                >
                                                    Services
                                                </Link>
                                                <Link
                                                    href="/"
                                                    className="btn btn-outline-black rounded px-3 py-2 me-2"
                                                >
                                                    Contact Us
                                                </Link>
                                            </>
                                        )}
                                    </nav>
                                </div>
                                <div className="col-lg-12 d-flex flex-column flex-lg-row align-items-start justify-content-center border">
                                    <div className="p-3 col-lg-6">
                                        <h3>GE</h3>
                                        <h1>Gentlemans Essential Masculine Wash</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.</p>
                                    </div>
                                    <MasulineWash />
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                {/* LARAVEL DOCUMENTATION */}
                                {/* <a
                                    href="https://laravel.com/docs"
                                    id="docs-card"
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    
                                </a> */}


                                {/* LARACAST LINK */}
                                {/* <a
                                    href="https://laracasts.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                </a> */}

                                {/* LARAVEL NEWS */}
                                <a
                                    href="https://laravel-news.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laravel News
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel News is a community driven
                                            portal and newsletter aggregating
                                            all of the latest and most important
                                            news in the Laravel ecosystem,
                                            including new package releases and
                                            tutorials.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>

                                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Vibrant Ecosystem
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel's robust library of
                                            first-party tools and libraries,
                                            such as{' '}
                                            <a
                                                href="https://forge.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]"
                                            >
                                                Forge
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://vapor.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Vapor
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://nova.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Nova
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://envoyer.io"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Envoyer
                                            </a>
                                            , and{' '}
                                            <a
                                                href="https://herd.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Herd
                                            </a>{' '}
                                            help you take your projects to the
                                            next level. Pair them with powerful
                                            open source libraries like{' '}
                                            <a
                                                href="https://laravel.com/docs/billing"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Cashier
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/dusk"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Dusk
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/broadcasting"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Echo
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/horizon"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Horizon
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/sanctum"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Sanctum
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/telescope"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Telescope
                                            </a>
                                            , and more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </BootstrapLayout>
    );
}
