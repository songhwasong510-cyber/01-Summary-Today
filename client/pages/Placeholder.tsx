import DashboardLayout from "@/components/DashboardLayout";
import { Construction } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <DashboardLayout>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <Construction className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-text-primary mb-2">{title}</h1>
          <p className="text-text-secondary">
            {description || "이 페이지는 아직 준비 중입니다. 계속해서 개발할 내용을 추가하시려면 요청해주세요."}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
