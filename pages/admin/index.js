import AdminForm from "../../components/admin/form/form"
import Head from "next/head"
const AdminPanel = () => {
    return (
        <>
            <Head>
                <title>Admin Panel</title>
                <meta charSet="utf-8" />
            </Head>
            <div>
                <h1>Admin Panel</h1>
            </div>
            <div>
                <AdminForm />
            </div>
        </>
    )
}

export default AdminPanel