import DashboardMain from "../components/DashboardMain";
import DashboardAside from "../components/DashboardAside";

/**
 * Dashboard component that renders the main and aside sections.
 * @returns {JSX.Element} The dashboard layout.
 */
export default function Dashboard(): JSX.Element {
    return (
        <>
            <DashboardAside />
            <DashboardMain />
        </>
    );
}
