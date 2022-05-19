const firebaseUser = {
  uid: '4omXqNZK1zfBBGwscwI56Z0UTQA3',
  email: 'reza.irisdev@gmail.com',
  emailVerified: true,
  displayName: 'Liam Lincoln',
  isAnonymous: false,
  photoURL:
    'https://lh3.googleusercontent.com/a/AATXAJxEpuT72BKxBdzW6sLYB06VHA-gvpDqFpCe3Mw1=s96-c',
  providerData: [
    {
      providerId: 'password',
      uid: 'reza.irisdev@gmail.com',
      displayName: 'Liam Lincoln',
      email: 'reza.irisdev@gmail.com',
      phoneNumber: null,
      photoURL:
        'https://lh3.googleusercontent.com/a/AATXAJxEpuT72BKxBdzW6sLYB06VHA-gvpDqFpCe3Mw1=s96-c',
    },
  ],
  stsTokenManager: {
    refreshToken:
      'AIwUaOnkbu63n5XaT-W4zbAjGiRggxkliQnHVmwjB7WRUt657bvNpHnPZmPNwrTxBbGT_MMZy8XZ3oU24AyXT4lauBbl0vXj3DZhU8RW0CYafFz3TJHMtGkh8dKYp6-U02mASL8R1hU6scp5Y8z2pEGs4W7iqo7tM49BT9bOYxCuwCzSctWE1iLC_uIfyWOMQFI0lWO_lEl-RIW9XVk4468qd0hRJ998z3GqMyIcEtOF5uuKCbA4Lp0',
    accessToken:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY5N2Q3ZmI1ZGNkZThjZDA0OGQzYzkxNThiNjIwYjY5MTA1MjJiNGQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTGlhbSBMaW5jb2xuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnhFcHVUNzJCS3hCZHpXNnNMWUIwNlZIQS1ndnBEcUZwQ2UzTXcxPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BlcnNvbmFsLXBsYW5pbmciLCJhdWQiOiJwZXJzb25hbC1wbGFuaW5nIiwiYXV0aF90aW1lIjoxNjUyODc0NTM2LCJ1c2VyX2lkIjoiNG9tWHFOWksxemZCQkd3c2N3STU2WjBVVFFBMyIsInN1YiI6IjRvbVhxTlpLMXpmQkJHd3Njd0k1NlowVVRRQTMiLCJpYXQiOjE2NTI4NzQ1MzYsImV4cCI6MTY1Mjg3ODEzNiwiZW1haWwiOiJyZXphLmlyaXNkZXZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicmV6YS5pcmlzZGV2QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KaJNA07ByVBhYf7z4Tk_SnIM2KBY2bo_u42LGZiL2TvQ5bvtrd6_Yv0A1NIxBH5QIWTzXsNOuaQZH9u9hqe2BPCeiiFWZ7X65tYA1HNfZ_rs6TVERR19ah-tDFSH_tgh3ONxI6VqumvLPLnCLkiYemIhEVuqYSgqwSuNaFy0qogcnoOwcW_EfBVhAVApOkbfICDAaDsZ_2HAPm-xOtcqrJeaSJdBKRrMExm-nNClenkWJodHoKiIYxoz8mBFm2ikwo5kjPsBS2NNukodDIDDrYzWXo3XC2KiGRwMTnpbzyWTGBkBnzb_DS8M1d2JTCM0g-GWFnmX8UiZO3GIBDzeig',
    expirationTime: 1652878133538,
  },
  createdAt: '1652860638065',
  lastLoginAt: '1652874532443',
  apiKey: 'AIzaSyDKNITUlg28OgpSzwK1lfRT2UkA7nNUFMM',
  appName: '[DEFAULT]',
};

interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

// const { uid, displayName, email, photoURL } = firebaseUser
// const user: User = { uid, displayName, email, photoURL }

function getUser() {
  const obj: any = {};

  obj.name = 'Ali';
  obj.age = 22;

  return obj;
}

const myFunc = getUser;

// console.log(myFunc);

// const numbers = [2, 3, 5, 16];
// numbers.forEach();

interface Todo {
  title: string;
}

const sayHello = (todo: Todo) => {
  console.log('Hi ' + todo.title);
};

// sayHello({ title: 'Test' });

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()).then(sayHello)

// function count(callback: any) {
//   console.log(1);
//   console.log(2);
//   console.log(3);

//   console.log(5);
//   console.log(6);
//   callback(12);
// }

// count((n: number) => {
//   console.log('%c' + n, 'color: cyan; font-weight: bold; font-size: 18px;');
// });

// count((n: number) => {
//   console.log('%c' + n, 'color: red; font-weight: bold; font-size: 18px;');
// });

// (() => {
//   (window as any).$ = (q: string) => document.querySelector(q);
// })();
