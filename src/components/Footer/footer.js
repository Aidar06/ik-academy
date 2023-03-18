import React from 'react';

const Footer = () => {
    return (

        <footer id="footer bg-white dark:bg-gray-900">
            <div className="mx-auto w-full container p-4 sm:p-6">
                <div className="footer md:flex md:justify-between">
                    <div className="footer--img mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img width={50} style={{borderRadius: '50%'}} src="data:image/png;base64,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" alt="img"/>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IK Academy
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow
                                us</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                       className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
              href="https://flowbite.com/" className="hover:underline">IK Academy™</a>. Eldorado.JM
          </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;