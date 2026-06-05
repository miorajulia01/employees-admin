import { useGetList, useRedirect } from "react-admin";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StatCard = ({
  title,
  value,
  path,
  color,
}: {
  title: string;
  value: number | undefined;
  path: string;
  color: string;
}) => {
  const redirect = useRedirect();

  return (
    <Card
      onClick={() => redirect(path)}
      style={{
        minWidth: 220,
        margin: 12,
        cursor: "pointer",
      }}
    >
      <CardContent>
        <Typography style={{ color, fontWeight: "bold" }}>
          {title}
        </Typography>

        <Typography variant="h4" style={{ color }}>
          {value ?? "..."}
        </Typography>
      </CardContent>
    </Card>
  );
};

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
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Tableau de bord
      </Typography>

      <Box display="flex" flexWrap="wrap">
        <StatCard
          title="Total employés"
          value={totalEmployees}
          path="/employees"
          color="#1976d2"
        />

        <StatCard
          title="Employés actifs"
          value={activeEmployees}
          path="/employees"
          color="#2e7d32"
        />

        <StatCard
          title="Total stagiaires"
          value={totalInterns}
          path="/interns"
          color="#ed6c02"
        />

        <StatCard
          title="Stagiaires rémunérés"
          value={remuneratedInterns}
          path="/interns"
          color="#9c27b0"
        />
      </Box>
    </Box>
  );
};