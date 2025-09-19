"use client";

import DatabaseWithRestApi from "@/components/ui/DatabaseWithRestApi";

export function CloudDatabaseDemo() {
  return (
    <div className="flex justify-center items-center w-full">
      <DatabaseWithRestApi 
        title="Multi-Cloud Infrastructure & DevOps Automation"
        circleText="CLOUD"
        badgeTexts={{
          first: "AWS",
          second: "AZURE", 
          third: "GCP",
          fourth: "DEVOPS"
        }}
        buttonTexts={{
          first: "Foxtra",
          second: "cloud_ops"
        }}
        lightColor="#FFCC02"
      />
    </div>
  );
}
