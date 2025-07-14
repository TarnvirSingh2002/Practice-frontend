// UserCard.jsx
import StatusBadge from './StatusBadge';

const UserCard = ({ name, status }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '16px',
    maxWidth: '250px',
    backgroundColor: '#f9f9f9',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  };

  const nameStyle = {
    fontSize: '1.2rem',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#333',
  };

  // if (true) {
  //   throw new Error('UserCard crashed intentionally!');
  // }
  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <StatusBadge status={status} />
    </div>
  );
};

export default UserCard;
