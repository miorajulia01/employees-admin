import { useGetList, useRedirect } from "react-admin";
import { Card, CardContent, Typography, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const StatCard = ({ title, value, path, color, icon }: {
  title: string;
  value: number | undefined;
  path: string;
  color: string;
  icon: React.ReactNode;
}) => {
  const redirect = useRedirect();
  return (
    <Card
      onClick={() => redirect(path)}
      style={{
        minWidth: 220,
        margin: 12,
        cursor: "pointer",
        borderLeft: `6px solid ${color}`,
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography style={{ color: "#888", fontSize: 14 }}>{title}</Typography>
            <Typography variant="h3" style={{ color, fontWeight: "bold" }}>
              {value ?? "..."}
            </Typography>
          </Box>
          <Box style={{ color, fontSize: 40 }}>{icon}</Box>
        </Box>
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
    <Box style={{ padding: 24 }}>
      <Typography variant="h4" style={{ marginBottom: 24, fontWeight: "bold" }}>
        Tableau de bord
      </Typography>
      <Box display="flex" flexWrap="wrap">
        <StatCard title="Total employés" value={totalEmployees}
          path="/employees" color="#1976d2"
          icon={<PeopleIcon fontSize="large" />} />
        <StatCard title="Employés actifs" value={activeEmployees}
          path="/employees" color="#2e7d32"
          icon={<CheckCircleIcon fontSize="large" />} />
        <StatCard title="Total stagiaires" value={totalInterns}
          path="/interns" color="#ed6c02"
          icon={<SchoolIcon fontSize="large" />} />
        <StatCard title="Stagiaires rémunérés" value={remuneratedInterns}
          path="/interns" color="#9c27b0"
          icon={<AttachMoneyIcon fontSize="large" />} />
      </Box>
    </Box>
  );
};