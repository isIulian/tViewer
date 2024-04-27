import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
  resource: z.string({
    required_error: "Please select a resource to track.",
  }),
  lastReadedPart: z.string({
    required_error: "Please select the last readed resource part.",
  }),
});

export function AddTrackForm() {
  const [untrackedResources, setUntrackedResources] = useState([]);
  const [resourceParts, setResourceParts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let resources = await resourcesService.getUntrackedResources();
      setUntrackedResources(resources);
    };

    loadData();
  }, []);

  const form = useForm({
    resolver: zodResolver(addTrackFormSchema),
    mode: "onChange",
  });

  const { watch } = form;
  const selectedResourceValue = watch("resource");

  useEffect(() => {
    console.log(selectedResourceValue);
    const loadParts = async () => {
      if (!isNaN(selectedResourceValue)) {
        var resourceId = parseInt(selectedResourceValue, 10);
        let resource = await resourcesService.getResource(resourceId);
        setResourceParts(resource.parts);
      }
    };

    loadParts();
  }, [selectedResourceValue]);

  function onSubmit(data) {
    data.resourceId = parseInt(data.resource, 10);
    trackService.createTrack(data).then(function () {
      window.location.href = "/tracks";
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="resource"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resource</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a resource" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {untrackedResources.map((resource, index) => (
                    <SelectItem key={index} value={String(resource.id)}>
                      {resource.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>What you desire to track</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedResourceValue !== undefined && resourceParts.length > 0 ? (
          <FormField
            control={form.control}
            name="lastReadedPart"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last readed</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a resource" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {resourceParts.map((part, index) => (
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

        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
}
