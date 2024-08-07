import { Suprsend } from '@suprsend/react-sdk';

const suprsend = new Suprsend({
  apiKey: process.env.REACT_APP_SUPRSEND_API_KEY,
  projectId: process.env.REACT_APP_SUPRSEND_PROJECT_ID,
});

export default suprsend;
