import React from "react";

export default function Analytics({ data }) {
  if (!data || !data.usersByLocation || data.usersByLocation.length === 0) {
    return (
      <div className="card">
        <div style={{ color: "var(--muted)" }}>Add users to see analytics here.</div>
      </div>
    );
  }

  const { usersByLocation = [], majorUserBase = null } = data;

  return (
    <div className="card">
      <div className="analytics-grid">
        <div className="analytics-card">
          <div style={{ color: "var(--muted)" }}>Major base</div>
          <div style={{ fontWeight: 700, marginTop: 6 }}>
            {majorUserBase ? `${majorUserBase._id.city || "Unknown"}, ${majorUserBase._id.state || ""}` : "—"}
          </div>
          <div style={{ color: "var(--muted)", marginTop: 6 }}>{majorUserBase ? `${majorUserBase.count} users` : "No data"}</div>
        </div>

        {usersByLocation.slice(0, 6).map((it, idx) => (
          <div className="analytics-card" key={idx}>
            <div style={{ color: "var(--muted)" }}>{it._id.city || "Unknown"}</div>
            <div style={{ fontWeight: 700, marginTop: 6 }}>{it.count} users</div>
          </div>
        ))}
      </div>
    </div>
  );
}
