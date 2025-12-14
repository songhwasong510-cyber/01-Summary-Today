import DashboardLayout from "@/components/DashboardLayout";
import ScheduleCard from "@/components/dashboard/ScheduleCard";
import MailCard from "@/components/dashboard/MailCard";
import NewsCard from "@/components/dashboard/NewsCard";

export default function Index() {
  return (
    <DashboardLayout>
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        {/* AI Summary Banner */}
        <div className="mb-6 p-4 rounded-lg border border-[#BEDBFF] bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative w-[38px] h-[38px] flex-shrink-0">
              <div className="absolute inset-1 w-[30px] h-[30px] rounded bg-gradient-to-br from-blue-400/40 to-indigo-400/40 backdrop-blur-sm" />
              <svg
                className="absolute inset-0 w-full h-full p-2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 17.5C13.3333 18.4205 12.5872 19.1667 11.6667 19.1667H8.33334C7.41287 19.1667 6.66668 18.4205 6.66668 17.5V16.6667H13.3333V17.5ZM10.2824 1.67399C10.0998 2.19325 10 2.75164 10 3.33333C10 6.09476 12.2386 8.33334 15 8.33334C15.5815 8.33334 16.1394 8.23267 16.6585 8.05014C16.6624 8.14406 16.6667 8.23845 16.6667 8.33334C16.6667 9.91036 16.1188 11.3594 15.2034 12.5009C14.7453 13.0722 13.6296 13.9397 13.3822 15H6.61785C6.37025 13.9395 5.2534 13.0713 4.79494 12.4992C3.8804 11.358 3.33334 9.90953 3.33334 8.33334C3.33337 4.65146 6.31813 1.66666 10 1.66666C10.0946 1.66666 10.1888 1.67008 10.2824 1.67399ZM14.6078 0.273627C14.7549 -0.0811943 15.2452 -0.0812042 15.3923 0.273627L15.603 0.783068C15.963 1.65206 16.6347 2.346 17.4788 2.72155L18.077 2.98766C18.4188 3.14001 18.4188 3.63768 18.077 3.79007L17.4438 4.07165C16.6208 4.43771 15.9612 5.10707 15.5949 5.94746L15.389 6.41866C15.2387 6.76376 14.7614 6.76376 14.611 6.41866L14.4059 5.94746C14.0397 5.10694 13.3793 4.43776 12.5562 4.07165L11.923 3.79007C11.5812 3.63769 11.5812 3.14001 11.923 2.98766L12.5212 2.72155C13.3654 2.346 14.0371 1.65207 14.397 0.783068L14.6078 0.273627Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-text-primary">
              오늘의 업무 요약
            </h2>
          </div>
        </div>

        {/* Two Column Grid for Schedule and Mail */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <ScheduleCard />
          <MailCard />
        </div>

        {/* Full Width News Section */}
        <NewsCard />
      </div>
    </DashboardLayout>
  );
}
