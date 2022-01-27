import logoLight from "../assets/img/Logo light.png"

export default function Footer() {
    return(
        <footer class="bg-gradient-to-r from-orange-900 to-orange-600 text-lime-400 body-font">
            <div class="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 m-auto text-center md:text-left">
                    <div class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <img src={logoLight} alt="Southeast Solar" />
                    </div>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

{/* LINKS */}

                <div class="w-1/2 px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICES</h2>
                    <nav class="list-none mb-10">
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Roof Shampoo</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Skylights</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Third Link</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Roof Leak Repair</div>
                    </li>
                    </nav>
                </div>
                <div class="w-1/2 px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICES</h2>
                    <nav class="list-none mb-10">
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Roof Shampoo</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Skylights</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Third Link</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Roof Leak Repair</div>
                    </li>
                    </nav>
                </div>


                {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">First Link</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Second Link</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Third Link</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Fourth Link</div>
                    </li>
                    </nav>
                </div> */}
                {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">First Link</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Second Link</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Third Link</div>
                    </li>
                    <li>
                        <div class="text-lime-400 hover:text-gray-800">Fourth Link</div>
                    </li>
                    </nav>
                </div> */}
                </div>
            </div>
            <div class="bg-black">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p class="text-lime-400 text-sm text-center sm:text-left">© 2022 Southeast Solar and Roof Solutions
                </p>
                {/* FAVICONS BELOW */}
                {/* <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <div class="text-lime-400">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                    </div>
                    <div class="ml-3 text-lime-400">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                    </div>
                    <div class="ml-3 text-lime-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                    </div>
                    <div class="ml-3 text-lime-400">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                    </div>
                </span> */}
                </div>
            </div>
        </footer>
    )
}