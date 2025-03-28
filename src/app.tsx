import { useState } from 'react';
import { Button } from '@/components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main className="flex min-h-screen w-screen items-center justify-center">
      <Button onClick={handleClick}>count: {count}</Button>
    </main>
  );
}

export default App;
