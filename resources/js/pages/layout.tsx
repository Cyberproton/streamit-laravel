import AppSideBar from "@/components/sidebar";
import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main>
            <header>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </header>
            <AppSideBar />
            <article>{children}</article>
        </main>
    );
}
