import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconSum, IconPackages } from "@tabler/icons-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThemeSwitch from "@/components/layout/theme-switch";
import { Layout, LayoutBody, LayoutHeader } from "@/components/layout/layout";

import { RecentAdditions } from "./components/recent-additions";
import { Overview } from "./components/overview";

import analyticsService from "./services/analyticsService";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      let reportData = await analyticsService.getReport();
      setReport(reportData);
    };

    loadData();
  }, []);

  if (report === null) {
    return <></>;
  }

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Dashboard
        </h1>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitch />
        </div>
      </LayoutHeader>

      {/* ===== Main ===== */}
      <LayoutBody className="space-y-4">
        <Tabs
          orientation="vertical"
          defaultValue="overview"
          className="space-y-4"
        >
          <div className="w-full overflow-x-scroll pb-2">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Resources
                  </CardTitle>
                  <IconSum className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {report.resourcesCount}
                  </div>
                </CardContent>
              </Card>

              {report.resourcesTypes.length > 0 ? (
                report.resourcesTypes.map((typeInfo) => (
                  <Card key={typeInfo.label}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {typeInfo.label}
                      </CardTitle>
                      <IconPackages className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{typeInfo.value}</div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <></>
              )}
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
              {report.overview !== null ? (
                <>
                  <Card className="col-span-1 lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                      <CardDescription>Check in which status are the resuorces that you are tracking</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview data={report.overview} />
                    </CardContent>
                  </Card>
                </>
              ) : (
                <></>
              )}
            </div>
          </TabsContent>
          <TabsContent value="history" className="space-y-4">
            <div className="">
              <Card className="">
                <CardHeader>
                  <CardTitle>History</CardTitle>
                  <CardDescription>
                    Last 5 resources variations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentAdditions resourcesChanges={report.history} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </LayoutBody>
    </Layout>
  );
}
