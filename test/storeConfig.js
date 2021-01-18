export default {
  state: {
    // default posts state
    posts: [
      'remote-working-productivity',
      'page-speed-load-time'
    ],
    // markdown post data
    postData: [
      {
        title: 'Productivity Hacks For Managing Time When Working Remotely',
        thumbnail: '/time_management.svg',
        tags: ['productivity'],
        slug: 'remote-working-productivity/',
        excerpt: 'Time management for remote developers is an important skill. Learn how I manage my time with these productivity hacks while working remotely.',
        date: '2020-12-03',
        timestamp: '[native Date Thu Dec 03 2020 00:00:00 GMT+0000 (Greenwich Mean Time)]'
      },
      {
        title: 'Page speed, Load Time & Conversions',
        thumbnail: '/fast_loading.svg',
        tags: ['web development'],
        slug: 'page-speed-load-time/',
        excerpt: 'Page speed, Load Time & Conversions',
        date: '2020-12-16',
        timestamp: '[native Date Wed Dec 16 2020 00:00:00 GMT+0000 (Greenwich Mean Time)]'
      }
    ]
  },
  getters: {
    sortPostsBydate (state) {
      return state.postData
        .map(post => post)
        .sort((a, b) => b.timestamp - a.timestamp)
    }
  }
  // getters: {
  //   sortPostsBydate: () => [
  //     {
  //       title: 'Page speed, Load Time & Conversions',
  //       thumbnail: '/fast_loading.svg',
  //       tags: ['web development'],
  //       slug: 'page-speed-load-time/',
  //       excerpt: 'Page speed, Load Time & Conversions',
  //       date: '2020-12-16',
  //       timestamp: '[native Date Wed Dec 16 2020 00:00:00 GMT+0000 (Greenwich Mean Time)]'
  //     },
  //     {
  //       title: 'Productivity Hacks For Managing Time When Working Remotely',
  //       thumbnail: '/time_management.svg',
  //       tags: ['productivity'],
  //       slug: 'remote-working-productivity/',
  //       excerpt: 'Time management for remote developers is an important skill. Learn how I manage my time with these productivity hacks while working remotely.',
  //       date: '2020-12-03',
  //       timestamp: '[native Date Thu Dec 03 2020 00:00:00 GMT+0000 (Greenwich Mean Time)]'
  //     }
  //   ]
  // }
}
