import React, { useState, useEffect } from "react";
import axios from "axios";

const EmailDetail = ({ emailId }) => {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    fetchEmailDetail();
  }, []);

  const fetchEmailDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/email/${emailId}`);
      setEmail(response.data);
    } catch (error) {
      console.error("Error fetching email", error);
    }
  };

  if (!email) return <p>Loading email...</p>;

  return (
    <div className="p-4">
      <h3 className="font-bold">{email.subject}</h3>
      <p className="text-sm text-gray-500">{email.sender}</p>
      <hr className="my-2" />
      <p>{email.content}</p>
    </div>
  );
};

export default EmailDetail;
