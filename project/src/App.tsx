import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

const featuredArticle = {
  id: '1',
  title: 'Major Policy Shift: Government Announces New Economic Framework',
  summary: 'In a landmark decision, the government unveiled a comprehensive economic framework aimed at addressing current challenges and future growth prospects.',
  content: '...',
  category: 'economy',
  imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80',
  author: 'John Doe',
  publishedAt: '2024-03-15T10:00:00Z',
  readTime: 5,
  views: 1234,
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <HeroSection article={featuredArticle} />
        {/* More components will be added here */}
      </main>
    </div>
  );
}

export default App;