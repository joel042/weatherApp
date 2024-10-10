import React from 'react'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <div>
      <footer className="  text-gray-700 py-4 mt-[200px]">
        <div className="container mx-auto px-4 flex justify-center">
          <p>&copy; {year} made with love by Uchenna joel Eze</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer