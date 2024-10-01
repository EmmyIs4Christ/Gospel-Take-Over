import React, { useState } from "react";

const ShareButton = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCopyUrl = () => {
    const url = window.location.href; // Get the current page URL
    navigator.clipboard.writeText(url); // Copy to clipboard
    toggleModal();
    alert("URL copied to clipboard!");
  };

  document.addEventListener("scroll", () => {
    setShowModal(false);
  });

  // document.addEventListener("click", (event) => {
  //   if (!event.target.contains(document.getElementById("shareHouse"))) {
  //     setShowModal(false);
  //   }
  //   console.log(
  //     event.target,
  //     !event.target.contains(document.getElementById("shareHouse"))
  //   );
  // });

  const handleShare = async () => {
    toggleModal();
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title, // Use the page title
          url: window.location.href, // Use the current page URL
        });
        // alert("Thanks for sharing!");
      } catch (error) {
        alert("Sharing failed.");
      }
    } else {
      alert("Web share API is not supported in this browser.");
    }
  };

  return (
    <div id="shareHouse" className="relative">
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Share
      </button>

      {/* Small side modal */}
      {showModal && (
        <div className="absolute top-0 left-[72px] bg-black py-4 shadow-lg">
          <button
            onClick={handleCopyUrl}
            className="w-full block mb-2 px-3 py-2 bg-[#121212] text-white hover:bg-blue-600"
          >
            Copy URL
          </button>
          <button
            onClick={handleShare}
            className="w-full block mb-2 px-3 py-2 bg-[#121212] text-white hover:bg-blue-600"
          >
            Share
          </button>
          <button
            onClick={toggleModal}
            className="w-full block px-2 py-3 bg-[#121212] text-white hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
