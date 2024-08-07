import React, { useEffect } from 'react';
import { SuprsendInbox } from '@suprsend/react-sdk';
import suprsend from './suprsendConfig';

const NotificationInbox = () => {
  useEffect(() => {
    suprsend.inbox.init();
  }, []);

  return (
    <div className="notification-inbox">
      <SuprsendInbox
        suprsend={suprsend}
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          border: '1px solid #ddd',
        }}
      />
    </div>
  );
};

export default NotificationInbox;
