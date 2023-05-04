import { createContext, useContext, useState } from "react";

const CountdownContext = createContext({} as any);

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CountdownContext);
  return (
    <>
      <h1>NewCycleForm: {activeCycle}</h1>
      <button onClick={() => setActiveCycle((state: number) => state + 1)}>
        Change cycle
      </button>
    </>
  );
}

function Countdown() {
  const { activeCycle, setActiveCycle } = useContext(CountdownContext);

  return (
    <>
      <h1>Countdown: {activeCycle}</h1>
      <button onClick={() => setActiveCycle((state: number) => state + 1)}>
        Change cycle
      </button>
    </>
  );
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CountdownContext.Provider value={{ activeCycle, setActiveCycle }}>
      <h1>Home</h1>
      <NewCycleForm />
      <Countdown />
    </CountdownContext.Provider>
  );
}
