import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'

export function App(){
    const formatUserName = (userName) => {`@${userName}`}
    
    return (
    <section className='App'>
    <TwitterFollowCard formatUserName={formatUserName} userName="Jesus" name="Jesus" isFollowing={true} />
    <TwitterFollowCard formatUserName={formatUserName} userName="jose" name="Jose" isFollowing={false} />
    <TwitterFollowCard formatUserName={formatUserName} userName="michel" name="Michel" isFollowing={true} />
    <TwitterFollowCard formatUserName={formatUserName} userName="rosa" name="Rosa" isFollowing={false} />
    </section>
    ) 
}