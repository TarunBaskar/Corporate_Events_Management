import React, { useState } from 'react';
import "../assets/css/adminsite.css";
import AdminSideBar from './AdminSide';

const SiteSettingsPage = () => {
  const [siteTitle, setSiteTitle] = useState('Your Site');
  const [siteDescription, setSiteDescription] = useState('A brief description of your site');
  const [siteTheme, setSiteTheme] = useState('Light');
  const [siteLanguage, setSiteLanguage] = useState('English');
  const [enableNotifications, setEnableNotifications] = useState(false);

  const handleSaveSettings = () => {
    alert("Your Changes are done!!!");
    console.log('Settings saved:', { siteTitle, siteDescription, siteTheme, siteLanguage, enableNotifications });
  };

  return (
    <>
      <AdminSideBar />
      <br></br><br></br>
      <div className="yourproject-admin-site-settings">
        <h2 className="yourproject-admin-site-settings-title">Site Settings</h2>
        <form className="yourproject-admin-site-settings-form">
          <label className="yourproject-admin-site-settings-label">
            Site Title:
            <input
              type="text"
              className="yourproject-admin-site-settings-input"
              value={siteTitle}
              onChange={(e) => setSiteTitle(e.target.value)}
            />
          </label>

          {/* <label className="yourproject-admin-site-settings-label">
            Site Description:
            <textarea
              className="yourproject-admin-site-settings-textarea"
              value={siteDescription}
              onChange={(e) => setSiteDescription(e.target.value)}
            />
          </label> */}

          <label className="yourproject-admin-site-settings-label">
            Site Theme:
            <select
              className="yourproject-admin-site-settings-select"
              value={siteTheme}
              onChange={(e) => setSiteTheme(e.target.value)}
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </label>

          <label className="yourproject-admin-site-settings-label">
            Site Language:
            <select
              className="yourproject-admin-site-settings-select"
              value={siteLanguage}
              onChange={(e) => setSiteLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Tamil</option>
            </select>
          </label>

          <label className="yourproject-admin-site-settings-label">
            Enable Notifications:
            <input
              type="checkbox"
              className="yourproject-admin-site-settings-checkbox"
              checked={enableNotifications}
              onChange={() => setEnableNotifications(!enableNotifications)}
            />
          </label>

          <button
            type="button"
            className="yourproject-admin-site-settings-button"
            onClick={handleSaveSettings}
          >
            Save Settings
          </button>
        </form>
      </div>
    </>
  );
};

export default SiteSettingsPage;
