export default function Analytics({ data }) {
  if (!data) return <p>Loading analytics...</p>;

  const { usersByLocation, majorUserBase } = data;

  return (
    <div className="analytics">
      <div className="analytics-summary">
        <h3>Major User Base</h3>
        {majorUserBase ? (
          <p>
            {majorUserBase._id.city || 'Unknown City'},
            {' '}
            {majorUserBase._id.state || 'Unknown State'} –{' '}
            {majorUserBase.count} users
          </p>
        ) : (
          <p>No data yet</p>
        )}
      </div>

      <div className="analytics-list">
        <h3>Users by Location</h3>
        <ul>
          {usersByLocation.map((item, idx) => (
            <li key={idx}>
              {item._id.city || 'Unknown City'},
              {' '}
              {item._id.state || 'Unknown State'}:
              {' '}
              {item.count} users
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
