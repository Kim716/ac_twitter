import { AdminNavBar } from "components/NavBar";
import UserCards from "components/UserCards";

function AdminUsersPage() {
  return (
    <div className="d-flex">
      <AdminNavBar />
      <UserCards />
    </div>
  );
}

export default AdminUsersPage;
