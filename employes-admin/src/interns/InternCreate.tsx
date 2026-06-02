import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  ReferenceInput,
  required,
  email,
} from "react-admin";
import { useWatch } from "react-hook-form";

const RemunerationInput = () => {
  const isRemunerate = useWatch({ name: "isRemunerate" });
  return isRemunerate ? (
    <NumberInput
      source="remuneration"
      label="Rémunération (€)"
      validate={required()}
    />
  ) : null;
};

const ManagerInput = () => {
  const department = useWatch({ name: "department" });
  return (
    <ReferenceInput
      source="managerId"
      reference="employees"
      filter={{ department, active: true }}
    >
      <SelectInput
        label="Manager"
        optionText={(record) => `${record.firstname} ${record.lastname}`}
        validate={required()}
      />
    </ReferenceInput>
  );
};

export const InternCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="firstname" label="Prénom" validate={required()} />
      <TextInput source="lastname" label="Nom" validate={required()} />
      <TextInput source="email" label="Email" validate={[required(), email()]} />
      <SelectInput
        source="department"
        label="Département"
        validate={required()}
        choices={[
          { id: "Informatique", name: "Informatique" },
          { id: "Marketing", name: "Marketing" },
          { id: "RH", name: "RH" },
          { id: "Finance", name: "Finance" },
        ]}
      />
      <ManagerInput />
      <BooleanInput source="isRemunerate" label="Rémunéré" />
      <RemunerationInput />
    </SimpleForm>
  </Create>
);