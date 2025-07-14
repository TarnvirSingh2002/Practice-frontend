const StatusBadge = ({ status }) => {
  const badgeStyle = {
    padding: '6px 12px',
    borderRadius: '20px',
    color: '#fff',
    backgroundColor: status === 'online' ? 'green' : 'gray',
    display: 'inline-block',
    fontSize: '0.9rem',
  };

  return <span style={badgeStyle}>{status}</span>;
};

export default StatusBadge;
