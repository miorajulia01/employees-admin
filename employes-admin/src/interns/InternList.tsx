import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  ReferenceField,
  EditButton,
  DeleteButton,
  SearchInput,
  SelectInput,
} from "react-admin";

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

export const InternList = () => (
  <List filters={filters} perPage={5}>
    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <TextField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <ReferenceField source="managerId" reference="employees" label="Manager">
        <TextField source="firstname" /> <TextField source="lastname" />
      </ReferenceField>
      <BooleanField source="isRemunerate" label="Rémunéré" />
      <NumberField source="remuneration" label="Rémunération"
        options={{ style: "currency", currency: "EUR" }} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);