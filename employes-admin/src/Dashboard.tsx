import { useGetList } from "react-admin";
import { Card, CardContent, Typography } from "@mui/material";

const StatCard = ({ title, value }: { title: string; value: number | undefined }) => (
  <Card style={{ minWidth: 200, margin: 8 }}>
    <CardContent>
      <Typography color="textSecondary">{title}</Typography>
      <Typography variant="h3">{value ?? "..."}</Typography>
    </CardContent>
  </Card>
);

export const Dashboard = () => {
  const { total: totalEmployees } = useGetList("employees", {
    pagination: { page: 1, perPage: 1 },
  });
  const { total: activeEmployees } = useGetList("employees", {
    filter: { active: true },
    pagination: { page: 1, perPage: 1 },
  });
  const { total: totalInterns } = useGetList("interns", {
    pagination: { page: 1, perPage: 1 },
  });
  const { total: remuneratedInterns } = useGetList("interns", {
    filter: { isRemunerate: true },
    pagination: { page: 1, perPage: 1 },
  });

  return (
    <div style={{ padding: 16 }}>
      <h2>Tableau de bord</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <StatCard title="Total employés" value={totalEmployees} />
        <StatCard title="Employés actifs" value={activeEmployees} />
        <StatCard title="Total stagiaires" value={totalInterns} />
        <StatCard title="Stagiaires rémunérés" value={remuneratedInterns} />
      </div>
    </div>
  );
};