import { Layout, LayoutBody, LayoutHeader } from "@/components/layout/layout";
import ThemeSwitch from "@/components/layout/theme-switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import FileInput from "./components/file-input";
import { generateJsonFile } from "@/lib/files";
import dataStorage from "@/services/dataStorage";

export default function Settings() {
  const importDataFile = useRef(null);

  const handleImportData = () => {
    // `current` points to the mounted file input element
    importDataFile.current.click();
  };

  const handleExport = () => {
    let accountData = dataStorage.getData();
    let jsonBlob = generateJsonFile(JSON.stringify(accountData));

    let generatedObjectUrl = window.URL.createObjectURL(jsonBlob);
    var link = document.createElement("a");
    link.setAttribute("download", "tviewer-data.json");
    link.href = generatedObjectUrl;
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent("click");
      link.dispatchEvent(event);
      document.body.removeChild(link);

      // manually revoke the object URL to avoid memory leaks.
      window.URL.revokeObjectURL(generatedObjectUrl);
    });
  };

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader className="border-b">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Settings
        </h1>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitch />
        </div>
      </LayoutHeader>

      {/* ===== Main ===== */}
      <LayoutBody className="space-y-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account data</CardTitle>
            <CardDescription>
              Save or upload your previous data. Warning: all data will be
              overided
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="secondary"
              className="mr-2"
              onClick={() => handleExport()}
            >
              Export
            </Button>
            <FileInput ref={importDataFile} className="hidden" />
            <Button
              variant="secondary"
              className="mr-2"
              onClick={() => handleImportData()}
            >
              Import
            </Button>
          </CardContent>
        </Card>
      </LayoutBody>
    </Layout>
  );
}
