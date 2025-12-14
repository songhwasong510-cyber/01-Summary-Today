import { FileText, Clock, Sparkles, Cloud } from "lucide-react";

interface NewsSectionProps {
  category: string;
  icon: "ai" | "cloud";
  items: { title: string; description: string }[];
}

function NewsSection({ category, icon, items }: NewsSectionProps) {
  const Icon = icon === "ai" ? Sparkles : Cloud;
  
  return (
    <div className="border border-neutral-50 rounded-lg p-4 md:p-5">
      {/* Category Header */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-neutral-50">
        <div className="flex items-center gap-1.5 px-2 py-1 border border-primary/30 rounded-md">
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          <span className="text-xs md:text-sm font-bold text-primary">{category}</span>
        </div>
      </div>

      {/* News Items */}
      <div className="space-y-3 md:space-y-2.5">
        {items.map((item, index) => (
          <div key={index} className="space-y-1.5">
            <h4 className="text-sm font-bold text-text-primary">{item.title}</h4>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NewsCard() {
  const newsData = [
    {
      category: "AI",
      icon: "ai" as const,
      items: [
        {
          title: "AI 정책, 윤리 및 사회적 적용",
          description: "문체부와 한국저작권위원회는 '2025 인공지능-저작권 제도개선 협의체' 3차 회의를 개최했고, 연매협과 M83은 연예인 무단 AI 합성·복제를 막는다. 오픈AI는 청소년 사망이 챗GPT 결함이 아닌 오남용 탓이라고 밝혔으며, 정부는 AI 도입을 가속화하며 AI·보안 투자를 확대할 계획이다."
        },
        {
          title: "AI 기술 개발 및 인프라",
          description: "류제명 2차관은 SKT, 네이버, 현대차, 삼성SDS와 AI 패권의 핵심인 GPU 워킹그룹을 출범했다. 텐센트는 AI 기반 3D 모델링 툴 '훈위안 3D 생성 엔진'을 출시했으며, 로볼리전트와 원익로보틱스는 AI 휴머노이드 로봇 기술 협력을 시작했다."
        }
      ]
    },
    {
      category: "클라우드",
      icon: "cloud" as const,
      items: [
        {
          title: "클라우드 협력 동향",
          description: "SKT는 AWS와 협력 협약을 체결했다. 이 협약은 AI 클라우드 분야의 전략적 협력이다. 퓨어스토리지와 MS는 협력 관계를 맺었다. 이들의 협력은 하이브리드 클라우드 현대화를 위한 것이다."
        },
        {
          title: "클라우드 행사 참가",
          description: "이노그리드는 '오픈K클라우드 데브데이 2025'에 참가했다. 이 데브데이는 클라우드 관련 행사였다."
        }
      ]
    }
  ];

  return (
    <div className="border border-neutral-200 rounded-lg shadow-sm p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-[30px] h-[30px] flex items-center justify-center rounded flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66666 3.33333C1.66666 2.8731 2.03976 2.5 2.49999 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V16.6667C18.3333 17.1269 17.9602 17.5 17.5 17.5H2.49999C2.03976 17.5 1.66666 17.1269 1.66666 16.6667V3.33333ZM3.33332 4.16667V15.8333H16.6667V4.16667H3.33332ZM4.99999 5.83333H9.99999V10.8333H4.99999V5.83333ZM6.66666 7.5V9.16667H8.33332V7.5H6.66666ZM11.6667 7.5H15V5.83333H11.6667V7.5ZM15 10.8333H11.6667V9.16667H15V10.8333ZM4.99999 12.5V14.1667H15V12.5H4.99999Z" fill="#1447E6"/>
            </svg>
          </div>
          <h3 className="text-base font-bold text-text-primary">오늘의 뉴스 요약</h3>
        </div>
        
        {/* Stats and Date */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="flex items-center gap-2 text-xs flex-wrap">
            <div className="flex items-center gap-1 px-1.5 py-1 rounded-md">
              <FileText className="w-4 h-4 text-text-tertiary" />
              <span className="text-text-tertiary font-normal whitespace-nowrap">159개의 뉴스 요약</span>
            </div>
            <div className="w-px h-3.5 bg-neutral-200 hidden sm:block" />
            <div className="flex items-center gap-1 px-1.5 py-1 rounded-md">
              <Clock className="w-4 h-4 text-text-tertiary" />
              <span className="text-text-tertiary font-normal whitespace-nowrap">업데이트 : 매일 오후 12시</span>
            </div>
          </div>
          <button className="flex items-center gap-1 px-3 py-1.5 border border-neutral-200 rounded shadow-sm text-xs md:text-sm text-text-tertiary hover:bg-neutral-50 transition-colors whitespace-nowrap">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75 0.75V2.25H11.25V0.75H12.75V2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25H5.25V0.75H6.75ZM15 8.25H3V14.25H15V8.25ZM5.25 3.75H3V6.75H15V3.75H12.75V5.25H11.25V3.75H6.75V5.25H5.25V3.75Z" fill="#1D293D"/>
            </svg>
            2025.12.12 (수)
          </button>
        </div>
      </div>

      {/* News Sections */}
      <div className="space-y-2.5">
        {newsData.map((section, index) => (
          <NewsSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
}
