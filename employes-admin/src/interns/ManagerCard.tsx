import { useRecordContext, useGetOne } from "react-admin";

export const ManagerCard = () => {
  const record = useRecordContext();
  const { data, isPending, error } = useGetOne(
    "employees",
    { id: record?.managerId },
    { enabled: !!record?.managerId }
  );

  if (isPending) return <p>Chargement du manager...</p>;
  if (error) return <p>Erreur : manager introuvable</p>;
  if (!data) return null;

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8 }}>
      <h3>Manager</h3>
      <p><b>Nom :</b> {data.firstname} {data.lastname}</p>
      <p><b>Département :</b> {data.department}</p>
      <p><b>Email :</b> <a href={`mailto:${data.email}`}>{data.email}</a></p>
      <p><b>Statut :</b> {data.active ? "Actif" : "Inactif"}</p>
    </div>
  );
};