// src/components/desktop/Desktop.tsx
import React from 'react';
import TerminalModule from './TerminalModule';
import IcoModule from './IcoModule';
import DashboardModule from './DashboardModule';
import TokenomicsModule from './TokenomicsModule';
import DocumentsModule from './DocumentsModule';
import Mp3PlayerModule from './Mp3PlayerModule';
import SettingsModule from './SettingsModule';

const Desktop = () => {
  return (
    <div className="desktop">
      <h1>Prospera DeFi Desktop</h1>
      <TerminalModule />
      <IcoModule />
      <DashboardModule />
      <TokenomicsModule />
      <DocumentsModule />
      <Mp3PlayerModule />
      <SettingsModule />
    </div>
  );
};

export default Desktop;
