import React, { useState } from "react";

export function ContactUs() {
    const [opinion, setOpinion] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Prevent multiple submissions while the request is being processed
        if (submitting) {
            return;
        }

        // Set submitting state to true to prevent multiple submissions
        setSubmitting(true);

        try {
            const response = await fetch("http://localhost:3001/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ opinion })
            });

            if (!response.ok) {
                throw new Error("Failed to submit opinion");
            }

            // Clear the input field after successful submission
            setOpinion("");
            alert("Opinion submitted successfully!");
        } catch (error) {
            console.error("Error submitting opinion:", error.message);
            alert("Failed to submit opinion. Please try again later.");
        } finally {
            // Reset submitting state
            setSubmitting(false);
        }
    };

    const handleChange = (event) => {
        setOpinion(event.target.value);
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-3">Thanks for using my website.</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="opinion">Leave Your Opinion or Review:</label>
                    <textarea
                        className="form-control"
                        id="opinion"
                        rows="5"
                        value={opinion}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
