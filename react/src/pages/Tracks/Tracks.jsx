import { useState, useEffect } from "react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Layout, LayoutBody, LayoutHeader } from "@/components/layout/layout";
import ThemeSwitch from "@/components/layout/theme-switch";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import trackService from "@/services/trackService";

export default function Tracks() {
  const [tracks, setTracks] = useState([]);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [deleteElement, setDeleteElement] = useState(null);

  function handleRemove() {
    const deleteAndReloadTracks = async (id) => {
      await trackService.deleteTrack(id);
      let persistedTracks = await trackService.getTracks();
      setTracks(persistedTracks);
      setDeleteElement(null);
    };

    if (deleteElement !== null) {
      deleteAndReloadTracks(deleteElement);
    }
  }

  function deleteTrack(id) {
    setOpenDeleteConfirm(true);
    setDeleteElement(id);
  }

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

          <DataTable
            data={tracks.map((track) => {
              return { ...track, deleteRow: () => deleteTrack(track.id) };
            })}
            columns={columns}
          />

          <AlertDialog
            open={openDeleteConfirm}
            onOpenChange={setOpenDeleteConfirm}
          >
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  track.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  onClick={() => handleRemove()}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </LayoutBody>
      </Layout>
    </>
  );
}
