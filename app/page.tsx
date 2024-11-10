
import Link from 'next/link';
import '../styles/globals.css';

const Home = () => (
  <div>
    <h1>Welcome Panget</h1>
    <Link href="/page1">
      <button>Go to Page 1</button>
    </Link>
  </div>
);

export default Home;
