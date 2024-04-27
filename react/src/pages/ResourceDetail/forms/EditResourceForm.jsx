import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { IconX } from "@tabler/icons-react";
import { useParams } from "react-router-dom";

import { statuses } from "@/data/data";
import resourcesService from "@/services/resourcesService";
import resourceTypeService from "@/services/resourceTypeService";

const editResourceFormSchema = z.object({
  title: z.string({
    required_error: "Please set a resource title.",
  }),
  resourceType: z.string({
    required_error: "Please specify the resource type.",
  }),
  description: z.string({
    required_error: "Please wirte a short description.",
  }),
  status: z.string({
    required_error: "Please set status.",
  }),
  covers: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
  parts: z
    .array(
      z.object({
        value: z.string({ required_error: "Please enter a part name." }),
      })
    )
    .nonempty("At least on part is required"),
});

export function EditResourceForm() {
  const [resourceTypes, setResourceTypes] = useState([]);
  const [resourceDetail, setResourceDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      let allResourceTypes = await resourceTypeService.getTypes();
      setResourceTypes(allResourceTypes);
    };

    loadData();
  }, []);

  useEffect(() => {
    const loadDetails = async () => {
      let resourceId = parseInt(id, 10);
      if (!isNaN(resourceId)) {
        let resource = await resourcesService.getResource(resourceId);
        setResourceDetail(resource);

        // fileds
        setValue("resourceType", String(resource.type));
        setValue("title", resource.title);
        setValue("description", resource.description);
        setValue("status", resource.status);

        //array field repopulate
        if (resource.covers.length > 0) {
          let covers = resource.covers.map((x) => {
            return { value: x }
          });
          setValue("covers", covers);
        }

        if (resource.parts.length > 0) {
          let parts = resource.parts.map((x) => {
            return { value: x }
          });
          setValue("parts", parts);
        }
      }
    };

    loadDetails();
  }, [id]);

  const form = useForm({
    resolver: zodResolver(editResourceFormSchema),
    mode: "onChange",
  });

  const { setValue } = form;

  const {
    fields: coverFields,
    append: appendCover,
    remove: removeCover,
  } = useFieldArray({
    name: "covers",
    control: form.control,
  });

  const {
    fields: partFields,
    append: appendPart,
    remove: removePart,
  } = useFieldArray({
    name: "parts",
    control: form.control,
  });

  function onSubmit(data) {
    let selectedType = parseInt(data.resourceType, 10);
    let resource = {
      id: parseInt(id, 10),
      type: selectedType,
      title: data.title,
      description: data.description,
      status: data.status,
      covers: data.covers.map((x) => x.value),
      parts: data.parts.map((x) => x.value),
    };

    resourcesService.updateResource(resource).then(function () {
      window.location.href = `/resource/${id}`;
    });

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  if (resourceDetail === null) {
    return <p>No details</p>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="resourceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={resourceDetail.type}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {resourceTypes.map((type, index) => (
                    <SelectItem key={index} value={String(type.id)}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="resource title/name"
                  {...field}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about the resource"
                  className="resize-none"
                  {...field}
                  value={field.value}
                />
              </FormControl>
              <FormDescription>
                Give a short description of what the resource is talking about.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={resourceDetail.status}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {statuses.map((status, index) => (
                    <SelectItem key={index} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          {coverFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`covers.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Covers
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add urls of cover to the resource.
                  </FormDescription>
                  <FormControl>
                    <div className="flex">
                      <Input {...field} />
                      <Button
                        type="button"
                        variant="ghost"
                        className="ml-1"
                        size="sm"
                        onClick={() => removeCover(index)}
                      >
                        <IconX size={14}></IconX>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => appendCover({ value: "" })}
          >
            Add Cover
          </Button>
        </div>

        <div>
          {partFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`parts.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Parts
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add part or parts of the resource.
                  </FormDescription>
                  <FormControl>
                    <div className="flex">
                      <Input {...field} />
                      <Button
                        type="button"
                        variant="ghost"
                        className="ml-1"
                        size="sm"
                        onClick={() => removePart(index)}
                      >
                        <IconX size={14}></IconX>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => appendPart({ value: "" })}
          >
            Add Part
          </Button>
        </div>
        <Button type="submit">Edit</Button>
      </form>
    </Form>
  );
}
