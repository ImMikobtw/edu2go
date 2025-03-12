import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/ReviewsSlider.css";
import defaultAvatar from "../assets/default-avatar.png";

export function ReviewsSlider() {
    const [reviews, setReviews] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = "#"; 

        async function fetchReviews() {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch reviews");
                }
                const data = await response.json();
                
                const processedData = data.map(review => ({
                    ...review,
                    avatar: review.avatar || defaultAvatar
                }));

                setReviews(processedData);
            } catch (err) {
                console.error("Error loading reviews:", err);
                setError("Failed to load reviews");
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, []);

    useEffect(() => {
        if (reviews.length > 0) {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % reviews.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [reviews]);

    if (loading) return <div className="reviewsSlider">Loading...</div>;
    if (error) return <div className="reviewsSlider error">{error}</div>;

    return (
        <div className="reviewsSlider">
            <AnimatePresence mode="wait">
                {reviews.length > 0 && (
                    <motion.div 
                        key={reviews[index].id}
                        className="reviewSlide"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img 
                            src={reviews[index].avatar} 
                            alt={reviews[index].name} 
                            className="reviewAvatar" 
                        />
                        <p className="reviewText">"{reviews[index].text}"</p>
                        <p className="reviewAuthor">- {reviews[index].name}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="reviewsDots">
                {reviews.map((_, i) => (
                    <span key={i} className={i === index ? "dot active" : "dot"}>●</span>
                ))}
            </div>
        </div>
    );
}
