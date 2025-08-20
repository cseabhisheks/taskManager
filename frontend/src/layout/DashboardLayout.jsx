import DashboardComponent from "../pages/DashboardComponent"
import Stats from "../pages/Stats"
export default function DashboardLayout() {
    return (<>
        <div className="flex justify-between h-[calc(100vh-70px)] flex-wrap">
            <DashboardComponent  />
            <Stats />
        </div>
    </>)

}
