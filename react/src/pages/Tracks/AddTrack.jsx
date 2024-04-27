import { AddTrackForm } from "./forms/AddTrackForm";
import { Layout, LayoutBody, LayoutHeader } from "@/components/layout/layout";
import ThemeSwitch from "@/components/layout/theme-switch";

export default function AddTrack() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader className="border-b">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Add track
        </h1>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitch />
        </div>
      </LayoutHeader>

      {/* ===== Main ===== */}
      <LayoutBody className="space-y-4">
        <AddTrackForm />
      </LayoutBody>
    </Layout>
  );
}
