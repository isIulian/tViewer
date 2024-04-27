import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import resourcesService from "@/services/resourcesService";
import trackService from "@/services/trackService";

const addTrackFormSchema = z.object({
  lastReadedPart: z.string({
    required_error: "Please select the last readed resource part.",
  }),
});

export function EditTrackForm() {
  const [trackDetail, setTrackDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadDetails = async () => {
      let trackId = parseInt(id, 10);
      if (!isNaN(trackId)) {
        let track = await trackService.getTrack(trackId);
        let resource = await resourcesService.getResource(track.resourceId);
        track.resourceParts = resource.parts;
        setTrackDetail(track);
      }
    };

    loadDetails();
  }, [id]);

  const form = useForm({
    resolver: zodResolver(addTrackFormSchema),
    mode: "onChange",
  });

  function onSubmit (data) {
    let trackId = parseInt(id, 10);
    data.id = trackId;
    trackService.updateTrack(data).then(function () {
      window.location.href = "/tracks";
    });
  }

  if (trackDetail === null) {
    return <p>No details to edit</p>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {trackDetail !== null && trackDetail.resourceParts.length > 0 ? (
          <FormField
            control={form.control}
            name="lastReadedPart"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last readed</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={trackDetail.lastReadedPart}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select part" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {trackDetail.resourceParts.map((part, index) => (
                      <SelectItem key={index} value={part}>
                        {part}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select what was the last readed part
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <></>
        )}

        <Button type="submit">Edit</Button>
      </form>
    </Form>
  );
}
