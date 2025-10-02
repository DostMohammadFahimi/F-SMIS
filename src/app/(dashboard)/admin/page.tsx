import AttendanceCharts from "@/components/AttendanceCharts";
import CountCharts from "@/components/CountCharts";
import EventCalender from "@/components/EventCalender";
import FinanceCharts from "@/components/FinanceCharts";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* {left} */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* {User Card} */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type={"students"} />
          <UserCard type={"teachers"} />
          <UserCard type={"parents"} />
          <UserCard type={"staffs"} />
        </div>
        {/* {Middle Charts} */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* {COUNT CHARTS} */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountCharts />
          </div>
          {/* {ATTENTDENT CHARTS} */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceCharts />
          </div>
        </div>
        {/* {Finance Charts} */}
        <div className="w-full h-[500px]">
          <FinanceCharts />
        </div>
      </div>

      {/* {right} */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
      </div>
    </div>
  );
};

export default AdminPage;
