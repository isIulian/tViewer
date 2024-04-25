export function RecentAdditions({ resourcesChanges }) {
  if (resourcesChanges === null
  || resourcesChanges === undefined) {
    return <></>;
  }

  return (
    <div className="space-y-8">
      {resourcesChanges.map((changeInfo) => {
        return (
          <>
            <div className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {changeInfo.resource}
                </p>
                <p className="text-sm text-muted-foreground">
                  {changeInfo.description}
                </p>
              </div>
              <div className="ml-auto font-medium">{changeInfo.type}</div>
            </div>
          </>
        );
      })}
    </div>
  );
}
