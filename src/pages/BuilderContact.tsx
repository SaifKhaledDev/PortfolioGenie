import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPlus, faArrowLeft, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

 function BuilderContact() {
    return (
        <div className="w-full min-h-screen bg-[var(--color-bg-app)] flex flex-col justify-between">

            <div className="w-full">
                {/* Header Section */}
                <header className='w-full bg-[var(--color-white-pure)] border-b border-[var(--color-slate-200-border)] py-4 px-4 sm:px-8 md:px-12 flex flex-col gap-3'>

                    {/* Top Row: Logo & Exit Button */}
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center">
                            <img src='/Logo.svg' alt="PortfolioGenie" className="h-7 w-auto" />
                        </div>

                        <button className='flex items-center gap-2 text-[var(--color-slate-600-medium)] hover:text-[var(--color-violet-hover)] transition-colors cursor-pointer text-sm font-medium'>
                            <FontAwesomeIcon icon={faTimes} />
                            <span>Exit builder</span>
                        </button>
                    </div>

                    {/* 1. Mobile Simplified Header  */}
                    <div className='flex md:hidden flex-col gap-2 pt-1'>
                        <div className='flex justify-between items-center text-xs font-semibold text-[var(--color-slate-900-darkest)]'>
                            <span>Step 4 of 4 · Contact</span>
                        </div>
                        {/* Progress Bar */}
                        <div className='w-full h-1.5 bg-[var(--color-slate-200-border)] rounded-full overflow-hidden'>
                            <div className='w-full h-full bg-[var(--color-violet-primary)] rounded-full'></div>
                        </div>
                    </div>

                    {/* 2. Desktop/Tablet Stepper Header (Hidden on mobile, visible on md and above) */}
                    <div className='w-full hidden md:flex justify-center items-center mt-1'>
                        <nav className='flex items-center gap-3 lg:gap-5'>

                            {/* Step 1: Personal info (Completed) */}
                            <div className='flex items-center gap-2'>
                                <div className='w-6 h-6 rounded-full bg-[var(--color-violet-primary)] text-white flex items-center justify-center text-[11px]'>
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <span className='text-xs text-[var(--color-slate-600-medium)] font-medium'>Personal info</span>
                            </div>

                            <div className='w-10 lg:w-16 h-[2px] bg-[var(--color-violet-primary)]'></div>

                            {/* Step 2: Projects (Completed) */}
                            <div className='flex items-center gap-2'>
                                <div className='w-6 h-6 rounded-full bg-[var(--color-violet-primary)] text-white flex items-center justify-center text-[11px]'>
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <span className='text-xs text-[var(--color-slate-600-medium)] font-medium'>Projects</span>
                            </div>

                            <div className='w-10 lg:w-16 h-[2px] bg-[var(--color-violet-primary)]'></div>

                            {/* Step 3: Skills (Completed) */}
                            <div className='flex items-center gap-2'>
                                <div className='w-6 h-6 rounded-full bg-[var(--color-violet-primary)] text-white flex items-center justify-center text-[11px]'>
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <span className='text-xs text-[var(--color-slate-600-medium)] font-medium'>Skills</span>
                            </div>

                            <div className='w-10 lg:w-16 h-[2px] bg-[var(--color-violet-primary)]'></div>

                            {/* Step 4: Contact (Active) */}
                            <div className='flex items-center gap-2'>
                                <div className='w-6 h-6 rounded-full bg-[var(--color-slate-900-darkest)] text-white flex items-center justify-center text-[11px] font-bold'>
                                    4
                                </div>
                                <span className='text-xs text-[var(--color-slate-900-darkest)] font-bold'>Contact</span>
                            </div>

                        </nav>
                    </div>

                </header>

                {/* Main Content Area */}
                <main className="w-full py-10 px-4 sm:px-6 md:px-12 flex flex-col items-center">
                    <div className="w-full max-w-2xl flex flex-col gap-8">

                        {/* Title & Subtitle */}
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-slate-900-darkest)] tracking-tight">
                                How can people reach you?
                            </h1>
                            <p className="text-sm md:text-base text-[var(--color-slate-600-medium)] font-normal">
                                These links appear in your contact section and footer.
                            </p>
                        </div>

                        {/* Contact Form Card */}
                        <div className="w-full bg-[var(--color-white-pure)] border border-[var(--color-slate-200-border)] rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-xs">

                            {/* 1. Email Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs md:text-sm font-semibold text-[var(--color-slate-900-darkest)]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="maya@mayachen.dev"
                                    className="w-full px-4 py-2.5 border border-[var(--color-slate-200-border)] rounded-xl text-sm text-[var(--color-slate-900-darkest)] outline-none focus:border-[var(--color-violet-primary)] transition-colors bg-white"
                                />
                            </div>

                            {/* 2. GitHub Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs md:text-sm font-semibold text-[var(--color-slate-900-darkest)] flex items-center gap-1.5">
                                    GitHub <span className="text-xs font-normal text-[var(--color-slate-500-light)]">(optional)</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="github.com/mayachen-dev"
                                    className="w-full px-4 py-2.5 border border-[var(--color-slate-200-border)] rounded-xl text-sm text-[var(--color-slate-900-darkest)] outline-none focus:border-[var(--color-violet-primary)] transition-colors bg-white"
                                />
                            </div>

                            {/* 3. LinkedIn Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs md:text-sm font-semibold text-[var(--color-slate-900-darkest)] flex items-center gap-1.5">
                                    LinkedIn <span className="text-xs font-normal text-[var(--color-slate-500-light)]">(optional)</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="linkedin.com/in/mayachen"
                                    className="w-full px-4 py-2.5 border border-[var(--color-slate-200-border)] rounded-xl text-sm text-[var(--color-slate-900-darkest)] outline-none focus:border-[var(--color-violet-primary)] transition-colors bg-white"
                                />
                            </div>

                            {/* 4. Personal Website Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs md:text-sm font-semibold text-[var(--color-slate-900-darkest)] flex items-center gap-1.5">
                                    Personal website <span className="text-xs font-normal text-[var(--color-slate-500-light)]">(optional)</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="yourname.dev"
                                    className="w-full px-4 py-2.5 border border-[var(--color-slate-200-border)] rounded-xl text-sm placeholder-[var(--color-slate-400)] text-[var(--color-slate-900-darkest)] outline-none focus:border-[var(--color-violet-primary)] transition-colors bg-white"
                                />
                            </div>

                            {/* 5. Other Links Section */}
                            <div className="flex flex-col gap-3 pt-2">
                                <label className="text-xs md:text-sm font-semibold text-[var(--color-slate-900-darkest)] flex items-center gap-1.5">
                                    Other links <span className="text-xs font-normal text-[var(--color-slate-500-light)]">(optional)</span>
                                </label>

                                {/* Link Row Item */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                    <input
                                        type="text"
                                        placeholder="Dev.to"
                                        className="w-full sm:w-32 px-4 py-2.5 border border-[var(--color-slate-200-border)] rounded-xl text-sm text-[var(--color-slate-900-darkest)] outline-none focus:border-[var(--color-violet-primary)] transition-colors bg-white shrink-0"
                                    />
                                    <div className="flex items-center gap-2 w-full flex-1">
                                        <input
                                            type="text"
                                            placeholder="dev.to/mayachen"
                                            className="w-full px-4 py-2.5 border border-[var(--color-slate-200-border)] rounded-xl text-sm text-[var(--color-slate-900-darkest)] outline-none focus:border-[var(--color-violet-primary)] transition-colors bg-white"
                                        />
                                        <button className="text-[var(--color-slate-400)] hover:text-[var(--color-slate-600-medium)] transition-colors p-2 cursor-pointer shrink-0">
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </div>
                                </div>

                                {/* Add Link Button */}
                                <div>
                                    <button className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-slate-200-border)] rounded-xl text-sm font-medium text-[var(--color-slate-900-darkest)] hover:bg-[var(--color-slate-50-bg)] transition-colors cursor-pointer mt-1">
                                        <FontAwesomeIcon icon={faPlus} className="text-xs" />
                                        Add link
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </main>
            </div>

            {/* Bottom Action Bar */}
            <div className="w-full bg-[var(--color-white-pure)] border-t border-[var(--color-slate-200-border)] py-4 px-4 sm:px-6 md:px-12 flex justify-between items-center mt-auto gap-4">
                <button className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-[var(--color-slate-200-border)] bg-[var(--color-white-pure)] text-[var(--color-slate-900-darkest)] rounded-xl font-medium text-xs sm:text-sm hover:bg-[var(--color-slate-50-bg)] transition-colors cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back
                </button>

                <button className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--color-violet-primary)] text-white rounded-xl font-medium text-xs sm:text-sm hover:bg-[var(--color-violet-hover)] transition-colors cursor-pointer shadow-sm">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                    Generate Portfolio
                </button>
            </div>

        </div>
    );
}

export default BuilderContact;