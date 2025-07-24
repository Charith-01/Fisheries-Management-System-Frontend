export default function Header() {
    return (
        <header className="w-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg h-[70px] text-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight flex items-center">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 mr-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                        />
                    </svg>
                    MyStore
                </h1>
                
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-blue-200 transition-colors duration-200">Home</a>
                    <a href="#" className="hover:text-blue-200 transition-colors duration-200">Products</a>
                    <a href="#" className="hover:text-blue-200 transition-colors duration-200">About</a>
                    <a href="#" className="hover:text-blue-200 transition-colors duration-200">Contact</a>
                </nav>
                
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors duration-200">
                    Sign In
                </button>
            </div>
        </header>
    )
}