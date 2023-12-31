function Intro () {
  const handleExploreClick = () => {
    const charactersSection = document.getElementById('characters')

    if (charactersSection) {
      const offsetTop = charactersSection.offsetTop

      const duration = 1000

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
        duration: duration
      })
    }
  }

  return (
    <div className='intro h-screen mt-40 flex items-center justify-center text-white'>
      <div className='intro text-center max-w-2xl p-8 animate-fadeIn'>
        <p className='text-4xl font-bold mb-8 animate-fadeIn'>
          Discover the Magic of Disney Characters
        </p>
        <p className='text-lg mb-12 animate-fadeIn'>
          Embark on a journey into captivating tales and beloved names that have
          enchanted audiences globally. Immerse yourself in the enchantment and
          let the timeless stories unfold at your fingertips!
        </p>
        <button
          className='bg-button text-white py-3 px-6 rounded-full hover:bg-btnHover transition-colors cursor-pointer'
          onClick={handleExploreClick}
        >
          Explore Characters
        </button>
      </div>
    </div>
  )
}

export default Intro
