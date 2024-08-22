// // action API return값
// import {saveNonStringItemToStorage} from '@/utils/storage';
// import {PayloadAction} from '@reduxjs/toolkit';
// export type KaKaoAuthPayload = {
//   status: null | number;
//   message: string;
//   kakaoId: string;
//   kakaoEmail: string;
//   kakaoNickName: string;
//   profileImageUrl: string;
//   thumbnailImageUrl: string;
//   accessToken: string;
//   refreshToken: string;
// };
// export const KaKaoAuthInitialState = {
//   id: '',
//   accessToken: null,
//   refreshToken: null,
//   email: '',
//   username: '',
//   profileImageUrl: '',
//   thumbnailImageUrl: '',
//   // login
//   kakaoLoginStatus: null,
//   kakaoLoginMessage: '',
//   // logout
//   kakaLogoutStatus: null,
//   kakaoLogoutMessage: '',
// };
// export default function kakaoAuthReducer(
//   state = KaKaoAuthInitialState,
//   action: PayloadAction<KaKaoAuthPayload>,
// ) {
//   switch (action.type) {
//     case 'KAKAO/LOGIN/pending': {
//       console.log('카카오 로그인이 펜딩중이댜아아');
//       return {
//         ...state,
//       };
//     }
//     case 'KAKAO/LOGIN/fulfilled': {
//       console.log('카카오 로그인이 성고오옹 하였습니다');
//       const {
//         status,
//         message,
//         kakaoId,
//         kakaoEmail,
//         kakaoNickName,
//         profileImageUrl,
//         thumbnailImageUrl,
//         accessToken,
//         refreshToken,
//       } = action.payload;
//       saveNonStringItemToStorage({
//         key: 'kakao_user',
//         saveValue: {
//           kakaoId,
//           kakaoNickName,
//           kakaoEmail,
//           profileImageUrl,
//           thumbnailImageUrl,
//           accessToken,
//           refreshToken,
//         },
//       });
//       return {
//         ...state,
//         id: kakaoId,
//         username: kakaoNickName,
//         email: kakaoEmail,
//         profileImageUrl,
//         thumbnailImageUrl,
//         accessToken,
//         refreshToken,
//         kakaoLoginStatus: status,
//         kakaoLoginMessage: message,
//       };
//     }
//     case 'KAKAO/LOGIN/rejected': {
//       const {status, message} = action.payload;
//       return {
//         ...KaKaoAuthInitialState,
//         kakaoLoginStatus: status,
//         kakaoLoginMessage: message,
//       };
//     }
//     case 'KaKaoAuth/reset': {
//       return KaKaoAuthInitialState;
//     }
//     default:
//       return state;
//   }
// }
