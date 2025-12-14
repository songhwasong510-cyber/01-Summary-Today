import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/chat"
            element={
              <Placeholder
                title="Hi, AgentGo"
                description="AI 채팅 기능이 준비 중입니다."
              />
            }
          />
          <Route
            path="/activity"
            element={
              <Placeholder
                title="나의 활동"
                description="활동 내역이 준비 중입니다."
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Placeholder
                title="나의 에이전트 설정"
                description="설정 페이지가 준비 중입니다."
              />
            }
          />
          <Route
            path="/teams"
            element={
              <Placeholder
                title="Teams"
                description="Teams 기능이 준비 중입니다."
              />
            }
          />
          <Route
            path="/portal"
            element={
              <Placeholder
                title="Portal"
                description="Portal 페이지가 준비 중입니다."
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
