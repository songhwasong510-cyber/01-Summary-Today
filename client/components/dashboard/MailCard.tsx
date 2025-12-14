import { Clock, User } from "lucide-react";

interface MailItemProps {
  sender: string;
  subject: string;
  time: string;
}

function MailItem({ sender, subject, time }: MailItemProps) {
  return (
    <div className="border border-neutral-50 rounded-lg p-3.5 relative h-[90px] flex items-center">
      <div className="absolute left-0 top-3.5 w-0.5 h-[62px]" />
      <div className="flex-1 pl-5">
        <div className="flex items-center gap-1 mb-1.5">
          <User className="w-3.5 h-3.5 text-text-primary" />
          <span className="text-sm font-bold text-text-primary">{sender}</span>
        </div>
        <p className="text-sm text-text-primary mb-1.5">{subject}</p>
        <div className="flex items-center gap-1 text-xs font-bold text-text-tertiary">
          <Clock className="w-3.5 h-3.5" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default function MailCard() {
  const mails = [
    {
      sender: "김하늘",
      subject: "테스트 지원 요청: AI 혁신 센터의 새로운 에이전트 서비스",
      time: "오전 11:00",
    },
    {
      sender: "이수민",
      subject: "AI 혁신 센터의 에이전트 서비스 테스트 요청",
      time: "오후 2:30",
    },
    {
      sender: "박지민",
      subject: "AI 혁신 센터의 새로운 에이전트 서비스 테스트 요청",
      time: "오후 3:45",
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
                d="M2.50002 2.5H17.5C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V16.6667C18.3334 17.1269 17.9603 17.5 17.5 17.5H2.50002C2.03979 17.5 1.66669 17.1269 1.66669 16.6667V3.33333C1.66669 2.8731 2.03979 2.5 2.50002 2.5ZM16.6667 6.0316L10.0599 11.9483L3.33335 6.01328V15.8333H16.6667V6.0316ZM3.75957 4.16667L10.0516 9.71833L16.2509 4.16667H3.75957Z"
                fill="#1447E6"
              />
            </svg>
          </div>
          <h3 className="text-base font-bold text-text-primary">오늘의 메일</h3>
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

      {/* Mail Items */}
      <div className="space-y-2.5">
        {mails.map((mail, index) => (
          <MailItem key={index} {...mail} />
        ))}
      </div>
    </div>
  );
}
