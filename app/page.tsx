import TypingTest from '@/components/TypingTest';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Key Blaze</h1>
        <ThemeToggle />
      </header>
      <main>
        <TypingTest />
      </main>
    </div>
  );
}