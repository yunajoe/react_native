export const images = [
  {
    id: 1,
    image: require('../assets/images/syqypv1486981727.jpg'),
    title: '이미지1',
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
  {
    id: 2,
    image: require('../assets/images/sywswr1511383814.jpg'),
    title: '이미지2',
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
  {
    id: 3,
    image: require('../assets/images/ywwrsp1511720277.jpg'),
    title: '이미지3',
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
  {
    id: 4,
    image: require('../assets/images/vdwloy1713225718.jpg'),
    title: '이미지4',
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
  {
    id: 5,
    image: require('../assets/images/wyrqqq1468233628.jpg'),
    title: '이미지5',
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
];

export const emailProcessing = (index: number) => {
  let email;
  switch (index) {
    case 0:
      email = 'gmail.com';
      break;
    case 1:
      email = 'naver.com';
      break;
    case 2:
      email = 'daum.net';
      break;
    case 3:
      email = 'kakao.com';
      break;
    case 4:
      email = 'hanmail.net';
      break;
    case 5:
      email = 'icloud.com';
      break;
    case 6:
      email = 'nate.com';
      break;
    case 7:
      email = 'hotmail.com';
      break;
  }
  return email;
};
