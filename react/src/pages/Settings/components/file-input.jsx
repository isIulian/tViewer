import * as React from 'react'
import { readJsonFile } from "@/lib/files";
import { cn } from "@/lib/utils";
import accountService from "@/services/accountService";

const FileInput = React.forwardRef(function ({ className, ...props }, ref) {
  const onChange = async (event) => {
    if (event.target.files) {
      const parsedData = await readJsonFile(event.target.files[0]);

      console.log(parsedData);
      await accountService.importData(parsedData);
    }
  };

  return (
    <input ref={ref}
      className={cn("", className)}
      type="file"
      accept=".json,application/json"
      onChange={onChange}
    />
  );
})
FileInput.displayName = "FileInput"

export default FileInput;