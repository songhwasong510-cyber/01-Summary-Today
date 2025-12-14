import DashboardLayout from "@/components/DashboardLayout";
import { FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <DashboardLayout>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <FileQuestion className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-text-primary mb-2">404</h1>
          <p className="text-text-secondary mb-6">
            요청하신 페이지를 찾을 수 없습니다.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
