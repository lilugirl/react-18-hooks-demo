import { useState, useEffect } from "react";

const useWebWorker = (workerFunction, inputData) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!inputData) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const blob = new Blob(
      [
        `
          self.onmessage = function(event) {
            (${workerFunction})(event);
          };
        `,
      ],
      { type: "application/javascript" }
    );

    const workerScriptUrl = URL.createObjectURL(blob);
    const worker = new Worker(workerScriptUrl);

    worker.onmessage = (event) => {
      console.log("Worker result:", event.data);
      setResult(event.data);
      setLoading(false);
    };

    worker.onerror = (event) => {
      console.error("Worker error:", event.message);
      setError(event.message);
      setLoading(false);
    };

    console.log("Posting message to worker:", inputData);
    worker.postMessage(inputData);

    return () => {
      worker.terminate();
      URL.revokeObjectURL(workerScriptUrl);
    };
  }, [inputData, workerFunction]);

  return { result, error, loading };
};

export default useWebWorker;