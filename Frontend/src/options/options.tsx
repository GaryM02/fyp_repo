import React, {useState} from "react";
import './options.css'

const Options = () => {
    // State for settings
    const [notifications, setNotifications] = useState<boolean>(true);
    const [theme, setTheme] = useState<string>('light');

    // State for feedback
    const [rating, setRating] = useState<number>(5);
    const [feedback, setFeedback] = useState<string>('');

    // Handlers for settings
    const handleNotificationToggle = () => setNotifications(!notifications);
    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value);

    // Handlers for feedback
    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value));
    const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setFeedback(e.target.value);
    const handleSubmitFeedback = () => {
        alert(`Feedback submitted! Rating: ${rating}, Comment: ${feedback}`);
        setFeedback('');
    };

    return (
        <div className="options-container">
            <h1>Settings & Feedback</h1>

            {/* Settings Section */}
            <section className="settings-section">
                <h2>Settings</h2>
                
                <div className="setting-item">
                    <label htmlFor="notifications">Enable Notifications</label>
                    <input
                        type="checkbox"
                        id="notifications"
                        checked={notifications}
                        onChange={handleNotificationToggle}
                    />
                </div>

                <div className="setting-item">
                    <label htmlFor="theme">Select Theme</label>
                    <select id="theme" value={theme} onChange={handleThemeChange}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System Default</option>
                    </select>
                </div>
            </section>

            {/* Feedback Section */}
            <section className="feedback-section">
                <h2>Feedback</h2>

                <div className="feedback-item">
                    <label htmlFor="rating">Rate Us</label>
                    <input
                        type="range"
                        id="rating"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={handleRatingChange}
                    />
                    <span>{rating}/5</span>
                </div>

                <div className="feedback-item">
                    <label htmlFor="feedback">Your Feedback</label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={handleFeedbackChange}
                        placeholder="Let us know what you think..."
                    />
                </div>

                <button className="submit-button" onClick={handleSubmitFeedback}>Submit Feedback</button>
            </section>
        </div>
    );
};

export default Options;