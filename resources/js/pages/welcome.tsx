import { Head } from "@inertiajs/react";
import { Button } from "flowbite-react";
import Layout from "./layout";

export default function Welcome() {
    return (
        <Layout>
            <Head title="Welcome" />
            <h1>Welcome</h1>
            <p>Hello, welcome to your first Inertia app!</p>
            <Button onClick={() => alert("Click")}>Click me</Button>
        </Layout>
    );
}
