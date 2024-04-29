import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import resourceService from "@/services/resourcesService.js";
import trackService from "@/services/trackService";
import ThemeSwitch from "@/components/layout/theme-switch";
import { Layout, LayoutBody, LayoutHeader } from "@/components/layout/layout";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

const ResourceDetail = () => {
  const [resourceDetail, setResourceDetail] = useState(null);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const loadResourceDetail = async () => {
      let resourceId = parseInt(id, 10);
      if (!isNaN(resourceId)) {
        let resource = await resourceService.getResource(resourceId);
        setResourceDetail(resource);
      }
    };

    loadResourceDetail();
  }, [id]);

  function handleRemove(id) {
    const deleteIncludedTracks = async (id) => {
      resourceService.deleteResource(id).then(function () {
        trackService.deleteTracksByResource(id).then(function () {
          window.location.href = `${import.meta.env.VITE_BASE}resources/${resourceDetail.resourceType.name}`;
        });
      });
    };
    
    deleteIncludedTracks(parseInt(id,10));
  }

  if (resourceDetail === null) {
    return (
      <>
        <p>No details</p>
      </>
    );
  }

  return (
    <>
      <Layout>
        {/* ===== Top Heading ===== */}
        <LayoutHeader className="border-b">
          <div className="ml-auto flex items-center space-x-4">
            <Link to={"/resource-edit" + "/" + id} className="flex ml-2">
              <Button size="sm" className="ml-auto flex h-8">
                <IconEdit className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </Link>
            <Button
              size="sm"
              variant="outline"
              className="ml-auto flex h-8"
              onClick={() => setOpenDeleteConfirm(true)}
            >
              <IconTrash className="mr-2 h-4 w-4" />
              Delete
            </Button>
            <ThemeSwitch />
          </div>
        </LayoutHeader>

        {/* ===== Main ===== */}
        <LayoutBody className="space-y-4">
          <div className="md:flex px-4">
            <div className="flex justify-center md:flex-none">
              <img
                src={resourceDetail.covers[0]}
                alt={resourceDetail.title}
                className="h-72 w-56 rounded-md shadow-lg transform border-4 border-gray-300"
              />
            </div>

            <div className="flex-column md:pl-4 md:pr-56">
              <p className="pt-4 text-2xl font-bold">{resourceDetail.title}</p>
              <hr />

              <p className="my-4 text-sm text-left">
                {resourceDetail.description}
              </p>
            </div>
          </div>

          <AlertDialog
            open={openDeleteConfirm}
            onOpenChange={setOpenDeleteConfirm}
          >
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  resource and linked tracks.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  onClick={() => handleRemove(id)}
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
};

export default ResourceDetail;
