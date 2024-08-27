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

export const filterMatchText = (email: string) => {
  const beforeAtLetterRegex = /^[^@]+/;
  const afterAtLetterRegex = /(?<=@).+/;
  const beforeMathcedRegex = email.match(beforeAtLetterRegex);
  const afterMatchedRegex = email.match(afterAtLetterRegex);
  if (beforeMathcedRegex !== null && afterMatchedRegex !== null) {
    const email = beforeMathcedRegex[beforeMathcedRegex.length - 1];
    const domain = afterMatchedRegex[afterMatchedRegex.length - 1];
    return {
      email,
      domain,
    };
  }
  if (beforeMathcedRegex !== null && afterMatchedRegex === null) {
    return {
      email,
      domain: '',
    };
  }
  if (beforeMathcedRegex === null && afterMatchedRegex === null) {
    return {
      email: '',
      domain: '',
    };
  }
};

// export const emailProcessTwo = (email: string) => {
//   const beforeAtLetterRegex = /^[^@]+/;
//   const afterAtLetterRegex = /(?<=@).+/;
//   const google = 'gmail.com';

//   const beforeMathcedRegex = email.match(beforeAtLetterRegex);

//   const afterMatchedRegex = email.match(afterAtLetterRegex);
//   if (beforeMathcedRegex && afterMatchedRegex) {
//     const email = beforeMathcedRegex[beforeMathcedRegex.length - 1];
//     const domain = afterMatchedRegex[afterMatchedRegex.length - 1];
//     console.log('하이', google.includes(domain), '나는야 도메인', domain);
//     if (google.includes(domain)) {
//       return `${email}@${google}`;
//     }
//   }
// };

type Data = {
  domain: string;
  email: string;
};
export const emailProcessTwo = (data: Data | undefined) => {
  const google = 'gmail.com';
  if (data) {
    const {domain, email} = data;
    if (google.includes(domain)) {
      return `${email}@${google}`;
    }
  }
};
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
