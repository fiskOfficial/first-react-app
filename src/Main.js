import "./Main.css"

function Main() {
    return (
        <div className="containor2">
            <div className="content">
                <h1 className="firstRowH1">Share your unfiltered</h1>
                <h1 className="secoundRowH1">thoughts. Get paid.</h1>
                <p className="firstRowP">Spense is an open platform for individuals to share their unfiltered thoughts.</p>
                <p className="secoundRowP"> Discuss the topics you love, and get paid for doing just that.</p>
                <ul className="checkUl">
                    <li>Receive 99% off the earnings.</li>
                    <li>Get paid via Debit Card, ACH, or PayPal.</li>
                    <li>Withdraw your earnings anytime.</li>
                </ul>
                <div className="inputContainor">
                    <input type="email" className="inputEmail" placeholder="john@example.com"></input>
                    <button className="btn"><span className='getS'>Get Satrted</span></button>
                </div>
            </div>
            <div className="imgContainor">
            <div className="backgroundImg">
                <div className="wid">
                    <p className="aprilErnings">April Ernings</p>
                    <p className="money">272.21$</p>
                    <div className="btnContainor"><button className="btnWid">Withdraw</button></div>
                </div>
            </div>
        </div>
     </div>
    );
}

export default Main 