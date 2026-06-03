import { useRecordContext, useUpdate } from "react-admin";
import { Button } from "@mui/material";

export const QuickStatusToggle = () => {
  
  const record = useRecordContext();
  const [update, { isPending }] = useUpdate();

  if (!record) return null;

  const handleToggle = (e:React.MouseEvent) => {
  e.stopPropagation()
  e.preventDefault()
    update("employees", {
      id: record.id,
      data: { ...record, active: !record.active },
      previousData: record,
    });
  };

  return (
    <Button
      onClick={handleToggle}
      disabled={isPending}
      variant="contained"
      color={record.active ? "error" : "success"}
      size="small"
    >
      {record.active ? "Désactiver" : "Activer"}
    </Button>
  );
};