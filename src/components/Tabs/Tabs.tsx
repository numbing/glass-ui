import React, { useState } from 'react';
import './Tabs.css';

export interface TabItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  variant?: 'default' | 'underline';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveKey,
  activeKey: controlledActiveKey,
  onChange,
  variant = 'default',
  className = '',
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState(
    defaultActiveKey || items[0]?.key || ''
  );

  const activeKey = controlledActiveKey !== undefined ? controlledActiveKey : internalActiveKey;

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (disabled) return;
    setInternalActiveKey(key);
    if (onChange) {
      onChange(key);
    }
  };

  const tabsClasses = ['gl-tabs', variant !== 'default' && `gl-tabs-${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={tabsClasses}>
      <div className="gl-tabs-list" role="tablist">
        {items.map((item) => (
          <button
            key={item.key}
            role="tab"
            aria-selected={activeKey === item.key}
            aria-disabled={item.disabled}
            disabled={item.disabled}
            className={`gl-tab ${activeKey === item.key ? 'gl-tab-active' : ''}`}
            onClick={() => handleTabClick(item.key, item.disabled)}
          >
            {item.icon && <span className="gl-tab-icon">{item.icon}</span>}
            {item.label}
          </button>
        ))}
      </div>
      <div className="gl-tabs-panels">
        {items.map((item) => (
          <div
            key={item.key}
            role="tabpanel"
            className={`gl-tab-panel ${activeKey === item.key ? 'gl-tab-panel-active' : ''}`}
          >
            {item.children}
          </div>
        ))}
      </div>
    </div>
  );
};
