import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailDetail from "./EmailDetail";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/emails");
      setEmails(response.data);
    } catch (error) {
      console.error("Error fetching emails", error);
    }
  };

  return (
    <div className="mt-4">
      {selectedEmail ? (
        <EmailDetail emailId={selectedEmail} />
      ) : (
        <>
          <h3 className="font-semibold">Recent Emails</h3>
          <ul>
            {emails.map((email) => (
              <li
                key={email.id}
                className="border-b py-2 cursor-pointer"
                onClick={() => setSelectedEmail(email.id)}
              >
                <p className="font-bold">{email.subject}</p>
                <p className="text-sm">{email.sender}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default EmailList;
