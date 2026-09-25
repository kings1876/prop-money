import { Review } from '../types';

export const TRUSTPILOT_STATS = {
  averageRating: 4.9,
  totalReviews: 2148,
  starDistribution: {
    fiveStar: 96,
    fourStar: 3,
    threeStar: 1,
    twoStar: 0,
    oneStar: 0
  },
  trustScoreText: 'Excellent',
  verifiedBuyerRate: '100% Verified Production Orders'
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Mark Campbell',
    role: 'Key Grip & Scenic Coordinator',
    location: 'Sydney, New South Wales',
    production: 'Stan Original Series Production',
    rating: 5,
    title: 'Outstanding camera presence on our Sydney crime drama shoot',
    comment: 'We needed approximately $250k in staged currency for a safe cracking scene. The polymer feel and anti-glare finish meant our lighting team had zero issues with blown-out reflections under the Arri SkyPanels. The legal markings are subtle enough that in tight macro shots they look completely authentic while keeping our legal counsel happy.',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Sarah Jenkins',
    role: 'Art Director',
    location: 'Melbourne, Victoria',
    production: 'Feature Film Drama (Docklands Studios)',
    rating: 5,
    title: 'Best prop money in Australia by a mile',
    comment: 'Having ordered props from overseas in the past that got seized by Australian Customs or looked like cheap monopoly money, Australia Prop Money is a lifesaver. Arrived in Melbourne within 24 hours via Express. Handled by our lead actors during a tense bank counter scene with zero tearing.',
    date: '1 month ago',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Liam Henderson',
    role: 'Music Video Director',
    location: 'Brisbane, Queensland',
    production: 'Sony Music Australia Artist Video',
    rating: 5,
    title: 'The Stunt Pack runs through money guns like butter',
    comment: 'Grabbed the 500-note Music Video Stunt Pack. If you have ever tried running ordinary paper through a money cannon, you know it jams immediately. These polymer notes did not jam once during four separate 240fps slow-motion takes. Our artist and label were stoked with the final cut.',
    date: '3 weeks ago',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'David Kowalski',
    role: 'Lead Experience Designer',
    location: 'Gold Coast, Queensland',
    production: 'Heist Escape Rooms Australia',
    rating: 5,
    title: 'Durable enough to survive hundreds of escape room puzzle teams',
    comment: 'Our players literally tear through rooms looking for clues. Most paper props get shredded within a week. We ordered 10 stacks of the $100 and $50 notes eight months ago and they are still in pristine condition inside our vault props. Excellent quality.',
    date: '2 months ago',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Olivia Torres',
    role: 'Independent Producer',
    location: 'Adelaide, South Australia',
    production: 'SA Screen Short Film Award Nominee',
    rating: 5,
    title: '10% Crypto discount made checkout effortless',
    comment: 'Paid with USDT and got the 10% instant discount. Order was dispatched same afternoon and arrived in Adelaide on Wednesday morning. The packaging was discrete and weather-sealed. Highly recommend for any indie budget looking for maximum production value.',
    date: '1 month ago',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Tyson McCarthy',
    role: 'Theatrical Stage Manager',
    location: 'Perth, Western Australia',
    production: 'His Majesty’s Theatre Production',
    rating: 5,
    title: 'Flawless stage presence and compliant legal markings',
    comment: 'Stage lighting is brutal on cheap props. These notes have the exact distinctive translucent look of real Australian banknotes from the third row. The Reserve Bank reproduction disclaimers protect our company completely.',
    date: '2 months ago',
    verified: true
  },
  {
    id: 'rev-7',
    author: 'Chloe Vance',
    role: 'Security Training Coordinator',
    location: 'Canberra, ACT',
    production: 'Financial Services Institute of Australia',
    rating: 5,
    title: 'Ideal for anti-robbery cashier training workshops',
    comment: 'We simulate sudden cash snatching and register counts during our corporate retail safety courses. These props let our trainees practice accurate counting cadence and bundle handling without the immense security risk of real currency.',
    date: '3 months ago',
    verified: true
  },
  {
    id: 'rev-8',
    author: 'Jack MacIntyre',
    role: 'Commercial Photographer',
    location: 'Hobart, Tasmania',
    production: 'Editorial Luxury Brand Campaign',
    rating: 5,
    title: 'The High-Roller Briefcase was the hero of our shoot',
    comment: 'The briefcase alone is worth the money. Solid metal construction, crisp combination locks, and when you pop it open to reveal $250k in strapped stacks, the entire studio goes quiet. Client signed off immediately.',
    date: '3 months ago',
    verified: true
  }
];
