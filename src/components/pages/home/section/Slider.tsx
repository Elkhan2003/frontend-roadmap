"use client";
import { FC } from "react";
import scss from "./Slider.module.scss";
import Image from "next/image";

const newsData = [
	{
		id: 1,
		title: "Breaking News: Tech Innovation",
		image:
			"https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
		category: "Technology",
	},
	{
		id: 2,
		title: "Global Markets Update",
		image:
			"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
		category: "Finance",
	},
	{
		id: 3,
		title: "Science Breakthrough",
		image:
			"https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
		category: "Science",
	},
	{
		id: 4,
		title: "Sports Championship",
		image:
			"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
		category: "Sports",
	},
	{
		id: 5,
		title: "Entertainment Industry",
		image:
			"https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
		category: "Entertainment",
	},
	{
		id: 6,
		title: "Climate Action Report",
		image:
			"https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=600&fit=crop",
		category: "Environment",
	},
	{
		id: 7,
		title: "Politics & Policy",
		image:
			"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop",
		category: "Politics",
	},
	{
		id: 8,
		title: "Health & Wellness",
		image:
			"https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop",
		category: "Health",
	},
	{
		id: 9,
		title: "Travel Destinations",
		image:
			"https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
		category: "Travel",
	},
	{
		id: 10,
		title: "Business Insights",
		image:
			"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
		category: "Business",
	},
];

export const Slider: FC = () => {
	return (
		<section className={scss.Slider}>
			<div className="container">
				<div className={scss.content}>
					<h2 className={scss.title}>Latest News</h2>
					<div className={scss.sliderWrapper}>
						<div className={scss.sliderContainer}>
							{newsData.map((news) => (
								<div key={news.id} className={scss.newsCard}>
									<div className={scss.imageWrapper}>
										<Image
											src={news.image}
											alt={news.title}
											width={800}
											height={600}
											className={scss.image}
										/>
									</div>
									<div className={scss.cardContent}>
										<span className={scss.category}>{news.category}</span>
										<h3 className={scss.newsTitle}>{news.title}</h3>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
