"use client";

import DatabaseWithRestApi from "@/components/ui/DatabaseWithRestApi";

export function ApiDatabaseDemo() {
  return (
    <div className="flex justify-center items-center w-full">
      <DatabaseWithRestApi 
        title="REST API Development & Database Integration"
        circleText="API"
        badgeTexts={{
          first: "GET",
          second: "POST", 
          third: "PUT",
          fourth: "DELETE"
        }}
        buttonTexts={{
          first: "Foxtra",
          second: "api_v1"
        }}
        lightColor="#FFCC02"
      />
    </div>
  );
}
