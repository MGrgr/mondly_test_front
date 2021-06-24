import AdminForm from "../../components/admin/form/form"

const AdminPanel = () => {
    AdminPanel.layout = "default";
    return (
        <>
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