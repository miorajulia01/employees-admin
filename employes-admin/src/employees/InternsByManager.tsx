import { useRecordContext, useGetList } from "react-admin";
import { Link } from "react-admin";

export const InternsByManager = () => {
  const record = useRecordContext();
  const { data, total, isPending } = useGetList("interns", {
    filter: { managerId: record?.id },
    pagination: { page: 1, perPage: 100 },
  });

  if (isPending) return <p>Chargement...</p>;

  return (
    <div>
      <h3>Stagiaires encadrés ({total})</h3>
      {!data || data.length === 0 ? (
        <p>Aucun stagiaire encadré.</p>
      ) : (
        <ul>
          {data.map((intern) => (
            <li key={intern.id}>
              <Link to={`/interns/${intern.id}/show`}>
                {intern.firstname} {intern.lastname}
              </Link>
              {" — "}{intern.department}
              {intern.isRemunerate ? ` — ${intern.remuneration}€` : " — Non rémunéré"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};