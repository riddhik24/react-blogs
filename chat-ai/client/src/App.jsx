import { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  console.log(chatLog);
  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { sender: "You", text: message };
    setChatLog((prev) => [...prev, userMessage]);
    setMessage("");

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const msg = await res.json();
    setChatLog((prev) => [...prev, { sender: "Gemini", text: msg }]);
    console.log(chatLog);
  };
  return (
    /* 1. Main Container: Full screen height (h-screen) and centered horizontally (mx-auto) */
    <div className="flex flex-col h-screen max-w-5xl mx-auto bg-gray-50 shadow-lg">
      {/* 2. Header: Fixed at the top */}
      <header className="p-6 text-center rounded-2xl bg-white shrink-0 shadow-lg">
        <h1 className="font-bold text-3xl">Chat AI 🤖</h1>
      </header>

      {/* 3. Message Area: Grows to fill space (flex-1) and scrolls when full (overflow-y-auto) */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4 rounded-4xl">
        {chatLog.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              msg.sender === "user" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <span className="block text-xs font-semibold opacity-70 mb-1">
                {msg?.sender}
              </span>

              {/* FIX: Replace the <p> or <span> with ReactMarkdown */}
              <div className="text-sm leading-relaxed prose prose-sm max-w-none">
                <ReactMarkdown>{msg?.text}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* 4. Footer: Always stuck to the bottom (shrink-0) */}
      <footer className="p-4 bg-white rounded-2xl shadow-lg shrink-0">
        <div className="flex items-center gap-2 max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-all"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="bg-black text-white rounded-full p-3 hover:bg-gray-800 transition-colors disabled:opacity-50 cursor-pointer"
            onClick={sendMessage}
            disabled={!message.trim()}
          >
            <FaArrowAltCircleUp size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
}
export default App;
