
export function FormSummaryComponent() {

    return (
        <>
            <div className="form-summary-container">
                <div className="form-summary-container_header">
                    <h1>Finishing up</h1>
                    <div>Double-check everything looks OK before confirming</div>
                </div>

                <div className="form-summary-container_content">
                    <div className="user-plan">
                        <div className="user-plan_div">
                            <div>Arcade (Monthly)</div>
                            <div className="btn">Change</div>
                        </div>
                        <div>$9/mo</div>
                    </div>
                    <div className="dash"></div>

                    <div className="addon">
                        <div>Online service</div>
                        <div>+$1/mo</div>
                    </div>

                    <div className="addon">
                        <div>Larger storage</div>
                        <div>+$2/mo</div>
                    </div>
                </div>

                <div className="total">
                    <div>Total (per month)</div>
                    <div className="price">+$12/mo</div>
                </div>
            </div>

        </>
    );
}