import { useState } from "react";
import {
  List, Datagrid, TextField, NumberField, BooleanField,
  ReferenceField, EditButton, DeleteButton,
  SearchInput, SelectInput, useCreate, useRefresh,
} from "react-admin";
import {
  Button, Dialog, DialogTitle, DialogContent,
  TextField as MuiTextField, Alert,
} from "@mui/material";

const filters = [
  <SearchInput source="q" alwaysOn />,
  <SelectInput source="department" label="Département" choices={[
    { id: "Informatique", name: "Informatique" },
    { id: "Marketing", name: "Marketing" },
    { id: "RH", name: "RH" },
    { id: "Finance", name: "Finance" },
  ]} />,
  <SelectInput source="isRemunerate" label="Rémunéré" choices={[
    { id: true, name: "Oui" },
    { id: false, name: "Non" },
  ]} />,
];

const QuickAddModal = () => {
  const [open, setOpen] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [managerId, setManagerId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [create] = useCreate();
  const refresh = useRefresh();

  const handleSubmit = () => {
    create(
      "interns",
      {
        data: {
          firstname,
          lastname,
          managerId: Number(managerId),
          isRemunerate: false,
          remuneration: 0,
        },
      },
      {
        onSuccess: () => {
          setOpen(false);
          setFirstname("");
          setLastname("");
          setManagerId("");
          setErrorMsg("");
          refresh();
        },
        onError: () => {
          setErrorMsg("Erreur lors de la création du stagiaire.");
        },
      }
    );
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        + Ajouter stagiaire rapide
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Ajouter un stagiaire rapide</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 300 }}>
          {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
          <MuiTextField label="Prénom" value={firstname}
            onChange={(e) => setFirstname(e.target.value)} />
          <MuiTextField label="Nom" value={lastname}
            onChange={(e) => setLastname(e.target.value)} />
          <MuiTextField label="Manager ID" value={managerId}
            onChange={(e) => setManagerId(e.target.value)} />
          <Button variant="contained" onClick={handleSubmit}>
            Créer
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const InternList = () => (
  <List filters={filters} perPage={5} actions={<><QuickAddModal /></>}>
    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <TextField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <ReferenceField source="managerId" reference="employees" label="Manager">
        <TextField source="firstname" />
      </ReferenceField>
      <BooleanField source="isRemunerate" label="Rémunéré" />
      <NumberField source="remuneration" label="Rémunération"
        options={{ style: "currency", currency: "EUR" }} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);