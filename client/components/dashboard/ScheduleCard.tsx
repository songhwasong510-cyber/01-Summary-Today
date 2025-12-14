import { Clock, Building } from "lucide-react";

interface ScheduleItemProps {
  title: string;
  time: string;
  location: string;
}

function ScheduleItem({ title, time, location }: ScheduleItemProps) {
  return (
    <div className="flex items-start border border-neutral-50 rounded-lg p-5 relative">
      <div className="absolute left-0 top-0.5 w-0.5 h-[62px]" />
      <div className="flex-1">
        <h4 className="text-sm font-bold text-text-primary mb-1.5">{title}</h4>
        <div className="flex items-center gap-1 text-xs font-bold text-text-tertiary mb-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-bold text-text-tertiary">
          <Building className="w-3.5 h-3.5" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

export default function ScheduleCard() {
  const schedules = [
    {
      title: "테크노파크 AI 개발팀 주간 전략 회의",
      time: "오전 9:00 - 오전 10:00",
      location: "테크노파크 15층 회의실 A",
    },
    {
      title: "스마트시티 혁신팀 월간 프로젝트 리뷰",
      time: "오후 1:00 - 오후 2:00",
      location: "테크노파크 15층 회의실 B",
    },
    {
      title: "디지털 헬스케어 연구소 분기별 성과 발표",
      time: "오후 3:00 - 오후 4:00",
      location: "테크노파크 15층 회의실 C",
    },
  ];

  return (
    <div className="border border-neutral-200 rounded-lg shadow-sm p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-[30px] h-[30px] flex items-center justify-center rounded">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83332 2.49998V0.833313H7.49999V2.49998H12.5V0.833313H14.1667V2.49998H17.5C17.9602 2.49998 18.3333 2.87308 18.3333 3.33331V7.49998H16.6667V4.16665H14.1667V5.83331H12.5V4.16665H7.49999V5.83331H5.83332V4.16665H3.33332V15.8333H8.33332V17.5H2.49999C2.03976 17.5 1.66666 17.1269 1.66666 16.6666V3.33331C1.66666 2.87308 2.03976 2.49998 2.49999 2.49998H5.83332ZM14.1667 9.99998C12.3257 9.99998 10.8333 11.4924 10.8333 13.3333C10.8333 15.1742 12.3257 16.6666 14.1667 16.6666C16.0076 16.6666 17.5 15.1742 17.5 13.3333C17.5 11.4924 16.0076 9.99998 14.1667 9.99998ZM9.16666 13.3333C9.16666 10.5719 11.4052 8.33331 14.1667 8.33331C16.9281 8.33331 19.1667 10.5719 19.1667 13.3333C19.1667 16.0947 16.9281 18.3333 14.1667 18.3333C11.4052 18.3333 9.16666 16.0947 9.16666 13.3333ZM13.3333 10.8333V13.6785L15.2441 15.5892L16.4226 14.4107L15 12.9881V10.8333H13.3333Z"
                fill="#1447E6"
              />
            </svg>
          </div>
          <h3 className="text-base font-bold text-text-primary">오늘의 일정</h3>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1 text-sm font-bold text-primary hover:bg-primary/5 rounded transition-colors">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25V9.75H3.75V8.25H8.25Z"
              fill="#1447E6"
            />
          </svg>
          더보기
        </button>
      </div>

      {/* Schedule Items */}
      <div className="space-y-2.5">
        {schedules.map((schedule, index) => (
          <ScheduleItem key={index} {...schedule} />
        ))}
      </div>
    </div>
  );
}
