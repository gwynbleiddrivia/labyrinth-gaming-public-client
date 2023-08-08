import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
   const reviews = [ {
    id: '1',
    reviewerImage: "https://i.ibb.co/FHfsKm7/player-1.png",
    reviewerTitle:'Carlos Rodriguez',
    reviewText: "Eclectic toy collections amazed me, from classic to modern. Blog insights were delightful. It's a haven for collectors. This site is a treasure trove for toy enthusiasts!"
  },
  {
    id: '2',
    reviewerImage: 'https://i.ibb.co/LhKBMrR/player-2.png',
    reviewerTitle:'Ravi Gupta',
    reviewText: "Stunning website design, navigating feels seamless. Every section is user-friendly. Blog articles enhance the experience. The aesthetic elevates the joy of shopping for these games."
  },
  {
    id: '3',
    reviewerImage: 'https://i.ibb.co/6HHHf4f/player-3.png',
    reviewerTitle: 'Malik Khan',
    reviewText: "Impressive product management—smooth checkout, timely updates. The blog answers questions. Quality assurance is evident. Every puzzle and board game purchased has been a delight. Strongly recommend their service."
  }]
	return (
		<div className="backdrop-opacity-10 backdrop-invert bg-white/10 flex md:flex-row flex-col justify-between mt-5 mb-5">
			{
				reviews.map(review=>{
					return <div key={review.id} className="border rounded p-5 mt-2">
						<img className="h-10 w-10" src={review.reviewerImage} alt=""/>
						<div className="text-start mt-2 w-64 mx-auto text-sm">{review.reviewerTitle}</div>
						<FaQuoteLeft></FaQuoteLeft>
						<div className="text-start mt-2 w-64 mx-auto text-sm">{review.reviewText}</div>
						<FaQuoteRight></FaQuoteRight>  

					</div>
				})

			}

		</div>
	);
};

export default Reviews;
