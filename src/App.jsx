import './App.css';
import { CakeView } from './features/cake/CakeView';
import { IcecreamView } from './features/icecream/IcecreamView';
import { UserView } from './features/user/UserView';
import { PostView } from './features/post/PostView';

function App() {
  return (
    <>
      <div>
        <CakeView />
        <IcecreamView />
        <UserView />
        <PostView />
      </div>
    </>
  );
}

export default App;
