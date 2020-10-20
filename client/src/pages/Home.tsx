import * as React from 'react';
import Header from '../containers/Header'
import Gallery from '../containers/Gallery'
import Timeline from '../containers/Timeline'
const Home:React.FC = ()=>{
	return <main>
	 <Header />
	 <Gallery />
	 <Timeline />
	</main>
}
export default Home;