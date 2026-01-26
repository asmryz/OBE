import { useState } from 'react';
import { Paper, ScrollArea } from '@mantine/core';
import styles from './TableArea.module.css';

const users = [
  { id: 1, name: 'Asim', email: 'asim@email.com', status: 'Active', address: '123 Main St, New York', phoneNumber: '+1 (555) 123-4567' },
  { id: 2, name: 'Sarah', email: 'sarah@email.com', status: 'Active', address: '456 Oak Ave, Los Angeles', phoneNumber: '+1 (555) 234-5678' },
  { id: 3, name: 'John', email: 'john@email.com', status: 'Inactive', address: '789 Pine Rd, Chicago', phoneNumber: '+1 (555) 345-6789' },
  { id: 4, name: 'Emily', email: 'emily@email.com', status: 'Active', address: '321 Elm St, Houston', phoneNumber: '+1 (555) 456-7890' },
  { id: 5, name: 'Michael', email: 'michael@email.com', status: 'Active', address: '654 Maple Dr, Phoenix', phoneNumber: '+1 (555) 567-8901' },
  { id: 6, name: 'Jessica', email: 'jessica@email.com', status: 'Inactive', address: '987 Cedar Ln, Philadelphia', phoneNumber: '+1 (555) 678-9012' },
  { id: 7, name: 'David', email: 'david@email.com', status: 'Active', address: '147 Birch Way, San Antonio', phoneNumber: '+1 (555) 789-0123' },
  { id: 8, name: 'Linda', email: 'linda@email.com', status: 'Active', address: '258 Spruce Ct, San Diego', phoneNumber: '+1 (555) 890-1234' },
  { id: 9, name: 'Robert', email: 'robert@email.com', status: 'Inactive', address: '369 Willow Pl, Dallas', phoneNumber: '+1 (555) 901-2345' },
  { id: 10, name: 'Maria', email: 'maria@email.com', status: 'Active', address: '741 Ash Blvd, San Jose', phoneNumber: '+1 (555) 012-3456' },
];

export default function UsersTable() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Paper withBorder radius="md" p="md">
      <div
        className={styles.scrollContainer}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <ScrollArea h={300} type="auto" onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1800px' }}>
          <thead style={getTheadStyle(scrolled)}>
            <tr>
              <th style={thStickyStyle1}>ID</th>
              <th style={thStickyStyle2}>Name</th>
              <th style={thWideStyle}>Email</th>
              <th style={thWideStyle}>Status</th>
              <th style={thWideStyle}>Address</th>
              <th style={thWideStyle}>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={tdStickyStyle1}>{user.id}</td>
                <td style={tdStickyStyle2}>{user.name}</td>
                <td style={tdWideStyle}>{user.email}</td>
                <td style={tdWideStyle}>{user.status}</td>
                <td style={tdWideStyle}>{user.address}</td>
                <td style={tdWideStyle}>{user.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>
      </div>
    </Paper>
  );
}

const getTheadStyle = (scrolled) => ({
  position: 'sticky',
  top: 0,
  backgroundColor: '#ffffff',
  transition: 'box-shadow 150ms ease',
  boxShadow: scrolled ? 'var(--mantine-shadow-sm)' : 'none',
  zIndex: 150,
});

const thStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid var(--mantine-color-gray-3)',
  fontWeight: 600,
};

const tdStyle = {
  padding: '12px',
  borderBottom: '1px solid var(--mantine-color-gray-2)',
};

const thStickyStyle1 = {
  ...thStyle,
  position: 'sticky',
  left: 0,
  top: 0,
  zIndex: 200,
  backgroundColor: '#ffffff',
  boxShadow: '2px 0 8px -2px rgba(0, 0, 0, 0.3)',
  width: '84px',
  maxWidth: '84px',
  minWidth: '84px',
  boxSizing: 'border-box',
};

const thStickyStyle2 = {
  ...thStyle,
  position: 'sticky',
  left: '84px',
  top: 0,
  zIndex: 200,
  backgroundColor: '#ffffff',
  boxShadow: '2px 0 8px -2px rgba(0, 0, 0, 0.3)',
  width: '174px',
  maxWidth: '174px',
  minWidth: '174px',
  boxSizing: 'border-box',
};

const tdStickyStyle1 = {
  ...tdStyle,
  position: 'sticky',
  left: 0,
  zIndex: 50,
  backgroundColor: '#ffffff',
  boxShadow: '2px 0 8px -2px rgba(0, 0, 0, 0.3)',
  width: '84px',
  maxWidth: '84px',
  minWidth: '84px',
  boxSizing: 'border-box',
};

const tdStickyStyle2 = {
  ...tdStyle,
  position: 'sticky',
  left: '84px',
  zIndex: 50,
  backgroundColor: '#ffffff',
  boxShadow: '2px 0 8px -2px rgba(0, 0, 0, 0.3)',
  width: '174px',
  maxWidth: '174px',
  minWidth: '174px',
  boxSizing: 'border-box',
};

const thWideStyle = {
  ...thStyle,
  minWidth: '300px',
};

const tdWideStyle = {
  ...tdStyle,
  minWidth: '300px',
};
