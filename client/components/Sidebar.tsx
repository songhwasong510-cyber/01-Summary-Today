import { MessageSquare, Lightbulb, BarChart3, Settings, Mail, LayoutGrid, FileText, User, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { icon: MessageSquare, label: "Hi, AgentGo", path: "/chat" },
    { icon: Lightbulb, label: "오늘의 업무 요약", path: "/" },
    { icon: BarChart3, label: "나의 활동", path: "/activity" },
    { icon: Settings, label: "나의 에이전트 설정", path: "/settings" },
    { icon: Mail, label: "Teams", path: "/teams" },
    { icon: LayoutGrid, label: "Portal", path: "/portal" },
  ];

  const SidebarContent = () => (
    <>
      {/* Header */}
      <div className="h-[52px] flex items-center justify-between px-[18px]">
        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0622 0C14.24 0 14.4147 0.0460062 14.5674 0.131673C14.7201 0.218926 14.8475 0.342667 14.9341 0.493377L22.8725 14.1794C22.9559 14.3238 23 14.4856 23 14.6522C23 14.8172 22.9559 14.9806 22.8725 15.1249L20.3324 19.505C20.2458 19.6542 20.1199 19.7795 19.9657 19.8667C19.813 19.954 19.6383 20 19.4604 20H3.53798C3.36013 20 3.18544 19.954 3.03278 19.8667C2.88012 19.7795 2.75263 19.6542 2.66607 19.505L0.127481 15.1249C0.0440676 14.9806 0 14.8172 0 14.6522C0 14.4872 0.0440676 14.3238 0.127481 14.1794L8.06432 0.493377C8.15088 0.344253 8.27836 0.218926 8.43103 0.131673C8.58369 0.0444198 8.75838 0 8.93623 0H14.0622ZM5.98214 15.1186C5.98214 15.1186 9.2085 12.9325 11.4984 12.9325C13.7884 12.9325 17.0147 15.1186 17.0147 15.1186L11.4984 5.46046L5.98214 15.1186Z" fill="#1D293D"/>
        </svg>
        <button 
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-200/50 transition-colors lg:block"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-5 h-5 lg:hidden" />
          <svg className="hidden lg:block" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25ZM6 3.75H3V14.25H6V3.75ZM7.5 3.75V14.25H15V3.75H7.5Z" fill="#45556C"/>
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div className="px-3 mt-2.5 space-y-1.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-1.5 h-[42px] px-2.5 rounded transition-all",
                isActive 
                  ? "bg-white shadow-sm text-primary font-bold border-l-2 border-primary" 
                  : "text-text-secondary font-bold hover:bg-white/50"
              )}
            >
              <Icon className="w-[18px] h-[18px]" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="mt-auto px-3 pb-8 space-y-2.5">
        <button className="w-full flex items-center gap-1.5 h-[42px] px-2.5 rounded border border-neutral-200 text-text-secondary font-bold text-sm hover:bg-white/50 transition-colors">
          <FileText className="w-[18px] h-[18px]" />
          이용가이드
        </button>
        
        <button className="w-full h-[58px] rounded flex items-center px-1.5 hover:bg-white/50 transition-colors">
          <div className="w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-text-primary" />
          </div>
          <div className="ml-2.5 text-left flex-1">
            <div className="text-sm font-bold text-text-secondary">홍길동</div>
            <div className="text-xs text-text-tertiary">gildong@itcen.com</div>
          </div>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-md border border-neutral-200"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 5H17.5V6.66667H2.5V5ZM2.5 9.16667H17.5V10.8333H2.5V9.16667ZM2.5 13.3333H17.5V15H2.5V13.3333Z" fill="#1D293D"/>
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "w-[234px] h-screen bg-neutral-50 flex flex-col flex-shrink-0 transition-transform duration-300 lg:translate-x-0 fixed lg:relative z-50",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <SidebarContent />
      </div>
    </>
  );
}
