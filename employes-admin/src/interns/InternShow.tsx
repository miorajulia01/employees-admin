import {
  Show, SimpleShowLayout, TextField,
  NumberField, BooleanField, ReferenceField,
  TopToolbar, ListButton, EditButton,
} from "react-admin";
import { ManagerCard } from "./ManagerCard";

const ShowActions = () => (
  <TopToolbar>
    <ListButton />
    <EditButton />
  </TopToolbar>
);

export const InternShow = () => (
  <Show actions={<ShowActions />}>
    <SimpleShowLayout>
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <TextField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <BooleanField source="isRemunerate" label="Rémunéré" />
      <NumberField source="remuneration" label="Rémunération"
        options={{ style: "currency", currency: "EUR" }} />
      <ReferenceField source="managerId" reference="employees" label="Manager">
        <TextField source="firstname" />
      </ReferenceField>
      <ManagerCard />
    </SimpleShowLayout>
  </Show>
);