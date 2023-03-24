import { NavBar } from "components/NavBar";
import UserCards from "components/UserCards";

function AdminUsersPage() {
  return (
    <div className="d-flex">
      <NavBar />
      <UserCards />
    </div>
  );
}

export default AdminUsersPage;
