'use client'

export function SpecialButton() {
  const handleClick = () => {
    window.location.href = '/nonexistent'
  }

  return (
    <button 
      onClick={handleClick} 
      className="inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors ml-3"
    >
      Special Link
    </button>
  )
} 