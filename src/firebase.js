/**
 * Created by uran on 2017. 7. 22..
 */
import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBUg7_P0AVmhkGmPxki9mZMMw6tGLDxGXQ',
  authDomain: 'meet-me-by-drawing.firebaseapp.com',
  databaseURL: 'https://meet-me-by-drawing.firebaseio.com',
  projectId: 'meet-me-by-drawing',
  storageBucket: 'meet-me-by-drawing.appspot.com',
  messagingSenderId: '387562231506'
}
const firebaseApp = Firebase.initializeApp(config)
export const db = firebaseApp.database()
