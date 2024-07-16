import { useSyncExternalStore } from "react";

const getSnapshot = () => {
  console.log("get snapshot", navigator);
  return navigator.onLine;
};

const subscribe = (listener) => {
  console.warn("listender", listener);
  window.addEventListener("online", listener);
  window.addEventListener("offline", listener);

  return () => {
    window.removeEventListener("online", listener);
    window.removeEventListener("offline", listener);
  };
};

export const SyncExternalStoreDemo = () => {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return <div>{isOnline ? "Connected" : "Discounted"}</div>;
};
