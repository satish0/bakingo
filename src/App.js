import './App.css';
import HomeBanner from '../src/component/homebanner/HomeBanner'
import Header from './component/includes/header/Header';
import GiftSection from './component/giftsection/GiftSection';
import MoreGiftSection from './component/moreGiftSection/MoreGiftSection';
import ConfessionStories from './component/confessionStories/ConfessionStories';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <GiftSection />
      <MoreGiftSection />
      <ConfessionStories />
    </div>
  );
}

export default App;
