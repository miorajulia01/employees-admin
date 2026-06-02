import { useRecordContext, useGetList } from "react-admin";

export const DepartmentStats = () => {
  const record = useRecordContext();
  const { total, isPending } = useGetList("employees", {
    filter: { department: record?.department, active: true },
    pagination: { page: 1, perPage: 1 },
  });

  if (isPending) return <p>Chargement stats...</p>;

  return (
    <div style={{ marginTop: 16 }}>
      <h3>Collègues actifs dans le département {record?.department}</h3>
      <p style={{ fontSize: 24, fontWeight: "bold" }}>{total}</p>
    </div>
  );
};