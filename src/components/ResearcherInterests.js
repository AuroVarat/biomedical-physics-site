import { useState } from 'react';

const ResearcherInterests = ({ interests }) => {
    const [expanded, setExpanded] = useState(false);
    const interestsArray = interests.split(',').map((interest) => interest.trim());

    const limit = 2; // Show first 5 interests, rest are hidden until expanded
    const visibleInterests = expanded ? interestsArray : interestsArray.slice(0, limit);

    return (
        <div className="text-gray-700 text-sm mb-2">
            <div className="flex flex-wrap mt-2">
                {visibleInterests.map((interest, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full"
                    >
            {interest}
          </span>
                ))}
            </div>

            {/* Only show the button if the number of interests exceeds the limit */}
            {interestsArray.length > limit && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-blue-500 text-xs font-semibold hover:underline mt-2"
                >
                    {expanded ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    );
};

export default ResearcherInterests;
