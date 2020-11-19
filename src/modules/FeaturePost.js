import React from 'react';
import './Jumbotron.css';
const FeaturePost = ({ item }) => {
	console.log('fp', item);
	let Posts = item.customFields.posts.map(post =>{
		return (
		<li> { post.customFields.title }</li>
		)
	});
	return (
		<section className="jumbotron">
			<h1>{item.customFields.title}</h1>
			<ul>
				{ Posts }
			</ul>
		</section>
	);
}
export default FeaturePost; 