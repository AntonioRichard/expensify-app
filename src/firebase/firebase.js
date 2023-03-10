import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// //child_removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses')
//     .on('value', (snapshot)=>{
//         const expenses = [];
    
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
    
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 300,
//     createdAt: 0
// });



// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native Angular'
// });

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot)=>{
//     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
// });

// setTimeout(()=>{
//     database.ref('name').set('Robi');
// }, 2000);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Antonio',
//     age: 21,
//     job: 'Software developer',
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Oradea',
//         country: 'Romania'
//     }
// }).then(()=>{
//     console.log('Data is saved!');
// }).catch((error)=>{
//     console.log('error:', error)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatttle'
// });

// database.ref()
// .remove()
// .then(()=>{
//     console.log('Data was removed');
// })
// .catch((e)=>{
//     console.log('Did not remove data', e);
// });