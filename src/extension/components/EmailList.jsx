import React, { useState, useEffect } from "react";
import axios from "axios";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    chrome.storage.sync.get(["google_token"], async (data) => {
      if (!data.google_token) {
        console.error("No Gmail token found.");
        return;
      }

      try {
        const response = await axios.get("https://www.googleapis.com/gmail/v1/users/me/messages", {
          headers: { Authorization: `Bearer ${data.google_token}` },
        });

        setEmails(response.data.messages || []);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    });
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold">Recent Emails</h3>
      <ul>
        {emails.map((email) => (
          <li key={email.id} className="border-b py-2">
            <p className="font-bold">Email ID: {email.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
