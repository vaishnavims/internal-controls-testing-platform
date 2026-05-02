import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendRequest = async () => {
    console.log("Button clicked");

    if (!text.trim()) {
      setResponse("Please enter some text");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/ai", {
        text: text,
      });

      console.log("Response:", res.data);

      setResponse(res.data.response);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Backend not reachable / error occurred");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>AI Testing Platform</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "16px"
        }}
      />

      <br /><br />

      <button
        onClick={sendRequest}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Send
      </button>

      <br /><br />

      {loading && <p>Loading...</p>}

      <h3>{response}</h3>
    </div>
  );
}

export default App;