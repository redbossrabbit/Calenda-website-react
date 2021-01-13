import React, { useState } from 'react'
import Styles from './Home-styles.module.scss'
import CodeSnippets from '../CodeSnippets/CodeSnippets'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import Calendar from '../Calender/Calendar'
import languageData from '../../utils/codeTxt'

const Home = () => {
    let [dropdownOpen, setDropdownOpen] = useState(false);
    const openDropdown = () => {
        setDropdownOpen(prev => !prev);
    }
    const setLangData = [...languageData];
    const data = [openDropdown, dropdownOpen];

    return (
        <main className={Styles.main}>
            <nav className={Styles.nav}>
                <a href="#">Calenda</a>
                <div className={Styles.menus}>
                    <div>
                        <img src={require("../../assets/pen.png")} width="10" height="10" alt="" />
                        <a href="https://www.npmjs.com/package/calenda">Get started</a>
                    </div>
                    <div>
                        <img src={require("../../assets/gears.png")} width="15" height="15" alt="" />
                        <a href="#how-to-use">How to use</a>
                    </div>
                    <div>
                        <svg height="32" viewBox="0 0 16 16" version="1.1" width="12" aria-hidden="true">
                            <g fill="#003e6d">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                </path>
                            </g>
                        </svg>
                        <a href="https://github.com/redbossrabbit/Calenda">Github</a>
                    </div>
                    <div>
                        <img src={require("../../assets/download.png")} width="10" height="12" alt="" />
                        <a href="#download">Download</a>
                    </div>
                </div>
                <img onClick={openDropdown} className={Styles.ham} id="ham" src={require("../../assets/hamburger.png")}
                    width="25" height="25" alt="" />
            </nav>
            {dropdownOpen &&
                <DropDownMenu data={data} />}
            {dropdownOpen && <div className={Styles.black} onClick={openDropdown}></div>}

            <header className={Styles.header}>
                <h1>
                    A solution for your date management
        </h1>
                <p>We've abstracted the complexities of calculating dates for you to use<br />through our easy to use
            light-weight API.
        </p>
                <a href="https://www.npmjs.com/package/calenda">Get started</a>
            </header>
            <h2 className={Styles.hero}>
                Build your time management apps<br />faster <img src={require("../../assets/rocket.png")} width="30" height="30"
                    alt="" />
            </h2>
            <p className={Styles.tryIt}>Try it yourself!</p>
            <Calendar />
            <p className={Styles.heroSuppTxt}>You shouldn't have to spend time creating your date logic from
        scratch.<br />We've got
        you covered.
    </p>
            <h2 className={Styles.howToUse} id="how-to-use"><img src={require("../../assets/gears.png")} width="40" height="40"
                alt="" /> How to use
    </h2>
            <div className={Styles.steps}>
                <p className={Styles.step}>Step <span>1</span>: Install</p>
                <p className={Styles.instruction}>Install calenda from npm by running <span> npm install calenda </span> in
            your
            terminal.</p>

                <CodeSnippets data={setLangData.splice(0, 1)[0]} />

                <p className={Styles.step}>Step <span>2</span>: Initialize</p>
                <p className={Styles.instruction}>Import calenda into your script and initialize a<span> new Calenda </span>
            with an
            object argument specifying the month of the year. <span>The year defaults to the current year
                you are in</span>.</p>

                <CodeSnippets data={setLangData.splice(0, 1)[0]} />

                <p className={Styles.step}>Step <span>3</span>: Get the month structure</p>
                <p className={Styles.instruction}>Call the <span> getStructure </span>method on the<span> calendar </span>
            object then
            get the <span>structure</span> property.</p>

                <CodeSnippets data={setLangData.splice(0, 1)[0]} />

                <p className={Styles.instruction}>This returns an object of arrays with the days of the week as keys and an
            array of numbers as values which are the days of the month that fall on that day of the week as <span>shown
                below</span>.
        </p>

                <CodeSnippets data={setLangData.splice(0, 1)[0]} />

                <p className={Styles.step}>Step <span>4</span>: Get info</p>
                <p className={Styles.instruction}>You can get the info of any day in the selected month by chaining the
            <span>getinfo</span>method to the<span> getStructure </span>method with the chosen date as the first
            argument and a set of options in object format as the second argument on the<span> getInfo </span>
            method.</p>

                <CodeSnippets data={setLangData.splice(0, 1)[0]} />

                <p className={Styles.instruction}>This returns information of the first day of the
            current month <span>January</span>
            as requested above as an object with the values of the specified options.</p>

                <CodeSnippets data={setLangData.splice(0, 1)[0]} />

                <p className={Styles.step}>Step <span>5</span>: Time travel</p>
                <p className={Styles.instruction}>You can move forward or backward from the current month by calling the
            <span> moveMonth </span>method on the<span> calendar </span>object with either<span> 'forward' </span> or
            <span> 'backward' </span>as a string argument on the method. This method can be chained with other
            methods including itself to get your desired results.
        </p>

                <CodeSnippets data={setLangData.splice(0, 1)[0]} />

                <p className={Styles.instruction}>This returns information of the first day of the
            next month <span>February</span>
            as requested above from the current month.
        </p>

                <CodeSnippets data={setLangData.splice(0, 1)[0]} />

            </div>
            <div className={Styles.downloadZIP} id="download">
                <a href="./data/calenda.js" download><img src={require("../../assets/download.png")} width="10" height="12"
                    alt="" /> Download</a>
            </div>
            <a href="https://www.npmjs.com/package/calenda" className={Styles.getNPM}>or get it on npm</a>
            <a href="https://github.com/redbossrabbit">
                <div className={Styles.contributors}>
                    <h2>Contributor(s)</h2>
                    <div className={Styles.profileImage}></div>
                    <p>Ibeh Ubachukwu</p>
                    <i>@redbossrabbit</i>
                    <strong>Founder & Author</strong>
                </div>
            </a>
            <footer className={Styles.footer}></footer>
        </main>
    )
}
export default Home;