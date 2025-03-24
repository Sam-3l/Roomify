import UserDashboard from "../components/Dashboard/UserDashboard";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
export default function Dashboard() {
    return(
        // Condiionally render the UserDashboard component or the AdminDashboard component based on the user role
        // If the user role is admin, render the AdminDashboard component
        // Else, render the UserDashboard component
        // The user role can be passed as a prop to the Dashboard component
        <UserDashboard />
    )
}