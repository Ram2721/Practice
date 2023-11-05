// import logo from './logo.svg';
// import './App.css';   
import './assets/stylesheet.css'; // import css
import NavigationButton from './NavigationButton';
import Post from './Post';
import Trend from './Trend';
import { ButtonsList, PostsList, Trends } from './data.js';

function App() {
	return (
		<div>
			{/* header */}
			<div className="header">
				🏀 BALL UPDATES 🏀
			</div>
			{/* flex container */}
			<div id="main-elements" class="flex-container"> 
				{/* Navigation panel */}
				<div class="tabs">
					<NavigationButton data={ButtonsList}/>
				</div>

				{/* Posts section */}
				<div className="wrapped" id='posts-section'>
					{/* form */}
					<form>
						<input type='text' className='formInput' placeholder="What's happening?"/>
					</form>

					{/* button */}
					<button class="button" type='submit'>POST!</button>
					<br/>

					{/* posts (each is a separate component) */}
					<Post data={PostsList}/>
				</div>
				
				{/* trends */}
				<div className='trends-section'>
					<Trend data={Trends}/>
				</div>
			</div>
		</div>
	);
}

export default App;
