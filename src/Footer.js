import "./Footer.css"

function Footer (){
    return(
        <div className="Footer">
            <div className="spenseFooter">
                <p className="boldH">spense.</p>
                <p className="footerCon">Spense is an open platform for individuals <br /> to share their unfiltered thoughts. <br /> Discuss the topics you love, and get paid for doing just that.</p>
            </div>
            <div className="sitemapFooter">
                <p className="boldH">Sitemap</p>
                <p className="footerCon">Homepage</p>
            </div>
            <div className="resourcesFooter">
                <p className="boldH">Resources</p>
                <p className="footerCon">Support</p>
                <p className="footerCon">Contact</p>
                <p className="footerCon">FAQ</p>
            </div>
            <div className="companyFooter">
                <p className="boldH">Company</p> 
                <p className="footerCon">About</p>
                <p className="footerCon">Customers</p>
                <p className="footerCon">Blog</p>
            </div>
            <div className="Opportunities">
                <p className="boldH">Opportunities</p>
                <p className="footerCon">Jobs</p>
            </div>
        </div>
    );
}

export default Footer