import './App.css';
import Chat from './components/Chat';
import ChatList from './components/ChatList';
import ChatListItem from './components/ChatListItem';
import ChatMessage from './components/ChatMessage';
import Header from './components/Header';
import SideBar from './components/SideBar';
import UserDetailComponent from './components/UserDetailComponent';
function App() {
  return (
      <div className='font-avenir h-screen overflow-hidden'>
        <header>
          <Header />
        </header>
        <main className='flex h-full'>
          <SideBar />
          <ChatList />
          <div className='flex flex-auto h-full'>
            <Chat />
            <UserDetailComponent />
          </div>
        </main>
      </div>
  );
}

export default App;
