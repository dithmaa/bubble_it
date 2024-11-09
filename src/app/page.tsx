"use client";
import React from "react";
import { Game } from "../components/shared";

export default function Home() {
  React.useEffect(() => {
    // <Script src="https://telegram.org/js/telegram-web-app.js"></Script>;
    const tg = window.Telegram?.WebApp;
    tg?.ready();
    alert(tg?.initDataUnsafe?.user?.id);
  }, []);
  return (
    <div className="home">
      <Game />
    </div>
  );
}
