import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Health.ly',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
