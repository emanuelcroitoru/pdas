import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
	return (
		<div>
			<section className='hero is-primary'>
				<div className='hero-body'>
					<p className='title'>
						Personal Digital Assistants
					</p>
				</div>
			</section>
			<div className='container'>
				<section className='section'>
					<div className='columns'>
						<div className='column is-one-third'>
							<ProfileCard
								title="Alexa"
								handle="@alexa91"
								image={AlexaImage}
								description="Alexa was created by Amazon and helps you buy thing"
							/>
						</div>
						<div className='column is-one-third'>
							<ProfileCard
								title="Cortana"
								handle="@cortana32"
								image={CortanaImage}
								description="Cortana was made by Microsoft, who knows what it does?"
							/>
						</div>
						<div className='column is-one-third'>
							<ProfileCard
								title="Siri"
								handle="@siri21"
								image={SiriImage}
								description="Siri was made by Apple and is being passed out"
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default App;