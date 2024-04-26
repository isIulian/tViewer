import { useState, useEffect } from "react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Layout, LayoutBody, LayoutHeader } from "@/components/layout/layout";
import ThemeSwitch from "@/components/layout/theme-switch";

import trackService from "@/services/trackService";

export default function Tasks() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let persistedTracks = await trackService.getTracks();
      setTracks(persistedTracks);
    };

    loadData();
  }, []);

  return (
    <>
      <Layout>
        {/* ===== Top Heading ===== */}
        <LayoutHeader className="border-b">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Tracks
          </h1>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeSwitch />
          </div>
        </LayoutHeader>

        {/* ===== Main ===== */}
        <LayoutBody className="space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <p className="text-muted-foreground">
              Here&apos;s a list of what you are tracking.
            </p>
          </div>

          <DataTable data={tracks} columns={columns} />
        </LayoutBody>
      </Layout>
    </>
  );
}
