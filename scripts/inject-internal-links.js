const fs = require('fs');
const path = require('path');

const postsFilePath = path.join(__dirname, '..', 'data', 'blogPosts.json');
const posts = JSON.parse(fs.readFileSync(postsFilePath, 'utf8'));

const linksMap = {
  'devastate-on-pc': [
    {
      target: 'Devastate is an Android game, but you can also run it on a Windows PC with a compatible Android emulator.',
      insertAfter: ' For the complete official release and specs, visit the [Devastate APK download and anime interactive simulation guide](/).',
    },
    {
      target: 'Devastate uses touch controls',
      insertAfter: ' For mobile input guidance, refer to the [Devastate APK Touch Controls and Navigation Guide](/blog/devastate-apk-controls).',
    },
    {
      target: 'adjust its RAM settings',
      insertAfter: ' You can also read our [Devastate APK Performance & Hardware Guide](/blog/devastate-apk-performance) for optimal frame rates.',
    }
  ],
  'devastate-apk-permissions': [
    {
      target: 'Internet access is common among mobile games.',
      insertAfter: '\n\nIf you plan to play without Wi-Fi or mobile data, check our detailed guide on [Devastate Offline Gameplay and What Works Without Internet](/blog/devastate-offline-gameplay).',
    },
    {
      target: 'What to Check Before You Install Devastate APK',
      insertAfter: '\n\nTo ensure your phone meets the minimum OS and hardware specifications, visit the [Devastate APK Compatibility and Android Phone Guide](/blog/devastate-apk-compatibility). For the complete official release, read the [Devastate APK download and anime interactive simulation guide](/).',
    }
  ],
  'devastate-offline-gameplay': [
    {
      target: 'What Can You Do Offline?',
      insertAfter: '\n\nTo explore the full story, daily tasks, and item systems, see our complete [Devastate APK Gameplay Features & Activities Overview](/blog/devastate-apk-gameplay).',
    },
    {
      target: 'Why Does Devastate Need Internet Access?',
      insertAfter: '\n\nFor an in-depth breakdown of network and storage permissions, review [Devastate APK Permissions and Security Details](/blog/devastate-apk-permissions). You can also run the game on a desktop screen by checking [Devastate on PC: How to Play on Windows](/blog/devastate-on-pc).',
    }
  ],
  'devastate-apk-not-working': [
    {
      target: 'Can Low Storage Affect Devastate?',
      insertAfter: ' To properly manage disk space and cache, read [Devastate APK Storage Requirements: How Much Space Do You Need?](/blog/devastate-apk-storage).',
    },
    {
      target: 'Does Android Version Matter?',
      insertAfter: ' You can verify supported models in the [Devastate APK Android Compatibility Guide](/blog/devastate-apk-compatibility) or download a verified build from the [Devastate APK download and anime interactive simulation guide](/).',
    },
    {
      target: "Devastate APK Won't Install",
      insertAfter: '\n\nIf an update is causing issues, review the [Devastate APK Updates & Changelog Guide](/blog/devastate-apk-updates) for version history.',
    }
  ],
  'devastate-apk-updates': [
    {
      target: 'What Changed in Devastate Version 1.0?',
      insertAfter: '\n\nTo understand all available character mechanics, dialogues, and coin rewards, explore our [Devastate APK Gameplay and Character Guide](/blog/devastate-apk-gameplay).',
    },
    {
      target: 'What If the New Update Won’t Install?',
      insertAfter: '\n\nFor step-by-step troubleshooting, consult our guide on [Devastate APK Not Working: Common Fixes](/blog/devastate-apk-not-working). To download the verified original file, visit the [Devastate APK download and anime interactive simulation guide](/).',
    }
  ],
  'devastate-apk-compatibility': [
    {
      target: 'Android Phones With Limited Hardware',
      insertAfter: '\n\nFor tips on optimizing frame rates and memory, read our [Devastate APK Performance Guide on Android](/blog/devastate-apk-performance).',
    },
    {
      target: 'Free Storage Matters',
      insertAfter: ' Learn how much space the APK, cache, and save files take in our [Devastate APK Storage Requirements Guide](/blog/devastate-apk-storage).',
    },
    {
      target: 'Tips for Better Compatibility',
      insertAfter: '\n\nIf your mobile hardware is older, you can also run the game on a desktop monitor with mouse controls using our [Devastate on PC Windows Setup Guide](/blog/devastate-on-pc).',
    }
  ],
  'devastate-apk-storage': [
    {
      target: 'How Much Space Does Devastate APK Need?',
      insertAfter: '\n\nBefore downloading, verify supported Android versions in our [Devastate APK Compatibility Guide](/blog/devastate-apk-compatibility) or check the main [Devastate APK download and anime interactive simulation guide](/).',
    },
    {
      target: 'Game Performance Can Suffer',
      insertAfter: ' Discover how storage and memory impact gameplay speed in our [Devastate APK Performance Breakdown](/blog/devastate-apk-performance).',
    },
    {
      target: 'Installation May Fail',
      insertAfter: ' If low storage causes install failures, check [Devastate APK Not Working: Common Fixes](/blog/devastate-apk-not-working).',
    }
  ],
  'devastate-apk-performance': [
    {
      target: 'Performance on Older Phones',
      insertAfter: '\n\nIf your phone struggles, you can experience the visual novel scenes with smoother framerates on a computer by following [Devastate on PC: How to Play on Windows](/blog/devastate-on-pc).',
    },
    {
      target: 'Does Devastate Use a Lot of Battery?',
      insertAfter: ' You can save battery and data by checking our guide on [Devastate Offline Gameplay Features](/blog/devastate-offline-gameplay).',
    },
    {
      target: 'Tips for a Better Experience',
      insertAfter: '\n\nFor responsive navigation, check [Devastate APK Controls: How to Play on Android](/blog/devastate-apk-controls) and visit the [Devastate APK download and anime interactive simulation guide](/).',
    }
  ],
  'devastate-apk-gameplay': [
    {
      target: 'Devastate is an Android anime-style',
      insertAfter: ' For the complete homepage and official releases, visit the [Devastate APK download and anime interactive simulation guide](/).',
    },
    {
      target: 'Easy Touch-Based Gameplay',
      insertAfter: '\n\nFor a detailed walkthrough of menus and gestures, read [Devastate APK Controls: How to Play on Android](/blog/devastate-apk-controls).',
    },
    {
      target: 'Daily Tasks and Coin Rewards',
      insertAfter: ' Learn how to play without an internet connection in our [Devastate Offline Gameplay Guide](/blog/devastate-offline-gameplay).',
    }
  ],
  'devastate-apk-controls': [
    {
      target: 'Devastate is an Android simulation game',
      insertAfter: ' To explore story elements and daily tasks, visit our [Devastate APK Gameplay and Features Guide](/blog/devastate-apk-gameplay).',
    },
    {
      target: 'Playing Devastate With Mouse and Keyboard on PC',
      insertAfter: '\n\nFor a full step-by-step emulator setup, read [Devastate on PC: How to Play on Windows](/blog/devastate-on-pc).',
    },
    {
      target: "Touch Controls Don't Respond",
      insertAfter: ' For additional error solutions and crash fixes, check [Devastate APK Not Working: Common Fixes](/blog/devastate-apk-not-working).',
    }
  ]
};

let modifiedCount = 0;
posts.forEach(post => {
  const rules = linksMap[post.slug];
  if (rules) {
    rules.forEach(rule => {
      if (post.content.includes(rule.target) && !post.content.includes(rule.insertAfter.trim())) {
        post.content = post.content.replace(rule.target, rule.target + rule.insertAfter);
        modifiedCount++;
      }
    });
  }
});

fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
console.log('Successfully updated blog posts with internal links! Total modifications:', modifiedCount);
