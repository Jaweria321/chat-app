import './App.css';
import Chat from './components/Chat';
import ChatList from './components/ChatList';
import ChatListItem from './components/ChatListItem';
import ChatMessage from './components/ChatMessage';
import Header from './components/Header';
import SideBar from './components/SideBar';
import UserDetailComponent from './components/UserDetailComponent';
import UserProfileCard from './components/UserProfileCard';
import UserProfileDetail from './components/UserProfileDetail';
function App() {
  return (
      <div className='font-avenir'>
        <header>
          <Header />
        </header>
        <main className='flex'>
          <div>
          <SideBar />
          </div>
          <div className="">
          <ChatList />
          </div>
          <div className='flex'>
            <Chat />
            <UserDetailComponent />
          </div>
        </main>
        

        {/* <UserProfileDetail />
        <Header />
        <UserProfileCard />
        <div style={{height: '200px'}}></div>
        <ChatMessage />
        <SideBar />
        <ChatListItem />
        <ChatList /> */}

      </div>
  );
}

export default App;
