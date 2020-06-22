// api enums

export const apiURL =
  'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';

// test enums

export const unformattedBooksArray = [
  {
    volumeInfo: {
      title: "Tom's Test Literature",
      authors: ['Chris', 'Mary'],
      publisher: "Tom's Books",
      publishedDate: '2020-06-11',
      other: 'extra stuff',
    },
  },
  {
    volumeInfo: {
      title: "Tom's SAT Prep",
      authors: ['Chris', 'Mary'],
      publisher: "Tom's Books",
      publishedDate: '2020-06-11',
      more: "You don't need this",
    },
  },
];

export const formattedBooksArray = [
  {
    title: "Tom's Test Literature",
    authors: 'Chris, Mary',
    publisher: "Tom's Books",
    publishedDate: '2020-06-11',
  },
  {
    title: "Tom's SAT Prep",
    authors: 'Chris, Mary',
    publisher: "Tom's Books",
    publishedDate: '2020-06-11',
  },
];
