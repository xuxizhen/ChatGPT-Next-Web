import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

export default function App() {
  return (
    <>
      <div>
      <Home />
        <div style={{textAlign:"center", fontSize:"12px", padding:"9px 0"}}>
        Join Telegram group | 加入电报组: <a href="https://t.me/chatgptv12345">https://t.me/chatgptv12345</a>
        </div>
      </div>
      <Analytics />
    </>
  );
}
