import { Devvit } from '@devvit/public-api';

// ૧. Devvit કોન્ફિગરેશન
Devvit.configure({
  redditAPI: true,
  redis: true,
});

// ૨. મેનુ આઈટમ (તમારું બટન)
Devvit.addMenuItem({
  label: 'CapFilter: Analyze Post',
  location: ['post', 'subreddit'],
  onPress: async (event, context) => {
    
    console.log("🚀 CapFilter Button Clicked!"); 

    try {
      const post = await context.reddit.getPostById(event.targetId);
      const title = post.title.toLowerCase();
      
      const platforms = ['instagram.com', 'tiktok.com', 'twitter.com', 'youtube.com'];
      const isCrossPlatform = platforms.some(p => title.includes(p));
      
      const impactKeywords = ['must watch', 'urgent', 'breaking', 'important'];
      const isHighImpact = impactKeywords.some(word => title.includes(word));
      
      let status = '🎩 Cap Elite';
      if (isCrossPlatform) status = '📱 Cross-Platform Risk';
      else if (isHighImpact) status = '🔥 High Impact';
      
      // ફ્લેર સેટ કરો
      await context.reddit.setPostFlair({
        postId: post.id,
        text: status,
        subredditName: post.subredditName,
      });
      
      context.ui.showToast(`✅ CapFilter Applied: ${status}`);
      console.log(`Success: Flair set to ${status}`);

    } catch (error) {
      console.error("❌ Error running CapFilter:", error);
      context.ui.showToast("❌ Error applying filter.");
    }
  },
});

// ૩. એક્સપોર્ટ (સૌથી જરૂરી - આનાથી જ બટન રજીસ્ટર થાય છે)
export default Devvit;