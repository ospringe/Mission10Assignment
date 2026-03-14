// Component for the heading section of the website, which includes the main title and a subtitle describing the purpose of the website.
function Heading() {
    return (
        <section className="heading-section">
            <h1 className="main-title">Bowling League</h1>
            <br />
            <h3 className="subtitle">
                This website displays the bowlers that are on the Marlins and Sharks bowling teams and their information.
            </h3>
        </section>
    );
};

export default Heading;